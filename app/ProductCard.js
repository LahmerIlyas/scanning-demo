import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from './styles';

export const ProductCard = ({ product, onAddToCart }) => {
  const { image, title, price } = product;

  return (
    <View style={styles.productCardContainer}>
      <Image
        source={{ uri: image }}
        style={styles.productImage}
        resizeMode="cover"
      />
      <View style={styles.productInfoContainer}>
        <Text style={styles.productTitle} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.productPrice}>
          ${price.toFixed(2)}
        </Text>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => onAddToCart(product)}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}; 