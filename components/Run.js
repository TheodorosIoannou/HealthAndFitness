import React from 'react';
import { StyleSheet, View } from 'react-native';
import {  Location } from 'expo';
import MapView from 'react-native-maps';
import * as turf from '@turf/turf'; // Add turf import
import { Run, Loading } from '../components/Loading'; // Check this import path

const { Marker, Polyline } = MapView;

const distanceBetween = (from, to) => {
  const options = { units: 'meters' };
  const origin = turf.point([from.coords.longitude, from.coords.latitude]);
  const destination = turf.point([to.coords.longitude, to.coords.latitude]);
  return turf.distance(origin, destination, options);
};

const paceBetween = (distance, from, to) => {
  const pace = (to.timestamp - from.timestamp) / distance;
  return pace;
};

export default class Run extends React.PureComponent {
  map = React.createRef();

  state = {
    positions: [],
    duration: 0,
    distance: 0,
  };

  interval;

  watcher;

  async componentDidMount() {
    const options = { enableHighAccuracy: true, timeInterval: 1000, distanceInterval: 1 };
    this.watcher = await Location.watchPositionAsync(options, this.onNewPosition);
  }

  componentWillUnmount() {
    this.watcher.remove();
  }

  onNewPosition = (position) => {
    this.map.current.animateToCoordinate(position.coords, 1000);
    const { positions } = this.state;
    const duration = positions[0] ? position.timestamp - positions[0].timestamp : 0;
    const distance = positions[0] ? distanceBetween(positions[positions.length - 1], position) : 0;
    const pace = positions[0] ? paceBetween(distance, positions[positions.length - 1], position) : 0;
    this.setState({
      positions: [...positions, position], duration, distance: this.state.distance + distance, pace,
    });
  }

  render() {
    const {
      latitude, longitude, distance: totalDistance,
    } = this.props;
    const {
      positions, distance, pace,
    } = this.state;
    const currentPosition = positions[positions.length - 1];
    return (
      <View style={styles.container}>
        <MapView
          ref={this.map}
          style={styles.map}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.01,
          }}
          provider="google"
        >
          <Marker
            coordinate={currentPosition ? currentPosition.coords : { latitude, longitude }}
            anchor={{ x: 0.5, y: 0.5 }}
          />
          <Polyline
            strokeColor="#e9ac47"
            strokeWidth={4}
            coordinates={positions.map(position => position.coords)}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
