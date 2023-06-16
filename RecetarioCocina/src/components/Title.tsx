import React from 'react'
import { StyleSheet, Text } from 'react-native';

interface propsTitle {
	title: string
}
export const Title = ({title}: propsTitle) => {
	return (
		<Text testID='title' style={styles.title}>
			{ title }
		</Text>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize:35,
		color:"red",
	},
});