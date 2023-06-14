import React from 'react';
import {View } from 'react-native';
import { Title } from '../components/Title';
import { CardMenu } from '../components/CardMenu';
import data from '../assets/data/data';
import { SearchBar } from '../components/SearchBar';
// import { Details } from './Details';

export const Home = () => {
	const { trendingMenu,recentMenu, categories } = data;
	return (
		<View>
			<SearchBar />
			<Title title={categories[0]} />
			<View style={{flexDirection:"row"}}>
				{
					trendingMenu.map((item, index) => <CardMenu urlImg={item[0]} description={item[1]} key={index}/>)
				}
			</View>
			<Title title={categories[1]} />
			<View style={{flexDirection:"row"}}>
				{
					recentMenu.map((item, index) => {
						return(
							<CardMenu 
								urlImg={item[0]} 
								description={item[1]} 
								key={index}
								dimensions={{wdt: 170, hgt: 250}}
							/>
						)
					})
				}
			</View>
			{/* <Details /> */}
		</View>
	);
};
