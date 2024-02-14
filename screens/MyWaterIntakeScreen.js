import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const WaterIntakeScreen = () => {
  const [waterIntake, setWaterIntake] = useState('');

  const handleLogWater = () => {
    // Implement logic to log water intake
  };

  return (
    <View style={styles.container}>
      <Text>Water Intake Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter water intake (ml)"
        keyboardType="numeric"
        value={waterIntake}
        onChangeText={(text) => setWaterIntake(text)}
      />
      <Button title="Log Water" onPress={handleLogWater} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default WaterIntakeScreen;
