import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface propsIngredient {
	dataItem: {}
}

export const Ingredients = ({dataItem}: propsIngredient) => {
    console.log(dataItem);
  return (
    <View>
        {/* <Text style={{fontSize: 16, fontWeight: 'bold', }}>{portion}</Text>
        <View style={style.container}>
            {
                ingredient.map((item_ingredient) => <Text style={style.ingredient}>{item_ingredient}</Text>)
            },
            {
                amount.map((item_amount) => (
                    <Text style={style.amount}>{item_amount}</Text>
                ))
            }
        </View> */}
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
