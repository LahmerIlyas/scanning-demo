import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function CheckoutRoute() {
  return (
    <View style={styles.container}>
      <Text>Checkout Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
