import React from 'react';
import { View } from 'react-native';
import { Title } from '../components/Title';
import { Menu } from '../components/Menu';
import { SearchBar } from '../components/SearchBar';
import { recentMenu, trendingMenu, categories } from '../assets/data/data.json';

export const Home = () => {
	return (
		<View>
			<SearchBar />
			<Title title={categories[0]} />
			<View style={{flexDirection:"row"}}>
				{
					trendingMenu.map((item, index) => <CardMenu urlImg={item[0]} description={item[1]} key={index} />)
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
			<Title title={categories[0].category} />
			<Menu menuData={trendingMenu}/>
			<Title title={categories[1].category} />
			<Menu menuData={recentMenu} />
		</View>
	);
};
