import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '@/styles/colors';
import {VariantSelector} from '@/components/VariantSelector';
import {QuantitySelector} from '@/components/QuantitySelector';
import {Button} from '@/components/Button';
import {formatPrice} from '@/utils/price';
import {createLocale} from '@/locales';
import styles from './styles';
import {DatoProductFragment} from '@/state/remote-dato/__generated__/types';
import {DastRenderer} from '@/components/DastRenderer';

const localize = createLocale('productDetails');


type VariantType = NonNullable<
  DatoProductFragment['variants']
>['variants'][0] & {
  price?: number;
  isOutOfStock?: boolean;
};

interface ProductItemProps {
  product: DatoProductFragment & {
    price?: number;
    isOutOfStock?: boolean;
    compareAtPrice?: number;
  };
  onAddToCart: (
    productId: string,
    quantity: number,
    variant?: VariantType,
  ) => void;
}

export const ProductItem = ({product, onAddToCart}: ProductItemProps) => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<
    VariantType | undefined
  >();

  // Safety check for undefined product
  if (!product || !product.id) {
    console.warn('ProductItem received undefined or invalid product:', product);
    return null;
  }

  const handleAddToCart = () => {
    onAddToCart(product.id, quantity, selectedVariant);
  };

  const displayPrice = selectedVariant?.price || product.price || 0;
  const displayComparePrice = selectedVariant
    ? undefined
    : product.compareAtPrice;
  const displayImage =
    selectedVariant?.productImages?.[0]?.url || product.productImages?.[0]?.url;
  const displayTitle = selectedVariant?.title || product.title;

  const handleProductPress = () => {
    navigation.navigate('ProductDetails', {
      gtin: product.gtin,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleProductPress}>
      <View style={styles.imageContainer}>
        {displayImage ? (
          <Image source={{uri: displayImage}} style={styles.productImage} />
        ) : (
          <View style={styles.placeholderImage}>
            <Icon name="image" size={40} color={colors.secondary.gray} />
          </View>
        )}
        {!!product.isOutOfStock && (
          <View style={styles.outOfStockBadge}>
            <Text style={styles.outOfStockText}>{localize('outOfStock')}</Text>
          </View>
        )}
      </View>

      <View style={styles.detailsContainer}>
        {product.brandName && (
          <Text style={styles.brandName}>{product.brandName?.title}</Text>
        )}
        <Text style={styles.title} numberOfLines={2}>
          {displayTitle}
        </Text>
        {product.description?.value && (
          <DastRenderer 
            dastData={product.description.value} 
            style={styles.description}
            numberOfLines={2}
          />
        )}

        <View style={styles.priceContainer}>
          <Text style={styles.price}>{formatPrice(displayPrice)}</Text>
          {!!displayComparePrice && displayComparePrice > displayPrice && (
            <Text style={styles.comparePrice}>
              {formatPrice(displayComparePrice)}
            </Text>
          )}
        </View>

        {(product.categories || product.tags) && (
          <View style={styles.metaContainer}>
            {product.categories && product.categories.length > 0 && (
              <View style={styles.categoriesContainer}>
                {product.categories.map((cat, index) => {
                  if (!cat) {
                    return null;
                  }
                  const categoryText = cat.level1 || cat.level2 || cat.level3;
                  if (!categoryText) {
                    return null;
                  }
                  return (
                    <Text key={index} style={styles.categoryTag}>
                      {categoryText}
                    </Text>
                  );
                })}
              </View>
            )}
            {product.tags && product.tags.length > 0 && (
              <View style={styles.tagsContainer}>
                {product.tags.slice(0, 3).map(
                  (tag, index) =>
                    tag && (
                      <Text key={index} style={styles.tag}>
                        #{tag}
                      </Text>
                    ),
                )}
                {product.tags.length > 3 && (
                  <Text style={styles.tag}>
                    +{product.tags.length - 3} more
                  </Text>
                )}
              </View>
            )}
          </View>
        )}

        {product.variants?.variants && product.variants.variants.length > 0 && (
          <VariantSelector
            variants={product?.variants?.variants}
            selectedVariant={selectedVariant}
            onVariantChange={setSelectedVariant}
            variantLabel={product.variants.variantsDropdownLabel}
            disabled={product.isOutOfStock}
          />
        )}

        <View style={styles.actionContainer}>
          <QuantitySelector
            quantity={quantity}
            onQuantityChange={setQuantity}
            disabled={product.isOutOfStock}
            size="small"
            showLabel={false}
          />

          <Button
            title={localize('addToCart')}
            onPress={handleAddToCart}
            disabled={product.isOutOfStock}
            icon="shopping-cart"
            variant="primary"
            size="small"
            style={styles.addToCartButton}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
