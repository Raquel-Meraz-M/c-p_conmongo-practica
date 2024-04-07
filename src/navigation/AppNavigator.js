// src/navigation/AppNavigator.js


import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';


import LoginScreen from '../screens/LoginScreen';
import PerfilScreen from '../screens/PerfilScreen'; // Asume que 'Perfil' es el nombre de tu componente de perfil
import NosotroScreen from '../screens/NosotroScreen';
import GraficasScreen from '../screens/GraficasScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
      <Tab.Screen name="Nosotros" component={NosotroScreen} />
      <Tab.Screen name="Graficas" component={GraficasScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={HomeTabs} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
