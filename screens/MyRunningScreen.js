import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MyRunningScreen = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const currentDate = new Date().toDateString();
  const [distanceCovered, setDistanceCovered] = useState(0);

  const handleStartRunning = () => {
    navigation.navigate('Map'); // Navigate to the Map screen 
  };


  const updateDistanceCovered = (newDistance) => {
    setDistanceCovered(newDistance);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}> <Icon name="running" size={20} color="black" /> My Running</Text>
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
            <View style={styles.centerContainer}>
              <Text style={styles.runningSection}>
              <Icon name="chevron-left" style={{ color: 'white' }} /> {currentDate}  <Icon name="chevron-right" style={{ color: 'white' }} />
              </Text>
              <TouchableOpacity style={styles.addButton} onPress={handleStartRunning}>
                <Icon name="play" style={{ ...styles.startButtonIcon, color: 'white' }} />
              </TouchableOpacity>
              <Text style={styles.body}> Begin</Text>
<Text style={styles.distanceCoveredfont}> {distanceCovered} km</Text>
            </View>
          </View>
         {/* Running Analysis Section */}
        <View style={[styles.goalSection, styles.grayBackground]}>
          <Text style={[styles.heading, { textAlign: 'center', alignSelf: 'center', textDecorationLine: 'underline' }]}>Analysis</Text>
          <Text style={[styles.heading, { textAlign: 'left' }]}> This week</Text>
          <View style={styles.analysisContainer}>
            <Text style={styles.body}>Running Goal: </Text>
            <View style={styles.iconContainer}>
              <Icon name="chart-bar" size={40} color="white" />
              <Icon name="running" size={40} color="white" />
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
  runningSection: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
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
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingTop: 10,
  },
  addButton: {
    backgroundColor: '#FF9900',
    borderRadius: 40,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
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
  distanceCoveredfont: {
    color: 'white',
    fontSize: 30,
  },
  analysisContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    padding: 10,
  },
});

export default MyRunningScreen;
