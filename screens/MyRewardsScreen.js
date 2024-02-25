import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView ,Image} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome5';


const RunningBadge = ({ name, icon, description }) => (
  <View style={styles.badgeContainer}>
    <Icon name={icon} size={30} color="white" />
    <Text style={styles.badgeText}>{name}</Text>
    <Text style={styles.badgeDescription}>{description}</Text>
  </View>
);
const AwardedBadgesScreen = () => {
  const [runningGoal, setRunningGoal] = useState('');
  const [waterIntakeGoal, setWaterIntakeGoal] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleSetRunningGoal = () => {
    // Implement logic to set running goal
  };

  const handleSetWaterIntakeGoal = () => {
    // Implement logic to set water intake goal
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}> <Icon name="tint" size={20} color="black" /> My Rewards</Text>
      {/* Running Badges Section */}
      <View style={[styles.sectionContainer, styles.greenBackground]}>
        <Text style={styles.heading}> <Icon name="running" size={20} color="white" /> Running Badges Available</Text>
        <View style={styles.goalSection}>
          {/* Add running badges or relevant components here */}
          
          <RunningBadge name="5K Champion" icon="medal" description="Complete a 5km run" />
          <Image source={require('../icons/5kmRun.png')} style={{ alignSelf: 'center' }}/>
          <RunningBadge name="10K Master" icon="medal" description="Complete 10km run" />
          <Image source={require('../icons/10kmRun.png')} style={{ alignSelf: 'center' }}/>
          <RunningBadge name="10K Master" icon="medal" description="Complete 10km run" />
          <Image style={{ justifyContent: 'center', alignItems: 'center' }} source={require('../icons/15kmRun.png')} style={{ alignSelf: 'center' }}/>

        </View>
      </View>
      {/* Water Intake Badges Section */}
      <View style={[styles.sectionContainer, styles.lightBlueBackground]}>
        <Text style={styles.heading}> <Icon name="tint" size={20} color="white" /> Water Intake Badges Available</Text>
        <View style={styles.goalSection}>
          {/* Add water intake badges or relevant components here */}
          
          <RunningBadge  name="Hydration Beginer" icon="medal" description="Reache 100L water intake goal to gain this " />
          <Image source={require('../icons/100LWaterIntake.png')} style={{ alignSelf: 'center' }}/>
         
          <RunningBadge name="Hydration Pro" icon="medal" description="Achieved 10000ml water intake goal" />
          <Image source={require('../icons/200LWaterIntake.png')} style={{ alignSelf: 'center' }}/>
          
          <RunningBadge name="Hydration Master" icon="medal" description="Exceeded 15000ml water intake goal" />
          <Image source={require('../icons/300LWaterIntake.jpg')} style={{ alignSelf: 'center' }}/>
        </View>
      </View>

      {/* Analysis Section */}
      <View style={[styles.goalSection, styles.grayBackground]}>
        <Text style={[styles.heading, { textAlign: 'center', textDecorationLine: 'underline' }]}>Analysis</Text>
        <Text style={[styles.heading, { textAlign: 'left', }]}> This week</Text>
        <View style={styles.analysisContainer}>
          <Text style={styles.body}>Running Goal: </Text>
          <View style={styles.iconContainer}>
            <Icon name="chart-bar" size={40} color="white" />
            <Icon name="running" size={40} color="white" />
          </View>
        </View>
      </View>
    </ScrollView>

  );  

}

const styles = StyleSheet.create({
  title: {
    marginTop:0,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },

  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
 
    padding: 20,
  },
  sectionContainer: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 8,
    width: '100%', 
   
  
  },
  goalSection: {
    marginTop: 10,
  },
  greenBackground: {
    backgroundColor: '#005425',
  },
  lightBlueBackground: {
    backgroundColor: '#00D1FF',
  },
  grayBackground: {
    backgroundColor: '#949494',
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
  analysisContainer: {
    flexDirection: 'row', // Make it a horizontal flexbox
    
    marginBottom: 10, // Adjust as needed
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
  badgeContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  badgeDescription: {
    color: 'white',
    fontSize: 12,
    marginTop: 2,
  },
});

export default AwardedBadgesScreen;
