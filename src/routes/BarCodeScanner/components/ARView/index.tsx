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

// The component must be registered and must either have a static and instance property `moduleName` by
// which it's registered, or must inherit from `BarcodeTrackingAdvancedOverlayView`.
// See: `AppRegistry.registerComponent(ARView.moduleName, () => ARView)` in index.js
export class ARViewCompetitor extends BarcodeTrackingAdvancedOverlayView {
  state = { showBarcodeData: false };

  render() {
    const { stock } = this.props;
    const { showBarcodeData } = this.state;

    return (
      <TouchableWithoutFeedback onPress={() => this.setState({ showBarcodeData: !showBarcodeData })}>
        <View style={styles.lookingForBetterValueBubbleContentContainer}>
          <View style={styles.lookingForBetterValueBubbleContent}>
            <Text style={styles.arBubbleHeader} numberOfLines={2}>Looking for better value?</Text>
            <Pressable style={styles.viewAlternativesButton}>
              <Text style={styles.viewAlternativesButtonText}>View Alternatives</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}


export class ARView extends BarcodeTrackingAdvancedOverlayView {
  state = { showBarcodeData: false };

  render() {
    const { stock } = this.props;
    const { showBarcodeData } = this.state;

    return (
      <TouchableWithoutFeedback onPress={() => this.setState({ showBarcodeData: !showBarcodeData })}>
        <View style={styles.arBubbleContainer}>
          <View style={styles.arBubbleImageContainer}>
            <Image source={{
              uri: 'https://www.datocms-assets.com/101859/1744642611-chews_5ct_fruit-punch_producttile_2680x3344_a2.png?auto=format&fit=max&w=640'
            }} style={styles.arBubbleImage} />
          </View>
          <View style={styles.arBubbleContent}>
            <Text style={styles.arBubbleHeader} numberOfLines={2}>Gatorade Energy Chews</Text>
            <Text style={styles.arBubbleInfo}>$19.98</Text>
          </View>
          <View style={styles.addToCartImageContainer}>
            <Image source={require('./cart-plus-svgrepo-com.png')} style={styles.addToCartImage} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export class ARViewLoading extends BarcodeTrackingAdvancedOverlayView {
  state = { showBarcodeData: false };

  render() {
    const { stock } = this.props;
    const { showBarcodeData } = this.state;

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