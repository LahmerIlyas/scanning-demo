import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { getBarCodeMapping } from './utils';
import { useItemsByGtins } from '@/state/remote-pep-direct/use-items-by-gtins';
import { colors } from '@/styles/colors';
import { useProductByGtins } from '@/state/remote-dato/use-product-by-gtins';
import { ProductItem } from '@/components/ProductItem';
import { mergeProductData } from '@/utils/merge-product-data';



// The flow will be as follow:
//
export function BarCodeScannerQuickAddToCartRoute() {
  const { params } = useRoute();
  const mappedProduct = getBarCodeMapping(params?.id);

  const {
    pepItems,
    loading,
  } = useItemsByGtins(
    mappedProduct.type === 'pepsico' ?
      [mappedProduct.productId] :
      mappedProduct.pepsicoProductIds
  );
  const { data: datoProducts, loading: datoLoading } = useProductByGtins(
    mappedProduct.type === 'pepsico' ?
      [mappedProduct.productId] :
      mappedProduct.pepsicoProductIds
  );

  if (loading || datoLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary.blue} />
      </View>

    );
  }

  if (mappedProduct.type === 'pepsico') {
    const merged = mergeProductData(datoProducts.allProducts, pepItems);
    return (
      <ScrollView>
        <ProductItem product={merged[0]} onAddToCart={() => { }} />
      </ScrollView>
    );
  }

  if (mappedProduct.type === 'non-pepsico') {
    const merged = mergeProductData(datoProducts.allProducts, pepItems);
    return (
      <ScrollView >
        {merged.map(item => (
          <ProductItem key={item.id} product={item} onAddToCart={() => { }} />
        ))}
      </ScrollView>
    );
  }


  return (
    <View style={styles.container}>
      <Text>BarCodeScannerQuickAddToCartScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
