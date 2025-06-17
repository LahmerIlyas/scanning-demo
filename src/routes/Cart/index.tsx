import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useCurrentUser} from '@/state/remote-pep-direct/use-current-user';
import {useUpdateCartItem} from '@/state/remote-pep-direct/use-update-cart-item';
import {CartItemCard} from '@/components/CartItemCard';
import {Button} from '@/components/Button';
import {formatPrice} from '@/utils/price';
import {createLocale} from '@/locales';
import {colors} from '@/styles/colors';
import styles from './styles';
import {selectedEnvironment} from '@/constants/environments';

const localize = createLocale('cart');

const MINIMUM_ORDER_QUANTITY = 30;

export function CartRoute() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const {data, loading} = useCurrentUser();
  const [updateCartItem, {loading: isUpdating}] = useUpdateCartItem();
  const [updatingItemId, setUpdatingItemId] = React.useState<string | null>(
    null,
  );

  const cart = data?.currentUser?.cart;
  const totalItems =
    cart?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;
  const itemCount = cart?.items?.length || 0;

  const totalDiscount =
    cart?.items?.reduce((total, item) => {
      if (
        item.strikethroughUnitPrice &&
        item.strikethroughUnitPrice > item.perUnitPrice
      ) {
        const itemDiscount =
          (item.strikethroughUnitPrice - item.perUnitPrice) * item.quantity;
        return total + itemDiscount;
      }
      return total;
    }, 0) || 0;

  const handleClose = () => {
    navigation.goBack();
  };

  const handleUpdateQuantity = async (itemId: string, quantity: number) => {
    setUpdatingItemId(itemId);
    try {
      await updateCartItem({
        variables: {
          input: {
            itemId,
            quantity,
          },
        },
      });
    } finally {
      setUpdatingItemId(null);
    }
  };

  const handleCheckout = () => {
    if (totalItems >= MINIMUM_ORDER_QUANTITY) {
      const tenantId = data?.currentUser?.appId;
      const cartId = cart?.id;

      if (tenantId && cartId) {
        const checkoutUrl = `${selectedEnvironment.checkoutUrl}/${cartId}/${tenantId}`;

        navigation.navigate(
          'CustomBrowserWebview' as never,
          {
            uri: checkoutUrl,
            title: 'Checkout',
          } as never,
        );
      } else {
        console.log('Missing tenantId or cartId:', {tenantId, cartId});
      }
    }
  };

  if (loading && !data) {
    return (
      <View style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary.blue} />
          <Text style={styles.loadingText}>{localize('loadingCart')}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {localize('yourCart')} ({itemCount}{' '}
          {itemCount === 1 ? localize('item') : localize('items')})
        </Text>
        <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
          <Icon name="close" size={24} color={colors.text.primary} />
        </TouchableOpacity>
      </View>

      {!cart || cart.items.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Icon name="shopping-cart" size={80} color={colors.secondary.gray} />
          <Text style={styles.emptyTitle}>{localize('emptyCart')}</Text>
          <Text style={styles.emptySubtitle}>{localize('startShopping')}</Text>
          <Button
            title={localize('goShoppingNow')}
            onPress={() => {
              navigation.goBack();
            }}
            variant="primary"
            size="medium"
          />
        </View>
      ) : (
        <>
          <ScrollView
            style={styles.content}
            showsVerticalScrollIndicator={false}>
            <View style={styles.minimumOrderMessage}>
              <Icon name="info" size={20} color={colors.primary.blue} />
              <Text style={styles.minimumOrderText}>
                {localize('minimumOrderMessage', {
                  quantity: MINIMUM_ORDER_QUANTITY,
                })}
              </Text>
            </View>

            {cart.items.map((item, index) => (
              <View
                key={item.id}
                style={styles.cartItemWrapper}
                >
                <CartItemCard
                  title={item.item.title || ''}
                  description={item.item.brandName || ''}
                  formattedPrice={formatPrice(item.perUnitPrice)}
                  originalPrice={
                    item.strikethroughUnitPrice &&
                    item.strikethroughUnitPrice > item.perUnitPrice
                      ? formatPrice(item.strikethroughUnitPrice)
                      : undefined
                  }
                  imageUrl={item.item.imgUrl || ''}
                  quantity={item.quantity}
                  subtotal={formatPrice(item.subtotal)}
                  onQuantityChange={newQuantity =>
                    handleUpdateQuantity(item.item.id, newQuantity)
                  }
                  onRemoveItemFromCartPressed={() =>
                    handleUpdateQuantity(item.item.id, 0)
                  }
                  disabled={updatingItemId === item.item.id}
                />
                {updatingItemId === item.item.id && (
                  <View style={styles.itemLoadingOverlay}>
                    <ActivityIndicator
                      size="small"
                      color={colors.primary.blue}
                    />
                  </View>
                )}
              </View>
            ))}
          </ScrollView>

          <View style={styles.footer}>
            <View style={styles.footerContent}>
              <View style={styles.orderSummary}>
                <Text style={styles.summaryTitle}>
                  {localize('orderSummary')}
                </Text>

                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>
                    {localize('subtotal')}
                  </Text>
                  <Text style={styles.summaryValue}>
                    {formatPrice(cart.subtotal)}
                  </Text>
                </View>

                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>
                    {localize('shipping')}
                  </Text>
                  <Text
                    style={[
                      styles.summaryValue,
                      cart.shipping === 0 && styles.freeShipping,
                    ]}>
                    {cart.shipping === 0
                      ? localize('free')
                      : formatPrice(cart.shipping)}
                  </Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.summaryRow}>
                  <Text style={styles.totalLabel}>{localize('total')}</Text>
                  <View style={styles.totalSection}>
                    <Text style={styles.totalValue}>
                      {formatPrice(cart.total)}
                    </Text>
                    {totalDiscount > 0 && (
                      <Text style={styles.youSaveText}>
                        {localize('youSave')} {formatPrice(totalDiscount)}
                      </Text>
                    )}
                  </View>
                </View>
              </View>

              <Button
                title={localize('proceedToCheckout')}
                onPress={handleCheckout}
                disabled={totalItems < MINIMUM_ORDER_QUANTITY || isUpdating}
                variant="primary"
                size="large"
                icon="arrow-forward"
                loading={false}
              />

              {totalItems < MINIMUM_ORDER_QUANTITY && (
                <Text style={styles.minimumNotMet}>
                  {localize('addMoreItems', {
                    needed: MINIMUM_ORDER_QUANTITY - totalItems,
                  })}
                </Text>
              )}
            </View>
            <View style={{height: insets.bottom}} />
          </View>
        </>
      )}
    </View>
  );
}
