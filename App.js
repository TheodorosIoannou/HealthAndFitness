import 'react-native-gesture-handler';
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import '@fortawesome/fontawesome-free/css/all.css';

import DashboardScreen from './screens/DashboardScreen';
import MyRunningScreen from './screens/MyRunningScreen';
import MyGoalsScreen from './screens/MyGoalsScreen';
import MyRewardsScreen from './screens/MyRewardsScreen';
import MyWaterIntakeScreen from './screens/MyWaterIntakeScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Custom header component
const CustomHeader = ({ navigation }) => (
  <TouchableOpacity
    activeOpacity={0.5}
    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
  >
    <Image
      source={require('./icons/logo.png')}
      style={{ width: 115, height: 120 / 2 }} />
  </TouchableOpacity>
);

function DashboardStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'white' },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="DashboardStack"
        component={DashboardScreen}
        options={{
          headerShown: true,
          headerLeft: () => <CustomHeader navigation={navigation} />,
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.5}>
              <Ionicons name="person-circle-outline" size={40} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function MyGoalsStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'white' },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="MyGoalsStack"
        component={MyGoalsScreen}
        options={{
          headerShown: true,
          headerLeft: () => <CustomHeader navigation={navigation} />,
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.5}>
              <Ionicons name="person-circle-outline" size={40} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function MyRunningStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'white' },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="MyRunningStack"
        component={MyRunningScreen}
        options={{
          headerShown: true,
          headerLeft: () => <CustomHeader navigation={navigation} />,
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.5}>
              <Ionicons name="person-circle-outline" size={40} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function MyWaterIntakeStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'white' },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="MyWaterIntakeStack"
        component={MyWaterIntakeScreen}
        options={{
          headerShown: true,
          headerLeft: () => <CustomHeader navigation={navigation} />,
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.5}>
              <Ionicons name="person-circle-outline" size={40} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function MyRewardsStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'white' },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="MyRewardsStack"
        component={MyRewardsScreen}
        options={{
          headerShown: true,
          headerLeft: () => <CustomHeader navigation={navigation} />,
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.5}>
              <Ionicons name="person-circle-outline" size={40} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#f00e1ff',
          drawerActiveTintColor: '#497D00',
          drawerStyle: { backgroundColor: '#ccc' },
        }}
      >
        <Drawer.Screen
          name="Dashboard"
          component={DashboardStack}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="bar-chart-outline" color={color} size={size} />
            ),
          }}
        />

        <Drawer.Screen
          name="MyGoals"
          component={MyGoalsStack}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="create-outline" color={color} size={size} />
            ),
          }}
        />

        <Drawer.Screen
          name="MyRunning"
          component={MyRunningStack}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="walk-outline" color={color} size={size} />
            ),
          }}
        />

        <Drawer.Screen
          name="MyWaterIntake"
          component={MyWaterIntakeStack}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="water-outline" color={color} size={size} />
            ),
          }}
        />

        <Drawer.Screen
          name="MyRewards"
          component={MyRewardsStack}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="ribbon-outline" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
