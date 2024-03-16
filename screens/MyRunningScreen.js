import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import route1 from '../icons/route.png';


const MyRunningScreen = ({navigation, route}) => {
  const currentDate = new Date().toDateString();
  const [distanceCovered, setDistanceCovered] = useState(0);
  const [realTimeDistance, setRealTimeDistance] = useState(distance);
  const [realTimeCalories, setRealTimeCalories] = useState(calories);
  
  const handleStartRunning = () => {
    navigation.navigate('Map'); // Navigate to the Map screen 
  };


  const updateDistanceCovered = (newDistance) => {
    setDistanceCovered(newDistance);
  };

  const { distance = '0', calories = '0' } = route.params || {};

  useEffect(() => {
    if(route.params) {
      const { distance, calories } = route.params;
      setRealTimeDistance(distance);
      setRealTimeCalories(calories);
    }
  }, [route.params]);
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}><Icon name="running" size={20} color="black" /> My Running</Text>
          <View style={[styles.goalSection, styles.greenBackground]}>
            
            <View style={styles.centerContainer}>
              <Text style={styles.runningSection}>
              <Icon name="chevron-left" style={{ color: 'white' }} /> {currentDate}  <Icon name="chevron-right" style={{ color: 'white' }} />
              </Text>
              <TouchableOpacity style={styles.addButton} onPress={handleStartRunning}>
                <Icon name="play" size={25} style={{ ...styles.startButtonIcon, color: 'white'}} />
              </TouchableOpacity>
              <Text style={styles.heading}> Begin</Text>
       
      <Image source={route1} style={{ width: 150, height: 150 }} />
    
            </View>
          </View>
         {/* Running Analysis Section */}
<View style={[styles.goalSection, styles.grayBackground, { alignItems: 'center', justifyContent: 'center' }]}>
  <Text style={[styles.heading, { textDecorationLine: 'underline' }]}>Analysis</Text>
  
  {/* Displaying the passed metrics - Distance */}
  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', marginVertical: 10 }}>
    <Text style={[styles.heading, { textAlign: 'center', marginHorizontal: 10 }]}>{realTimeDistance} KM</Text>
    <Icon name="route" size={40} color="#fff" />
  </View>

  {/* Calories Text with Icon */}
  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100', marginVertical: 10 }}>
    <Text style={[styles.heading, { textAlign: 'center', marginHorizontal: 10 }]}>{realTimeCalories} KCAL</Text>
    <Icon name="fire" size={40} color="#fff" />
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
    paddingBottom: 20
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
    paddingBottom: 20,
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
    padding: 0,
    paddingTop: 10,
  },
  addButton: {
    backgroundColor: '#FF9900',
    borderRadius: 60,
    width: 90,
    height: 90,
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
