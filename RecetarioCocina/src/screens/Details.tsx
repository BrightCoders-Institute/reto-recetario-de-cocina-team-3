import React from 'react';
import { View, Text} from 'react-native';
// import {ImgFOOD} from '../components/ImgFood';

export const Details = ({route}) => {
	const data =  route.params.data;
	return (
		<View>
			<Text style={{color: 'black'}}>{data.Description}</Text>
		</View>
	)
}
