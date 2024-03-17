import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Ensure you have FontAwesome5 loaded
import route1 from '../icons/route.png';

const MyRunningScreen = ({ navigation, route }) => {
  const currentDate = new Date().toLocaleDateString();
  const [realTimeDistance, setRealTimeDistance] = useState('0');
  const [realTimeCalories, setRealTimeCalories] = useState('0');
  const [realTimeTime, setRealTimeTime] = useState('00:00:00');

  useEffect(() => {
    if (route.params) {
      const { distance, calories, stopwatch } = route.params;
      setRealTimeDistance(distance);
      setRealTimeCalories(calories);
      setRealTimeTime(stopwatch); 
    }
  }, [route.params]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        <Icon name="running" size={20} color="black" /> My Running
      </Text>
      <View style={[styles.goalSection, styles.greenBackground]}>
        <View style={styles.centerContainer}>
          <Text style={styles.runningSection}>
            <Icon name="chevron-left" style={{ color: 'white' }} /> {currentDate} <Icon name="chevron-right" style={{ color: 'white' }} />
          </Text>
          <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Map')}> 
            <Icon name="play" size={25} style={{ ...styles.startButtonIcon, color: 'white' }} />
          </TouchableOpacity>
          <Text style={styles.heading}> Begin</Text>
          <Image source={route1} style={{ width: 150, height: 150 }} />
        </View>
      </View>
      {/* Running Analysis Section - Modified for horizontal layout */}
      <View style={[styles.goalSection, styles.grayBackground]}>
        <Text style={[styles.heading, { textDecorationLine: 'underline', marginBottom: 20 }]}>Analysis</Text>
        <View style={styles.analysisContainer}>
          <View style={styles.analysisItem}>
            <Icon name="clock" size={25} color="#fff" />
            <Text style={styles.analysisText}>{realTimeTime}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.analysisItem}>
            <Icon name="route" size={25} color="#fff" />
            <Text style={styles.analysisText}>{realTimeDistance} KM</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.analysisItem}>
            <Icon name="fire" size={25} color="#fff" />
            <Text style={styles.analysisText}>{realTimeCalories} KCAL</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
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
  analysisContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  analysisItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  analysisText: {
    color: 'white',
    marginTop: 5,
    fontSize: 16,
  },
  separator: {
    height: '100%',
    width: 1,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  runningSection: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#FF9900',
    borderRadius: 60,
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  heading: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyRunningScreen;
