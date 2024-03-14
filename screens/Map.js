import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { FontAwesome5, MaterialCommunityIcons } from 'react-native-vector-icons';
import { Stopwatch } from 'react-native-stopwatch-timer';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MapScreen = ({ navigation }) => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [coordinates, setCoordinates] = useState([]);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const stopwatchRef = useRef();

  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  };

  const handlePositionChange = (newPosition) => {
    if (
      newPosition &&
      newPosition.nativeEvent &&
      newPosition.nativeEvent.coordinate &&
      newPosition.nativeEvent.coordinate.latitude &&
      newPosition.nativeEvent.coordinate.longitude
    ) {
      const { coordinate } = newPosition.nativeEvent;
      setCurrentPosition(coordinate);
      setCoordinates((prevCoordinates) => [...prevCoordinates, coordinate]);
    } else {
      console.error('Invalid position data received:', newPosition);
    }
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
    setCoordinates([]); // Clear the coordinates
    setCurrentPosition(null); // Reset current position
    navigation.navigate('MyRunningScreen'); // Navigate away
  };

  return (
    <Stack.Navigator initialRouteName="MapScreen">
      <Stack.Screen name="MapScreen">
        {() => (
          <View style={styles.container}>
            <View style={styles.topContainer}>
              <View style={styles.timerContainer}>
                <Stopwatch
                  ref={stopwatchRef}
                  laps
                  msecs
                  start={isStopwatchStart}
                  reset={resetStopwatch}
                />
              </View>
            </View>
            <MapView
              style={styles.map}
              showsUserLocation={true}
              followsUserLocation={true}
              initialRegion={region}
              onUserLocationChange={handlePositionChange}
            >
              <Polyline coordinates={coordinates} strokeWidth={3} strokeColor="blue" />
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
    flexDirection: 'column',
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  map: {
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFA500',
    padding: 10,
  },
  button: {
    backgroundColor: '#FF9900',
    borderRadius: 50,
    padding: 15,
  },
  completeButton: {
    backgroundColor: '#FF4500', // Dark Orange color
  },
});

export default MapScreen;
