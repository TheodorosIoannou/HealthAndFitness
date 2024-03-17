import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from 'react-native-vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import haversine from 'haversine';
import MyRunningScreen from './MyRunningScreen'; // adjust the import paths as needed

const Stack = createStackNavigator();

const RunningTrackerScreen = ({ navigation }) => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [coordinates, setCoordinates] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0); // Custom timer state
  const [distance, setDistance] = useState(0);
  const [calories, setCalories] = useState(0);
  const userWeight = 68; // Example user weight in kg. Use dynamic user input in real applications.

  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  };

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1); // Increment timer every second
        calculateMetrics();
      }, 1000);
    } else if (!isRunning && interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, coordinates]);

  const calculateMetrics = () => {
    if (coordinates.length > 1) {
      const totalDistance = coordinates.reduce((acc, curr, idx, src) => {
        if (idx === 0) return acc;
        return acc + haversine(src[idx - 1], curr, { unit: 'km' });
      }, 0);
      setDistance(totalDistance);

      if (totalDistance > 0) {
        const averageCaloriesPerKm = 60;
        const weightAdjustmentFactor = userWeight / 68;
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
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  // Modified handleStop to use custom timer implementation
  const handleStop = () => {
    setIsRunning(false);
    // Format the timer to HH:MM:SS for display
    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;
    const formattedTime = [hours, minutes, seconds].map(unit => String(unit).padStart(2, '0')).join(':');

    navigation.navigate('MyRunningScreen', {
      distance: distance.toFixed(2),
      calories: calories,
      stopwatch: formattedTime, // Uses the custom timer
    });

    // Reset states
    setTimer(0); // Reset custom timer
    setCoordinates([]);
    setCurrentPosition(null);
    setDistance(0);
    setCalories(0);
  };

  return (
    <Stack.Navigator initialRouteName="RunningTrackerScreen">
      <Stack.Screen name="Running Tracker " options={{ headerShown: false }}>
        {() => (
          <View style={styles.container}>
            <View style={styles.topContainer}>
              <View style={styles.timerContainer}>
                {/* Timer Display */}
                <Text style={styles.timerText}>{new Date(timer * 1000).toISOString().substr(11, 8)}</Text>
                <View style={styles.metricsContainer}>
                  <Text style={{ color: 'white' }}><MaterialIcons name="directions-run" size={18} color={'white'} /> {distance.toFixed(2)} KM</Text>
                  <Text style={{ color: 'white' }}><MaterialIcons name="local-fire-department" size={18} color={'white'} /> {calories} CAL</Text>
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
    marginVertical: 20,
    backgroundColor: '#3C3C3C',
    borderRadius: 10,
    padding: 10,
  },
  timerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  metricsContainer: {
    alignItems: 'center',
    marginTop: 10,
    color: 'white',
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
