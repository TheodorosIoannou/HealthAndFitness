import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RewardsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Rewards Screen</Text>
      {/* Add components for displaying rewards */}
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

export default RewardsScreen;
