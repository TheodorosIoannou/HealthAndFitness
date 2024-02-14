import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyRunningScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Dashboard Screen</Text>
      {/* Add components for fitness metrics */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyRunningScreen;
