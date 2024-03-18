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
          placeholderTextColor="white"
          keyboardType="numeric"
          value={waterIntake}
          onChangeText={(text) => {
            setWaterIntake(text);
            setError(''); // Clear the error when user starts typing
          }}
        />

        <Button
          title="Log Water"
          onPress={handleLogWater}
          color="#FF7E08"
          style={styles.logButton}

        />
        {loading && <View style={styles.loadingOverlay} />}
        {error !== '' && <Text style={styles.errorText}>{error}</Text>}

        {/* Display tips in a table-like structure */}
        <View style={styles.tableContainer}>
          <Text style={styles.tableHeader}>Tips:</Text>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}> A normal glass of water equals to 240 ml.</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}> A small bottle of water equals to 250 ml.</Text>
          </View>
        </View>
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

      <View style={styles.analysisContainer}>
        <Text style={styles.analysisTitle}>Analysis</Text>
        <View style={styles.analysisInfoContainer}>
          <View style={styles.analysisInfo}>
            <Icon name="tint" size={25} color="#fff" />
            <Text style={styles.analysisValue}>{`${calculateTotalWaterConsumed()} ml`}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.analysisInfo}>
            <Icon name="bullseye"size={25} color="#fff" />
            <Text style={styles.analysisValue}>{`${totalWaterGoal} ml`}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.analysisInfo}>
            <Icon name="percentage" size={25} color="#fff" />
            <Text style={styles.analysisValue}>{`${calculateProgress()}%`}</Text>
          </View>
        </View>
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
    marginBottom: 10,

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
  separator: {
    height: '100%',
    width: 1,
    backgroundColor: 'white', // White line separating each piece of information
    marginHorizontal: 10, // Adjust the spacing as needed
  },

  // Additional styles for the Analysis Section
  analysisContainer: {
    backgroundColor: '#949494', 
    borderRadius: 10,
    
  },
  analysisTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white', // White text color
    textAlign: 'center',
    textDecorationLine: 'underline', // Underline the title
  },
  analysisInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 5,
  },
  analysisInfo: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 5,
    },
  analysisLabel: {
    fontSize: 16,
    color: 'white', // White text color
    marginBottom: 5,
  },
  analysisValue: {
    fontSize: 16,
    color: 'white', // White text color
  },
  // Additional styles for the table
  tableContainer: {
    backgroundColor: '#0089FF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 0,
  },
  tableHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  tableRow: {
    marginBottom: 0,
  },
  tableCell: {
    fontSize: 14,
    color: 'white',
  },


});

export default MyWaterIntakeScreen;
