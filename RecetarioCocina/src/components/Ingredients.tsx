import React from 'react';
import { Text, View } from 'react-native';

export const Ingredients = ({ingredients}) => {
  return (
    <View>
        <Text>{ingredients.title}</Text>
    </View>
  )
}
