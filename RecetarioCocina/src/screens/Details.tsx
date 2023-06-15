import React from 'react';
import { View} from 'react-native';
import {ImgFOOD} from '../components/ImgFood';

export const Details = ({route}) => {
	const data =  route.params.data;
	return (
		<View>
			<ImgFOOD
				category={data.category}
				title={data.Description}
				img={data.img}
			>
			</ImgFOOD>
		</View>
	)
}
