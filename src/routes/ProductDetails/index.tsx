import React, {useState, useMemo} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {colors} from '@/styles/colors';
import {CustomHeader} from '@/components/CustomHeader';
import {VariantSelector} from '@/components/VariantSelector';
import {QuantitySelector} from '@/components/QuantitySelector';
import {Button} from '@/components/Button';
import {CollapsibleSection} from '@/components/CollapsibleSection';
import {useAddToCart} from '@/state/remote-pep-direct/use-add-to-cart';
import {useProductDetails} from '@/state/remote-pep-direct/use-product-details';
import {DatoProductFragment} from '@/state/remote-dato/__generated__/types';
import {DastRenderer} from '@/components/DastRenderer';
import {formatPrice, formatTotalPrice} from '@/utils/price';
import {createLocale} from '@/locales';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {verticalScale} from '@/utils/styles';

const localize = createLocale('productDetails');
const globalLocalize = createLocale('global');

type VariantType = NonNullable<
  DatoProductFragment['variants']
>['variants'][0] & {
  price?: number;
  isOutOfStock?: boolean;
};

interface ProductDetailsParams {
  gtin: string;
}

export function ProductDetailsRoute() {
  const route = useRoute();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const {gtin} = route.params as ProductDetailsParams;
  const {addToCart, loading: addingToCart} = useAddToCart();
  const {data, loading, error} = useProductDetails(gtin);

  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<
    VariantType | undefined
  >();

  const product = data?.itemByGtin;

  const displayPrice = selectedVariant?.price || product?.price || 0;
  const displayComparePrice = selectedVariant
    ? undefined
    : product?.compareAtPrice;
  const displayImage =
    selectedVariant?.productImages?.[0]?.url ||
    product?.productImages?.[0]?.url;
  const displayTitle =
    selectedVariant?.title || product?.title || localize('productDetails');

  const detailsData = useMemo(() => {
    const details = [];

    if (product?.brandName?.title) {
      details.push({
        label: localize('brand'),
        value: product.brandName.title,
      });
    }

    if (product?.dimensions) {
      details.push({
        label: localize('sizeWeight'),
        value: product.dimensions,
      });
    }

    if (product?.itemFamily) {
      details.push({
        label: 'Item Family',
        value: product.itemFamily,
      });
    }

    if (product?.itemVariant) {
      details.push({
        label: 'Variant',
        value: product.itemVariant,
      });
    }

    return details;
  }, [product]);

  const handleAddToCart = async () => {
    if (!product) {
      return;
    }

    try {
      const itemIdToAdd = selectedVariant ? selectedVariant.id : product.id;

      await addToCart({
        itemId: itemIdToAdd,
        quantity,
      });

      const variantText = selectedVariant
        ? ` (${selectedVariant.itemVariant})`
        : '';

      Alert.alert(
        localize('success'),
        `${quantity} ${localize('addedToCartSuccess')}${variantText}`,
        [{text: globalLocalize('ok')}],
      );
    } catch (err) {
      Alert.alert(globalLocalize('error'), localize('addToCartError'), [
        {text: globalLocalize('ok')},
      ]);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <CustomHeader
          title={localize('loading')}
          showBackButton
          showLogo={false}
          showDeliverTo={false}
          onBackPress={() => navigation.goBack()}
        />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary.blue} />
        </View>
      </View>
    );
  }

  if (error || !product) {
    return (
      <View style={styles.container}>
        <CustomHeader
          title={localize('productNotFound')}
          showBackButton
          showLogo={false}
          showDeliverTo={false}
          onBackPress={() => navigation.goBack()}
        />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            {localize('unableToLoadProduct')}
          </Text>
          <TouchableOpacity
            style={styles.retryButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.retryText}>{localize('goBack')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CustomHeader
        title={product?.brandName?.title || localize('productDetails')}
        showBackButton
        showLogo={false}
        showDeliverTo={false}
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <View style={styles.imageContainer}>
          {displayImage ? (
            <Image source={{uri: displayImage}} style={styles.productImage} />
          ) : (
            <View style={styles.placeholderImage}>
              <Icon name="image" size={80} color={colors.secondary.gray} />
            </View>
          )}
          {product.isOutOfStock && (
            <View style={styles.outOfStockBadge}>
              <Text style={styles.outOfStockText}>
                {localize('outOfStock')}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.productInfo}>
          <Text style={styles.productId}>
            {product.brandName && `${product.brandName.title}`}
          </Text>

          <Text style={styles.title}>{displayTitle}</Text>

          <View style={styles.priceQuantitySection}>
            <View style={styles.priceInfo}>
              <Text style={styles.price}>{formatPrice(displayPrice)}</Text>
              {displayComparePrice && displayComparePrice > displayPrice && (
                <Text style={styles.comparePrice}>
                  {formatPrice(displayComparePrice)}
                </Text>
              )}
            </View>

            {product.isOutOfStock ? (
              <Text style={styles.outOfStockLabel}>
                {localize('outOfStock')}
              </Text>
            ) : (
              <QuantitySelector
                quantity={quantity}
                onQuantityChange={setQuantity}
                disabled={false}
                size="medium"
                showLabel={false}
              />
            )}
          </View>

          {product.variants?.variants &&
            product.variants.variants.length > 0 && (
              <View style={styles.flavorSection}>
                <Text style={styles.flavorTitle}>
                  {product.variants.variantsDropdownLabel || localize('flavor')}
                </Text>
                <Text style={styles.flavorSelected}>
                  {selectedVariant?.itemVariant ||
                    product.itemVariant ||
                    'Default'}
                </Text>
                <VariantSelector
                  variants={product.variants.variants}
                  selectedVariant={selectedVariant}
                  onVariantChange={setSelectedVariant}
                  disabled={product.isOutOfStock}
                />
              </View>
            )}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{localize('overview')}</Text>

            {product.description?.value && (
              <DastRenderer
                dastData={product.description.value}
                style={styles.description}
              />
            )}
          </View>

          {product.ingredients && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{localize('ingredients')}</Text>
              <Text style={styles.description}>{product.ingredients}</Text>
            </View>
          )}

          {detailsData.length > 0 && (
            <CollapsibleSection
              title={localize('details')}
              defaultExpanded={false}>
              <View style={styles.specsContainer}>
                {detailsData.map((detail, index) => (
                  <View key={index} style={styles.specRow}>
                    <Text style={styles.specLabel}>{detail.label}:</Text>
                    <Text style={styles.specValue}>{detail.value}</Text>
                  </View>
                ))}
              </View>
            </CollapsibleSection>
          )}

          <CollapsibleSection
            title={localize('shippingAndReturns')}
            defaultExpanded={false}>
            <Text style={styles.description}>
              {localize('shippingDescription')}
            </Text>
            <Text style={[styles.description, {marginTop: verticalScale(12)}]}>
              <Text style={styles.boldText}>Returns and Issues:</Text>{' '}
              {localize('returnsDescription')}
            </Text>
          </CollapsibleSection>

          <View style={styles.bottomSpacing} />
        </View>
      </ScrollView>

      <View style={[styles.footer, {paddingBottom: insets.bottom + 16}]}>
        <View style={styles.footerPriceContainer}>
          <Text style={styles.footerPriceLabel}>{localize('totalPrice')}</Text>
          <Text style={styles.footerPrice}>
            {formatTotalPrice(displayPrice, quantity)}
          </Text>
        </View>

        <Button
          title={localize('addToCart')}
          onPress={handleAddToCart}
          disabled={product.isOutOfStock || false}
          loading={addingToCart}
          icon="shopping-cart"
          variant="primary"
          size="medium"
        />
      </View>
    </View>
  );
}
