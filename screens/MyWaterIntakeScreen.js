import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

const MyWaterIntakeScreen = () => {
  const [waterIntake, setWaterIntake] = useState('');
  const [waterLog, setWaterLog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const totalWaterGoal = 2000; // Set your daily water intake goal in ml

  const handleLogWater = () => {
    if (waterIntake.trim() === '') {
      alert('Please enter water intake');
      return;
    }

    const enteredIntake = parseInt(waterIntake);

    if (enteredIntake > totalWaterGoal) {
      setError('Entered intake exceeds the goal');
      return;
    }

    setLoading(true);

    // Simulate an asynchronous operation (e.g., API call) to log water intake
    setTimeout(() => {
      setWaterLog([...waterLog, { amount: parseInt(waterIntake), date: new Date() }]);
      setWaterIntake('');
      setLoading(false);
    }, 1000); // Adjust the delay as needed
  };

  const handleDeleteLog = (index) => {
    const updatedLogs = [...waterLog];
    updatedLogs.splice(index, 1);
    setWaterLog(updatedLogs);
  };

  const calculateTotalWaterConsumed = () => {
    return waterLog.reduce((total, log) => total + log.amount, 0);
  };

  const calculateProgress = () => {
    const consumed = calculateTotalWaterConsumed();
    return Math.min((consumed / totalWaterGoal) * 60, 60); // Ensure progress does not exceed 100%
    
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        <Icon name="tint" size={20} color="black" /> My Water Intake
      </Text>
      <View style={styles.sectionContainer}>
        {/* Add components for water intake */}
        <TextInput
          style={styles.input}
          placeholder="Enter water intake (ml)"
          keyboardType="numeric"
          value={waterIntake}
          onChangeText={(text) => {
            setWaterIntake(text);
            setError(''); // Clear the error when user starts typing
          }}
        />
        <Button title="Log Water" onPress={handleLogWater} />
        {loading && <View style={styles.loadingOverlay} />}
        {error !== '' && <Text style={styles.errorText}>{error}</Text>}
        <Text style={styles.sectionBody}>This section allows you to log your water intake.</Text>
      </View>

      {/* Display logged water intake */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Water Intake Log</Text>
        {waterLog.map((log, index) => (
          <View key={index} style={styles.logContainer}>
            <Text style={styles.logText}>{`${log.amount} ml on ${log.date.toLocaleString()}`}</Text>
            <TouchableOpacity onPress={() => handleDeleteLog(index)}>
              <Icon name="trash" size={18} color="white" style={styles.deleteIcon} />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Custom Water Bottle Progress Bar */}
      <View style={styles.waterBottleContainer}>
        <ImageBackground
          source={require('../icons/water_bottle_image.png')} // Replace with your actual image path
          style={styles.waterBottleImage}
        >
          <View style={styles.progressBarOverlay}>
            <View style={[styles.progressBar, { height: `${calculateProgress()}%` }]} />
          </View>
        </ImageBackground>
        <Text style={styles.waterIntakeText}>
          {`Total: ${calculateTotalWaterConsumed()} ml / Goal: ${totalWaterGoal} ml`}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionContainer: {
    backgroundColor: '#0089FF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  sectionBody: {
    fontSize: 14,
    color: 'white',
    marginTop: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  logText: {
    color: 'white',
    fontSize: 16,
  },
  deleteIcon: {
    marginLeft: 10,
  },
  waterBottleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  waterBottleImage: {
    width: 200,
    height: 400,
    resizeMode: 'contain',
  },
  progressBarOverlay: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center', // Center the progress bar horizontally
  },
  progressBar: {
    width: 135,
    backgroundColor: 'rgba(0, 136, 255, 0.7)',
    borderRadius: 15,
    marginBottom: 23,
  },
  waterIntakeText: {
    marginTop: 10,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
  },
});

export default MyWaterIntakeScreen;
