import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'
import LoginScreen2 from '../screens/LoginScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const MainTabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{ tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} /> }}
            />
        </Tab.Navigator>
    )
}


const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen2} options={{ headerShown: false}} ></Stack.Screen>
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} ></Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen} ></Stack.Screen>
    </Stack.Navigator>
  )
}

export default AppNavigation