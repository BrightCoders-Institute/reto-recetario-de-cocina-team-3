import React from 'react';
import { ScrollView } from 'react-native';
import { MenuData } from '../interfaces/menuData';
import { Card } from './Card';

export const Menu = ({menuData} : MenuData) => {
	return (
		<ScrollView horizontal={true}>
			{
				menuData.map((item) => (
					<Card urlImg={item.img}
								description={item.Description}
								key={item.index}
								dimensions={item.imgDimensions}
							/>
				))
			}
		</ScrollView>
	);
};
