import React from 'react'
import { View } from 'react-native';
import { MenuData } from '../interfaces/menuData';
import { Card } from './Card';

export const Menu = ({menuData} : MenuData) => {
	return (
		<View style={{flexDirection:"row"}}>
			{
				menuData.map((item) => (
					<Card urlImg={item.img} 
								description={item.Description} 
								key={item.index}
								dimensions={item.imgDimensions}
							/>
				))
			}
		</View>
	)
}