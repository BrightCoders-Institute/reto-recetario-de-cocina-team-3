import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

interface propsTitle {
	title: string
}
export const Title = ({title}: propsTitle) => {
	return (
		<View>
			<Text style={styles.title}>
				{ title }
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize:35,
		color:"red",
	},
});