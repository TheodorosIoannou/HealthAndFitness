import React from 'react';
import { View, Image, Text } from 'react-native';
import { Styles } from '../styles/Styles';

const DashboardScreen = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Image
          source={require('../icons/logo.png')}
          style={Styles.logo}
        />
        <Image
          source={require('../icons/user-icon.png')}
          style={Styles.userIcon}
        />
      </View>
      <View style={Styles.content}>
        <View style={Styles.flexContainer}>
          <View style={[Styles.sectionBox, { 
            backgroundColor: '#EF583F',
            flex: 1,
            borderRadius: 20,
            margin: 10,
          }]}>
            <Text style={[Styles.sectionHeading, { color: 'white' }]}>Goals</Text>
            {/* Add goal details here */}
          </View>

          <View style={[Styles.sectionBox, { 
            backgroundColor: '#EF583F',
            flex: 1,
            borderRadius: 20,
            margin: 10,
          }]}>
            <Text style={[Styles.sectionHeading, { color: 'white' }]}>Running</Text>
            {/* Add running details here */}
          </View>

          <View style={[Styles.sectionBox, { 
            backgroundColor: '#EF583F',
            flex: 1,
            borderRadius: 20,
            margin: 10,
          }]}>
            <Text style={[Styles.sectionHeading, { color: 'white' }]}>Water Intake</Text>
            {/* Add water intake details here */}
          </View>
        </View>
      </View>
    </View>
  );
};

DashboardScreen.navigationOptions = {
  headerTitle: '', // Set an empty string to hide the title
};

export default DashboardScreen;