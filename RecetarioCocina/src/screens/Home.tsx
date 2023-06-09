import React from 'react';
import { View } from 'react-native';
import { Title,  Sear } from '../components/Title';
import { SearchBar } from '../components/SearchBar';

export const Home = () => {
	return (
		<View>
			<SearchBar />
			<Title title='Test' />
		</View>
	);
};
