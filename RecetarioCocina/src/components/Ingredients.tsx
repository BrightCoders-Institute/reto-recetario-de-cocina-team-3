import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


type ItemProps = {
	ingredient: string,
	amount: string
};

export const Ingredients = ({ingredient,amount}: ItemProps) => (
  <View style={style.container}>
    <Text style={style.ingredient}>{ingredient}</Text>
	<Text style={style.amount}>{amount}</Text>
  </View>
);


const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginBottom: 10,
        padding: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: '#4e5052',
    },
    ingredient:{
        fontSize: 16,
        flex: 7,
    },
    amount:{
        fontSize: 16,
        flex: 2,
    },
})
