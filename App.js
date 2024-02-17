import 'react-native-gesture-handler';
import React from 'react';
import { Button, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import '@fortawesome/fontawesome-free/css/all.css';


import DashboardScreen from './screens/DashboardScreen';
import MyRunningScreen from './screens/MyRunningScreen';
import MyGoalsScreen from './screens/MyGoalsScreen';
import MyRewardsScreen from './screens/MyRewardsScreen';
import MyWaterIntakeScreen from './screens/MyWaterIntakeScreen';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity activeOpacity={0.5}>
            <Image
              source={require('./icons/logo.png')}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#7DD600' },
          headerTintColor: 'white',
          drawerActiveBackgroundColor: '#f00e1ff',
          drawerActiveTintColor: '#497D00',
          drawerStyle: { backgroundColor: '#ccc' },

        }
        }
      >
        <Drawer.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            drawerIcon: ({ color, size }) =>
              <Ionicons name='bar-chart-outline' color={color} size={size} />
          }} />

        <Drawer.Screen
          name="MyGoals"
          component={MyGoalsScreen}
          options={{
            drawerIcon: ({ color, size }) =>
              <Ionicons name='create-outline' color={color} size={size} />
          }} />


        <Drawer.Screen
          name="MyRewards"
          component={MyRewardsScreen}
          options={{
            drawerIcon: ({ color, size }) =>
              <Ionicons name='ribbon-outline' color={color} size={size} />
          }} />

        <Drawer.Screen
          name="MyRunning"
          component={MyRunningScreen}
          options={{
            drawerIcon: ({ color, size }) =>
              <Ionicons name='walk-outline' color={color} size={size} />
          }} />

        <Drawer.Screen
          name="MyWaterIntake"
          component={MyWaterIntakeScreen}
          options={{
            drawerIcon: ({ color, size }) =>
              <Ionicons name='water-outline' color={color} size={size} />
          }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
