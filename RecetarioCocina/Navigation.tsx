import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';
import {Details} from '../RecetarioCocina/src/screens/Details';
import {Home} from '../RecetarioCocina/src/screens/Home';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
