import React, {useCallback} from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';
import {FormTextField} from '@/components/FormTextField';
import {FormProvider, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useLogin} from '@/state/remote-pep-direct/use-login';
import {ApolloError} from '@apollo/client';
import CookieManager from '@react-native-cookies/cookies';
import {selectedEnvironment} from '@/constants/environments';
import {useAuthLocalState} from '@/state/local/auth';
import {createLocale} from '@/locales';

const localize = createLocale('signIn');

type FormInput = {
  email: string;
  password: string;
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export function SignInRoute() {
  const {setCookie} = useAuthLocalState();
  const [login] = useLogin();
  const form = useForm<FormInput>({
    defaultValues: {
      email: 'Mohamed.Khezour.Contractor@pepsico.com',
      password: 'QWe123$$',
    },
    resolver: yupResolver(validationSchema),
  });

  const onSignInButtonClicked = useCallback(
    async (values: FormInput) => {
      try {
        const result = await login({
          variables: {
            input: {
              email: values.email,
              password: values.password,
            },
          },
        });
        if (!result.data?.loginUser?.id) {
          Alert.alert(localize('loginCredentialsError'));
          return;
        }
        const cookies = await CookieManager.get(
          selectedEnvironment.pepdirectGraphqlUrl,
        );
        const cookie = Object.entries(cookies).find(([name, _config]) => {
          return name === selectedEnvironment.authCookieName;
        });
        if (!cookie || !cookie?.[1]?.value) {
          Alert.alert(localize('cookieNotFoundError'));
          return;
        }
        setCookie(cookie?.[1]?.value);
      } catch (e) {
        if (e instanceof ApolloError) {
          console.log({
            name: e.name,
            cause: e.cause,
            gqlErrors: e.graphQLErrors,
            message: e.message,
          });
        }
      }
    },
    [login, setCookie],
  );

  return (
    <FormProvider {...form}>
      <View style={styles.container}>
        <FormTextField name="email" label={localize('email')} />
        <FormTextField
          secureTextEntry
          name="password"
          label={localize('password')}
        />
        <Button
          title={localize('login')}
          onPress={form.handleSubmit(onSignInButtonClicked)}
        />
      </View>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    rowGap: 8,
  },
});
