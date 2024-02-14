import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const MyGoalsScreen = () => {
  const [fitnessGoal, setFitnessGoal] = useState('');

  const handleSetGoal = () => {
    // Implement logic to set fitness goal
  };

  return (
    <View style={styles.container}>
      <Text>My Goals Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Set your fitness goal"
        value={fitnessGoal}
        onChangeText={(text) => setFitnessGoal(text)}
      />
      <Button title="Set Goal" onPress={handleSetGoal} />
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

export default MyGoalsScreen;
