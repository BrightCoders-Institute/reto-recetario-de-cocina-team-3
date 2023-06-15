import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { cardInterface } from '../interfaces/card';

export const Card = ({urlImg, description, dimensions}: cardInterface) => {
	return (
		<View style={styles.container}>
			<Image 
				source={{uri: urlImg}} 
				style={
					dimensions ? 
					{...styles.img, height:dimensions.hgt, width: dimensions.wdt} 
					: styles.img 
				}
			/>
			<View style={
					dimensions ? 
						{height:dimensions.hgt, width: dimensions.wdt} 
					:	{height:120, width:120} 
					}>
				<Text style={styles.text}>{description}</Text>
			</View>
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
		marginHorizontal: 7
	},
	text:{
		fontSize: 15,
		fontWeight:'600',
		marginTop: 2
	}
})