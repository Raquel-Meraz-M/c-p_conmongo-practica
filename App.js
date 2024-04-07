import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.90.1:3000/datos');
        setDatos(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
      {/* Podrías querer poner este View dentro de una pantalla específica */}
      <View style={{position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: 'white'}}>
        {datos.map((dato, index) => (
          <Text key={index}>{dato}</Text>
        ))}
      </View>
    </NavigationContainer>
  );
};

export default App;