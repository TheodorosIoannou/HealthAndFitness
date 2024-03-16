import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from 'react-native-vector-icons';
import { Stopwatch } from 'react-native-stopwatch-timer';
import { createStackNavigator } from '@react-navigation/stack';
import haversine from 'haversine';
import MyRunningScreen from './MyRunningScreen'; // adjust the import paths as needed


const Stack = createStackNavigator();

const RunningTrackerScreen = ({ navigation }) => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [coordinates, setCoordinates] = useState([]);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const stopwatchRef = useRef();
  const [distance, setDistance] = useState(0); // Distance in kilometers
  const [calories, setCalories] = useState(0); // Calories burned
  const userWeight = 68; // Example user weight in kg. Use dynamic user input in real application.

  const [stopwatchTime, setStopwatchTime] = useState('00:00:00'); // Initialize with 00:00:00 or the initial time

  
  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  };

  useEffect(() => {
    let interval = null;
    if (isStopwatchStart) {
      interval = setInterval(() => {
        calculateMetrics();
      }, 1000); // Recalculates every second while the stopwatch is running.
    } else if (!isStopwatchStart && interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isStopwatchStart, coordinates]);

  const calculateMetrics = () => {
    if (coordinates.length > 1) {
      const totalDistance = coordinates.reduce((acc, curr, idx, src) => {
        if (idx === 0) return acc;
        return acc + haversine(src[idx - 1], curr, { unit: 'km' });
      }, 0);
      setDistance(totalDistance);
  
      if (totalDistance > 0) {
        // The simplified calculation; assuming 60 calories per km as a base
        // Then adjust slightly by weight; this is very approximate
        const averageCaloriesPerKm = 60;
        const weightAdjustmentFactor = userWeight / 68; // Adjust based on comparison to example weight
        const caloriesBurned = totalDistance * averageCaloriesPerKm * weightAdjustmentFactor;
        setCalories(Math.round(caloriesBurned));
      }
    }
  };
  

  const handlePositionChange = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setCurrentPosition({ latitude, longitude });
    setCoordinates(prevCoordinates => [...prevCoordinates, { latitude, longitude }]);
  };

  const handleStart = () => {
    setIsStopwatchStart(true);
    setResetStopwatch(false);
  };

  const handlePause = () => {
    setIsStopwatchStart(false);
  };

  const handleStop = () => {
    setIsStopwatchStart(false);
    setResetStopwatch(true);
    setCoordinates([]);
    setCurrentPosition(null);
    navigation.navigate('MyRunningScreen', { 
      distance: distance.toFixed(2), // Assuming you have a route named 'MyRunningScreen'
      calories: calories,
    });
  
    setDistance(0);
    setCalories(0);
  };
  return (
    <Stack.Navigator initialRouteName="RunningTrackerScreen">
      <Stack.Screen name="Running Tracker " options={{ headerShown: false }}>
        {() => (
          <View style={styles.container}>
            <View style={styles.topContainer}>
              <View style={styles.timerContainer }>
                <Stopwatch 
                  ref={stopwatchRef}
                  laps
                  msecs
                  start={isStopwatchStart}
                  reset={resetStopwatch}
                />
                  <View style={styles.metricsContainer}>
                  <Text style={{ color: 'white' }}><MaterialIcons name="directions-run" size={18} color={'white'} /> {distance.toFixed(2)} KM</Text>
                  <Text style={{ color: 'white' }}><MaterialIcons name="local-fire-department" size={18} color={'white'} />  {calories}  CAL</Text>
                </View>
              </View>
            </View>
            <MapView
              style={styles.map}
              showsUserLocation={true}
              followsUserLocation={true}
              initialRegion={region}
              onUserLocationChange={handlePositionChange}
            >
              {coordinates.length > 1 && <Polyline coordinates={coordinates} strokeWidth={3} strokeColor="blue" />}
              {currentPosition && <Marker coordinate={currentPosition} />}
            </MapView>
            <View style={styles.bottomContainer}>
              <TouchableOpacity style={styles.button} onPress={handleStart}>
                <FontAwesome5 name="play" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handlePause}>
                <MaterialCommunityIcons name="pause" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.completeButton]} onPress={handleStop}>
                <FontAwesome5 name="stop" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
  topContainer: {
    backgroundColor: '#3C3C3C',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    
  },
  timerContainer: {
    backgroundColor: '#3C3C3C',
    borderRadius: 10,
    padding: 0,
  },
  metricsContainer: {
    alignItems: 'center', 
    marginTop: 10,
    color:'white'
  },
  map: {
    flex: 3,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#3C3C3C',
    padding: 10,
  },
  button: {
    backgroundColor: '#FF9900',
    borderRadius: 50,
    padding: 15,
  },
  completeButton: {
    backgroundColor: '#FF4500',
  },
});

export default RunningTrackerScreen;
