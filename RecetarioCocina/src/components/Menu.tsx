
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { MenuData } from '../interfaces/menuData';
import { Card } from './Card';
import { useNavigation } from '@react-navigation/native';
// import {Details} from '../screens/Details';

export const Menu = ({menuData} : MenuData) => {
	const navigation = useNavigation();
	return (
		<ScrollView horizontal={true}>
			{
				menuData.map((item) => (
					<TouchableOpacity
						onPress={()=> navigation.navigate("Details", {data: item})}
						key={item.index}
					>
						<Card 
							urlImg={item.img} 
							description={item.Description} 
							key={item.index}
							dimensions={item.imgDimensions}
						/>
      				</TouchableOpacity>
				))
			}
		</ScrollView>
	);
};
