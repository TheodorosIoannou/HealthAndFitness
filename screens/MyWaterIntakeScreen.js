import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MyWaterIntakeScreen = () => {
  const [waterIntake, setWaterIntake] = useState('');

  const handleLogWater = () => {
    // Implement logic to log water intake
  };

  return (
    <ScrollView contentContainerStyle={styles.title}>
      <Text style={styles.title}> <Icon name="tint" size={20} color="black" /> My Water Intake</Text>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <View style={[styles.sectionContainer, { backgroundColor: '#0089FF' }]}>
            <View style={styles.iconContainer}>

            </View>
            {/* Add components for water intake */}
            <TextInput
              style={styles.input}
              placeholder="Enter water intake (ml)"
              keyboardType="numeric"
              value={waterIntake}
              onChangeText={(text) => setWaterIntake(text)}
            />
            <Button title="Log Water" onPress={handleLogWater} />
            <Text style={styles.sectionBody}>This section allows you to log your water intake.</Text>
          </View>
        </View>
      </ScrollView></ScrollView>

  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',

  },

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    width: '80%', // Adjust width as needed
    marginTop: 20,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center', // Center elements horizontally
  },
  iconContainer: {
    marginBottom: 10, // Adjust the margin as needed
  },
  sectionTitle: {
    fontSize: 20, // Increased font size
    fontWeight: 'bold',
    color: 'white',
  },
  sectionBody: {
    fontSize: 12, // Increased font size
    color: 'white',
    marginTop: 10, // Increased margin top
  },

  input: {
    height: 40,
    width: '100%', // Adjust width to 100%
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10, // Decreased margin bottom
    paddingHorizontal: 10,
    color: 'white',
  },
});

export default MyWaterIntakeScreen;
