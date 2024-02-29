import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MyRunningScreen = () => {
  const [runningGoal, setRunningGoal] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const handleSetRunningGoal = () => {
    // Implement logic to set running goal
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}> <Icon name="running" size={20} color="black" /> My Running</Text>
      <View style={[styles.container, styles.centerContainer]}>
        <View style={[styles.goalSection, styles.greenBackground]}>
          <DatePicker
            style={{ width: '100%', backgroundColor: 'grey', borderRadius: 20 }}
            date={selectedDate}
            mode="date"
            placeholder="Select date"
            format="YYYY-MM-DD"
            minDate="2022-01-01"
            maxDate="2025-12-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateInput: {
                borderWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: 'white',
              },
            }}
            onDateChange={(date) => setSelectedDate(date)}
          />
          <Text></Text>
          <View style={styles.flexContainer}>
         {/* Add Running Tracker Section */}
          
          </View>
        </View>

        {/* Running Analysis Section */}
        <View style={[styles.goalSection, styles.grayBackground]}>
          <Text style={[styles.heading, { textAlign: 'center', alignSelf: 'center', textDecorationLine: 'underline' }]}>Analysis</Text>
          <Text style={[styles.heading, { textAlign: 'left', }]}> This week</Text>
          <View style={styles.analysisContainer}>
            <Text style={styles.body}>Running Goal: </Text>
            <View style={styles.iconContainer}>
              <Icon name="chart-bar" size={40} color="white" />
              <Icon name="running" size={40} color="white" />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  goalSection: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 8,
    width: '100%',
  },
  greenBackground: {
    backgroundColor: '#005425',
  },
  grayBackground: {
    backgroundColor: '#949494',
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  body: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    cornerRadius: 8,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  addButton: {
    backgroundColor: '#FF9900',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  analysisContainer: {
    flexDirection: 'row', // Make it a horizontal flexbox
    alignItems: 'center', // Align items in the center horizontally
    marginBottom: 10, // Adjust as needed
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyRunningScreen;
