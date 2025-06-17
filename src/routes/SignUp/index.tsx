import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function SignUpRoute() {
  return (
    <View style={styles.container}>
      <Text>SignUp Screen</Text>
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
