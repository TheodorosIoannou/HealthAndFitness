import { getCurrentPositionAsync } from 'expo-location';
import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Added import

function LocationPicker() {
  const [pickedLocation, setPickedLocation] = useState();

  const navigation = useNavigation ()
  const [locationPermissionInformation, requestPermission] = 
  useForegroundPermissions();

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionsResponse.granted;
    }
  }

async function getLocationHandler() {
  const hasPermission = await verifyPermissions();

  if (!hasPermission) {
    return;
  }

  const location = await getCurrentPositionAsync();
  setPickedLocation({
    lat: location.coords.latitide,
    lng: location.coords.longitude,
  });;
}
function pickOnMapHandler() {
  navigation.navigate('Map');
}
}

