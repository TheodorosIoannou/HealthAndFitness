// app.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DashboardScreen from './screens/DashboardScreen';
import MyRunningScreen from './screens/MyRunningScreen';
import MyGoalsScreen from './screens/MyGoalsScreen'; 
import MyRewardsScreen from './screens/MyRewardsScreen';
import MyWaterIntakeScreen from './screens/MyWaterIntakeScreen'; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
          
            if (route.name === 'Dashboard') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'MyGoals') {
              iconName = focused ? 'list-box' : 'list';
            } else if (route.name === 'MyRewards') {
              iconName = focused ? 'gift' : 'gift-outline';
            } else if (route.name === 'MyRunning') {
              iconName = focused ? 'directions-walk' : 'directions-walk';
            } else if (route.name === 'MyWaterIntake') {
              iconName = focused ? 'local-drink' : 'local-drink'; // Use lowercase consistently
            }
          
            return <Icon name={iconName} size={size} color={color} />;
         }
         ,
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="MyGoals" component={MyGoalsScreen} />
        <Tab.Screen name="MyRewards" component={MyRewardsScreen} />
        <Tab.Screen name="MyRunning" component={MyRunningScreen} />
        <Tab.Screen name="MyWaterIntake" component={MyWaterIntakeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
