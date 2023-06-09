import React from 'react';
import Icon from 'react-native-ionicons';
import { SafeAreaView, StyleSheet } from 'react-native/types';

export const Icons = () => {
  return (
    <SafeAreaView>
        <Icon android="mic" style={styles.icon}/>
        <Icon name="search" style={styles.icon}/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    icon: {
        color:"blue",
    }
  });

