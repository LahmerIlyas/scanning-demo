import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '@/styles/colors';
import WhiteLogo from '@/assets/logo-white.svg';
import {useCurrentUser} from '@/state/remote-pep-direct/use-current-user';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

interface CustomHeaderProps {
  title?: string;
  showBackButton?: boolean;
  showLogo?: boolean;
  showDeliverTo?: boolean;
  showCartIcon?: boolean;
  onBackPress?: () => void;
  backgroundColor?: string;
  titleColor?: string;
}

export const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  showBackButton = false,
  showLogo = true,
  showDeliverTo = true,
  showCartIcon = true,
  onBackPress,
  backgroundColor = colors.primary.blue,
  titleColor = colors.secondary.white,
}) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const {data} = useCurrentUser();

  const cartItemCount =
    data?.currentUser?.cart?.items?.reduce(
      (total, item) => total + item.quantity,
      0,
    ) || 0;

  return (
    <View style={[styles.container, {backgroundColor, paddingTop: insets.top}]}>
      <View style={styles.topRow}>
        {showBackButton && (
          <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
            <Icon name="arrow-back" size={24} color={colors.secondary.white} />
          </TouchableOpacity>
        )}

        {showLogo && <WhiteLogo width={150} height={30} />}

        {title && (
          <Text style={[styles.title, {color: titleColor}]} numberOfLines={1}>
            {title}
          </Text>
        )}

        {showDeliverTo && (
          <View style={styles.rightSection}>
            <TouchableOpacity style={styles.deliverToRow}>
              <Icon
                name="location-on"
                size={20}
                color={colors.secondary.white}
              />
              <Text style={styles.deliverToText}>Deliver to</Text>
              <Icon
                name="keyboard-arrow-down"
                size={20}
                color={colors.secondary.white}
              />
            </TouchableOpacity>

            {showCartIcon && (
              <TouchableOpacity
                style={styles.cartButton}
                onPress={() => navigation.navigate('Cart' as never)}>
                <Icon
                  name="shopping-cart"
                  size={24}
                  color={colors.secondary.white}
                />
                {cartItemCount > 0 && (
                  <View style={styles.cartBadge}>
                    <Text style={styles.cartBadgeText}>{cartItemCount}</Text>
                  </View>
                )}
              </TouchableOpacity>
            )}
          </View>
        )}

        {showBackButton && !showDeliverTo && (
          <View style={styles.placeholder} />
        )}
      </View>
    </View>
  );
};
