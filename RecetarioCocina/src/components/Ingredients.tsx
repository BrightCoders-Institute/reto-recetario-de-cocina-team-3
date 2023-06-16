import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Ingredients = ({item}) => {

  const { id, portions, ingredient1, ingredient2, ingredient3, ingredient4, amount1, amount2, amount3, amount4 } = item

  return (
    <View>
        <Text style={{fontSize: 16, fontWeight: 'bold', }}>{portions}</Text>
        <View style={style.container}>
            <Text style={style.ingredient}>{ingredient1}</Text>
            <Text style={style.amount}>{amount1}</Text>
        </View>
        <View style={style.container}>
            <Text style={style.ingredient}>{ingredient2}</Text>
            <Text style={style.amount}>{amount2}</Text>
        </View>
        <View style={style.container}>
            <Text style={style.ingredient}>{ingredient3}</Text>
            <Text style={style.amount}>{amount3}</Text>
        </View>
        <View style={style.container}>
            <Text style={style.ingredient}>{ingredient4}</Text>
            <Text style={style.amount}>{amount4}</Text>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginBottom: 10,
        padding: 15,
        borderBottomWidth: .5,
        borderBottomColor: '#4e5052',
    },
    ingredient:{
        fontSize: 16,
        flex: 7,
    },
    amount:{
        fontSize: 16,
        flex: 1,
    },
})
