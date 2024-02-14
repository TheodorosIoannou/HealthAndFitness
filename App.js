import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import DashboardScreen from './screens/DashboardScreen';
import MyRunningScreen from './screens/MyRunningScreen';
import MyGoalsScreen from './screens/MyGoalsScreen'; 
import MyRewardsScreen from './screens/MyRewardsScreen';
import MyWaterIntakeScreen from './screens/MyWaterIntakeScreen'; 


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#3c0a6b'},
        headerTintColor: 'white',
        drawerActiveBackgroundColor: '#f00e1ff',
        drawerActiveTintColor: '#3c0a6b',
        drawerStyle:{backgroundColor: '#ccc'},
      }}
      >
        <Drawer.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{
          drawerIcon: ({color, size}) => 
          <Ionicons name= 'dashboard' color={color} size={size}/>
        }} />

      <Drawer.Screen 
        name="MyGoals" 
        component={MyGoalsScreen} 
        options={{
          drawerIcon: ({color, size}) => 
          <Ionicons name= 'Goals' color={color} size={size}/>
        }} />


<Drawer.Screen 
        name="MyRewards" 
        component={MyRewardsScreen} 
        options={{
          drawerIcon: ({color, size}) => 
          <Ionicons name= 'Rewards' color={color} size={size}/>
        }} />

<Drawer.Screen 
        name="MyRunning" 
        component={MyRunningScreen} 
        options={{
          drawerIcon: ({color, size}) => 
          <Ionicons name= 'RunningScreen' color={color} size={size}/>
        }} />

<Drawer.Screen 
        name="MyWaterIntake" 
        component={MyWaterIntakeScreen} 
        options={{
          drawerIcon: ({color, size}) => 
          <Ionicons name= 'WaterIntake' color={color} size={size}/>
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
