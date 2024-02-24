import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DashboardScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.title}>
      <Text style={styles.title}> <Icon name="tachometer-alt" size={20} color="black" /> Dashboard</Text>
      <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.sectionContainer, { backgroundColor: '#EF583F' }]}>
        <View style={styles.iconContainer}>
          <Icon name="check" size={40} color="white" />
        </View>
        {/* Add components for my goals */}
        <Text style={styles.sectionTitle}>Goals</Text>
        <Text style={styles.sectionBody}>Running:</Text>
        <Text style={styles.sectionBody}>15/35 km</Text>
        <Text></Text>
        <Text style={styles.sectionBody}>Water Intake:</Text>
        <Text style={styles.sectionBody}>50% Till now</Text>
        <Text></Text>
        <Text style={styles.sectionBody}>This section provides to the user Goals details</Text>
      </View>

      <View style={[styles.sectionContainer, { backgroundColor: '#005425' }]}>
        <View style={styles.iconContainer}>
          <Icon name="running" size={40} color="white" />
        </View>
        {/* Add components for running goals */}
        <Text style={styles.sectionTitle}>Running</Text>
        <Text style={styles.sectionBody}>Total Distance Run:</Text>
        <Text style={styles.sectionTitle}>35 km</Text>
        <Text></Text>
        <Text style={styles.sectionBody}>This section provides to the user running details</Text>
      </View>

      <View style={[styles.sectionContainer, { backgroundColor: '#0089FF' }]}>
        <View style={styles.iconContainer}>
          <Icon name="tint" size={40} color="white" />
        </View>
        {/* Add components for water intake */}
        <Text style={styles.sectionTitle}>Water Intake</Text>
        <Text style={styles.sectionBody}>Total Water Consumed:</Text>
        <Text style={styles.sectionTitle}>200 L</Text>
        <Text></Text>
        <Text style={styles.sectionBody}>This section provides to the user running details</Text>
      </View>

      <View
        style={[
          styles.sectionContainer,
          { backgroundColor: '#4C0096', marginBottom: 20 },
        ]}
      >
        <View style={styles.iconContainer}>
          <Icon name="medal" size={40} color="white" />
        </View>

        {/* Add components for badges */}
        <Text style={styles.sectionTitle}>Rewards</Text>
        <Text style={styles.sectionBody}>Received the: </Text>
        <Text style={styles.sectionTitle}>10k badge</Text>
        <Text></Text>
        <Text style={styles.sectionBody}>This section provides to the user rewards details</Text>
      </View>
    </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop:10,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  sectionContainer: {
    flex: 1,
    width: '80%', // Adjust width as needed
    marginTop: 20,
    justifyContent: 'left',
    alignItems: 'left',
    borderRadius: 10,
    paddingLeft: 20,
    paddingTop: 20
  },
  iconContainer: {
    marginBottom: 10, // Adjust the margin as needed
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  sectionBody: {
    fontSize: 12,
    color: 'white',
  }
});

export default DashboardScreen;
