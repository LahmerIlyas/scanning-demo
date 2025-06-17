import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '@/styles/colors';
import { Button } from '@/components/Button';
import { formatPrice } from '@/utils/price';
import { createLocale } from '@/locales';
import { moderateScale } from '@/utils/styles';

const localize = createLocale('productDetails');

interface ProductCardProps {
  product: {
    title: string;
    price: number;
    imageUrl?: string;
    brandName?: string;
  };
  onAddToCart: () => void;
  onViewDetails: () => void;
}

export const ProductCard = ({ product, onAddToCart, onViewDetails }: ProductCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onViewDetails}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          {product.imageUrl ? (
            <Image source={{ uri: product.imageUrl }} style={styles.image} />
          ) : (
            <View style={styles.placeholderImage}>
              <Icon name="image" size={40} color={colors.secondary.gray} />
            </View>
          )}
        </View>

        <View style={styles.detailsContainer}>
          {product.brandName && (
            <Text style={styles.brandName}>{product.brandName}</Text>
          )}
          <Text style={styles.title} numberOfLines={2}>
            {product.title}
          </Text>
          <Text style={styles.price}>{formatPrice(product.price)}</Text>
          
          <Button
            title={localize('addToCart')}
            onPress={onAddToCart}
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.card,
    borderRadius: moderateScale(12),
    padding: moderateScale(12),
    width: moderateScale(300),
    shadowColor: colors.secondary.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    flexDirection: 'row',
  },
  imageContainer: {
    marginRight: moderateScale(12),
  },
  image: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(8),
    backgroundColor: colors.background.main,
  },
  placeholderImage: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(8),
    backgroundColor: colors.background.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  brandName: {
    fontSize: moderateScale(12),
    color: colors.text.secondary,
    marginBottom: moderateScale(4),
  },
  title: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: moderateScale(4),
  },
  price: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: colors.primary.blue,
    marginBottom: moderateScale(8),
  },
  addToCartButton: {
    marginTop: 'auto',
  },
}); 