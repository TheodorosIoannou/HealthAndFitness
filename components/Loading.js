import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

export default class Loading extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222',
  },
});
