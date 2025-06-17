import React from 'react';
import {
  Image,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { BarcodeTrackingAdvancedOverlayView } from 'scandit-react-native-datacapture-barcode';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { styles } from './styles';
import { getBarCodeMapping } from './utils';
import { useItemsByGtins } from '@/state/remote-pep-direct/use-items-by-gtins';
import { useProductByGtins } from '@/state/remote-dato/use-product-by-gtins';
import { client } from '@/client';
import { ApolloProvider } from '@apollo/client';
import { mergeProductData } from '@/utils/merge-product-data';
import { formatPrice } from '@/utils/price';
import NavigationService from '@/navigation/service';
import { useNavigation } from '@react-navigation/native';
import { emitViewAlternatives } from '@/events';

// The component must be registered and must either have a static and instance property `moduleName` by
// which it's registered, or must inherit from `BarcodeTrackingAdvancedOverlayView`.
// See: `AppRegistry.registerComponent(ARView.moduleName, () => ARView)` in index.js
export class ARView extends BarcodeTrackingAdvancedOverlayView {
  render() {
    const { barcodeData } = this.props;
    return (
      <ApolloProvider client={client}>
      <ARViewUi barCode={barcodeData} />
      </ApolloProvider>
    );
  }
}


const ARViewUi = ({barCode}: {barCode: string}) => {
  const mappedProduct = getBarCodeMapping(barCode);
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
      <ARViewLoading />
    );
  }
  const merged = mergeProductData(datoProducts.allProducts, pepItems);

  if(mappedProduct.type === 'non-pepsico') {
    return (
      <ARViewCompetitor barCode={barCode} />
    );
  }

  const product = merged.find(product => product.gtin === mappedProduct.productId);
  return (
    <View>
    <View style={styles.arBubbleContainer}>
      <View style={styles.arBubbleImageContainer}>
        <Image source={{
          uri: product?.productImages?.[0]?.url || ''
        }} style={styles.arBubbleImage} />
      </View>
      <View style={styles.arBubbleContent}>
        <Text style={styles.arBubbleHeader} numberOfLines={2}>{product?.title || "Unknown Product"}</Text>
        <Text style={styles.arBubbleInfo}>{ formatPrice(product?.price || 0)}</Text>
      </View>
      <View style={styles.addToCartImageContainer}>
        <Image source={require('./cart-plus-svgrepo-com.png')} style={styles.addToCartImage} />
      </View>
    </View>
  </View>  )
}

const ARViewCompetitor  = ({barCode}: {barCode: string}) => {
    return (
      <View>
        <View style={styles.lookingForBetterValueBubbleContentContainer}>
          <View style={styles.lookingForBetterValueBubbleContent}>
            <Text style={styles.arBubbleHeader} numberOfLines={2}>Looking for better value?</Text>
            <Pressable style={styles.viewAlternativesButton} onPress={() => {
              // publish event
              console.log('view alternatives');
              emitViewAlternatives(barCode)
            }}>
              <Text style={styles.viewAlternativesButtonText}>View Alternatives</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
}

 class ARViewLoading extends React.Component  {
  render() {
    return (
      <View style={styles.arBubbleContainer}>
        <SkeletonPlaceholder borderRadius={8} width={200} height={50}>
          <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
            <SkeletonPlaceholder.Item width={50} height={50} borderRadius={8} />
            <SkeletonPlaceholder.Item paddingLeft={10}>
              <SkeletonPlaceholder.Item width={90} height={12} />
              <SkeletonPlaceholder.Item marginTop={6} height={12} />
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item width={50} height={50} borderRadius={25} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
    );
  }
}