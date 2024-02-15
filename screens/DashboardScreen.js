import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DashboardScreen = () => {
  return (
    
    <ScrollView contentContainerStyle={styles.container}>

<View style={[styles.sectionContainer, { backgroundColor: '#EF583F' }]}>
        <Text style={styles.sectionTitle}><Icon name="check" size={20} color="white" /> My Goals</Text>
        {/* Add components for my goals */}
      </View>

      <View style={[styles.sectionContainer, { backgroundColor: '#005425' }]}>
        <Text style={styles.sectionTitle}>        <Icon name="fas fa-running" size={30} color="white" />
 Running Goals</Text>
        {/* Add components for running goals */}
      </View>

      <View style={[styles.sectionContainer, { backgroundColor: '#0089FF' }]}>
        
        <Text style={styles.sectionTitle}> <Icon name="tint" size={18} color="white" /> Water Intake</Text>
        {/* Add components for water intake */}
      </View>

      <View style={[styles.sectionContainer, { backgroundColor: '#4C0096', marginBottom: 20 }]}>
        <Text style={styles.sectionTitle}><Icon name="star" size={18} color="white" /> Badges</Text>
        {/* Add components for badges */}
      </View>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    flex: 1,
    width: '80%', // Adjust width as needed
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default DashboardScreen;
