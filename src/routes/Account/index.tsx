import React, {useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useAuthLocalState} from '@/state/local/auth';
import CookieManager from '@react-native-cookies/cookies';
import {resetOnLogoutPersistedVars} from '@/state/local/reactive-persist';
import {useCurrentUser} from '@/state/remote-pep-direct/use-current-user';
import {createLocale, supportedLanguages} from '@/locales';
import {useLocales} from '@/hooks/use-locales';
import {colors} from '@/styles/colors';
import RNRestart from 'react-native-restart';
import {AvailableLocale} from '@/locales/types';

const languageNames: Record<AvailableLocale, string> = {
  'en-US': 'English',
  'es-MX': 'Español (México)',
};

const localize = createLocale('account');
const globalLocalize = createLocale('global');

export function AccountRoute() {
  const {clearCookie} = useAuthLocalState();
  const {selectedLocale, setSelectedLocale} = useLocales();
  const {data} = useCurrentUser();

  const onLogoutButtonClicked = useCallback(async () => {
    await CookieManager.clearAll();
    await resetOnLogoutPersistedVars();
    clearCookie();
  }, [clearCookie]);

  const handleLanguageChange = useCallback(
    (locale: AvailableLocale) => {
      if (locale === selectedLocale) {
        return;
      }

      Alert.alert(
        localize('language'),
        `Change language to ${languageNames[locale]}? App will restart.`,
        [
          {text: globalLocalize('cancel'), style: 'cancel'},
          {
            text: globalLocalize('ok'),
            onPress: () => {
              setSelectedLocale(locale);
              RNRestart.Restart();
            },
          },
        ],
      );
    },
    [selectedLocale, setSelectedLocale],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{localize('account')}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{localize('profile')}</Text>
        <Text style={styles.userInfo}>User ID: {data?.currentUser?.id}</Text>
        <Text style={styles.userInfo}>
          {data?.currentUser?.firstName} {data?.currentUser?.lastName}
        </Text>
        <Text style={styles.userInfo}>{data?.currentUser?.email}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{localize('language')}</Text>
        <Text style={styles.currentLanguage}>
          Current: {languageNames[selectedLocale]}
        </Text>

        <View style={styles.languageButtons}>
          {supportedLanguages.map(locale => (
            <TouchableOpacity
              key={locale}
              style={[
                styles.languageButton,
                selectedLocale === locale && styles.selectedLanguageButton,
              ]}
              onPress={() => handleLanguageChange(locale)}>
              <Text
                style={[
                  styles.languageButtonText,
                  selectedLocale === locale &&
                    styles.selectedLanguageButtonText,
                ]}>
                {languageNames[locale]}
              </Text>
              {selectedLocale === locale && (
                <Text style={styles.checkmark}>✓</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Button title={localize('logout')} onPress={onLogoutButtonClicked} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary.blue,
    marginBottom: 24,
    textAlign: 'center',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.primary.blue,
    marginBottom: 12,
  },
  userInfo: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    paddingLeft: 8,
  },
  currentLanguage: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    paddingLeft: 8,
  },
  languageButtons: {
    gap: 12,
  },
  languageButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedLanguageButton: {
    backgroundColor: colors.primary.blue,
    borderColor: colors.primary.blue,
  },
  languageButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  selectedLanguageButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  checkmark: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
