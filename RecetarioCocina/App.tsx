import React from 'react';
// import { Home } from './src/screens/Home';
// import Navigation from '../RecetarioCocina/Navigation';
import {Home} from './src/screens/Home';
import {Details} from './src/screens/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';


const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cookbook" component={Home} />
        <Stack.Screen name="Ingredients" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
