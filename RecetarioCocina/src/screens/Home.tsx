import React from 'react';
import { View } from 'react-native';
import { Title } from '../components/Title';
import { CardMenu } from '../components/CardMenu';
import data from '../assets/data/data';

export const Home = () => {
	const { menuData } = data;
	return (
		<View>
			<Title title='Test' />
			{menuData.map((item, index) => <CardMenu urlImg={item[0]} description={item[1]} key={index}/>)}
		</View>
	);
};
