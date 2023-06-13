import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-ionicons';

export const SearchBar = () => {
    const [text, onChangeText] = useState('');
  return (
    <View>
        <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="What do you want to eat?"
      />
      <Icon name="mic-outline" style={styles.icon}/>
      <Icon name="search" style={styles.icon}/>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
    },
    icon: {
        fontSize:8,
        color:"red",
    }
  });