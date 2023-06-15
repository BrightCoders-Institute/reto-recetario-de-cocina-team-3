import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import {search} from '../assets/images/icons/search.png';
import {micro} from '../assets/images/icons/micro.png';

export const SearchBar = () => {
    const [text, onChangeText] = useState('');
  return (
    <View>
        <Image style = {styles.icon1}
        source={search}/>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="What do you want to eat?"
      />
        <Image style = {styles.icon2}
        source={micro}/>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      backgroundColor: 'dimgray',
      padding: 10,
      borderRadius: 10,
      textAlign: 'center',
    },
    icon1: {
        width: 20,
        height: 25,
        tintColor:"white",
        position: 'absolute',
        top: 20,
        zIndex: 1,
        left: 25,
    },
    icon2: {
      width: 25,
      height: 25,
      tintColor:"white",
      position: 'absolute',
      top: 20,
      zIndex: 1,
      left: 315,
      marginRight: 1,
  },
  });