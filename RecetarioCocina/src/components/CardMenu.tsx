import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

interface cardMenuInterface {
	urlImg: any,
	description: string,
	dimensions?: Dimensions
}
interface Dimensions {
	hgt: number,
	wdt: number
}

export const CardMenu = ({urlImg, description, dimensions}: cardMenuInterface) => {
	return (
		<View style={styles.container}>
			<Image 
				source={urlImg} 
				style={
					dimensions ? 
					{...styles.img, height:dimensions.hgt, width: dimensions.wdt} 
					: styles.img 
				}
			/>
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
		marginHorizontal: 7,
	},
	text:{
		fontSize: 15,
		fontWeight:'600',
		marginTop: 2
	}
})