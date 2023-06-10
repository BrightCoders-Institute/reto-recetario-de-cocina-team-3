import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
//import img from '../assets/images/pizza_casera.jpg';

interface cardMenuInterface {
	urlImg: any,
	description: string
}

export const CardMenu = ({urlImg, description}: cardMenuInterface) => {
	return (
		<View style={styles.container}>
			<Image source={urlImg} style={styles.img}/>
			<Text style={styles.text}>{description}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	img:{
		height:120,
		width:120,
		borderRadius: 10,
	},
	container: {
		marginHorizontal: 10,
	},
	text:{
		fontSize: 15,
		fontWeight:'600',
		marginTop: 2
	}
})