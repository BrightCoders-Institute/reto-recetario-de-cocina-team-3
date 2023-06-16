import React from 'react';
import { Text, View} from 'react-native';
import {ImgFOOD} from '../components/ImgFood';
import { FlatList } from 'react-native-gesture-handler';
import { Ingredients } from '../components/Ingredients';

const INGREDIENTS_LIST = [
	{
		id: 1,
		portions: '4 people',
		ingredient1: 'Flour',
		ingredient2: 'Tomatoe Sauce',
		ingredient3: 'Cheese',
		ingredient4: 'Peperonni',
		amount1: '1000 gr.',
		amount2: '100 gr.',
		amount3: '120 gr.',
		amount4: '35 gr.',
	},
	{
		id: 2,
		portions: '4 pieces',
		ingredient1: 'Flour',
		ingredient2: 'Wather',
		ingredient3: 'Yeast',
		ingredient4: 'Chips',
		amount1: '800 gr.',
		amount2: '250 ml.',
		amount3: '150 gr.',
		amount4: '20 gr.',
	},
	{
		id: 3,
		portions: '4 pieces',
		ingredient1: 'Flour',
		ingredient2: 'Wather',
		ingredient3: 'Cocoa',
		ingredient4: 'Chips',
		amount1: '800 gr.',
		amount2: '250 ml.',
		amount3: '200 gr.',
		amount4: '20 gr.',
	},
	{
		id: 4,
		portions: '1 Burger',
		ingredient1: 'Bread',
		ingredient2: 'Beef',
		ingredient3: 'Lettuce',
		ingredient4: 'Yellow Cheese',
		amount1: '1 pair',
		amount2: '1 pcs.',
		amount3: '1 pcs.',
		amount4: '1 pcs.',
	},
	{
		id: 5,
		portions: '3 tacos',
		ingredient1: 'Tortilla',
		ingredient2: 'Barbacoa Meat',
		ingredient3: 'Onion',
		ingredient4: 'Cilantro',
		amount1: '3 pcs.',
		amount2: 'to taste :)',
		amount3: 'to taste :)',
		amount4: 'to taste :)',
	},
	{
		id: 6,
		portions: '4 people',
		ingredient1: 'Ground meat',
		ingredient2: 'Sauce',
		ingredient3: 'Seasonings',
		ingredient4: 'Cilantro',
		amount1: '480 gr.',
		amount2: '800 ml.',
		amount3: 'to taste :)',
		amount4: 'to taste :)',
	},
	{
		id: 7,
		portions: '4 people',
		ingredient1: 'Macaroni',
		ingredient2: 'Tomatoes Sauces',
		ingredient3: 'Seasonings',
		ingredient4: 'Cream',
		amount1: '800 gr.',
		amount2: '500 gr.',
		amount3: 'to taste :)',
		amount4: '200 gr.',
	},
	{
		id: 8,
		portions: '4 portions',
		ingredient1: 'Flour',
		ingredient2: 'Milk',
		ingredient3: 'Bitumen',
		ingredient4: 'Chips',
		amount1: '1000 gr.',
		amount2: '500 ml.',
		amount3: '150 gr. ',
		amount4: '50 gr.',
	},
]

export const Details = () => {
	return(
		<View style={{backgroundColor: '#242424', }}>
			{/* <ImgFOOD
				category={data.category}
				title={data.Description}
				img={data.img}
			/> */}
			<FlatList
			data={INGREDIENTS_LIST}
			keyExtractor={item => item.id}
			renderItem={({item}) => <Ingredients item={item} />}
			ItemSeparatorComponent = {() => <View style = {{marginBottom: 20, }} /> }
			ListHeaderComponent={
				<View>
					<Text style={{fontSize: 20, fontWeight: 'bold', }}>Ingredientes</Text>
				</View>
			}
			/>
		</View>
	)
}


// export const Details = () => {
// 	return (
// 		<View style = {styles.container}>
//         	<View style = {styles.container1}>
//             	<Text style={styles.fontTitle}>Ingredients</Text>
// 				<Text></Text>
// 				<Text>Flour</Text>
// 				<Text>Yeast</Text>
// 				<Text>Tomatoe Sauce</Text>
// 				<Text>Peperonni</Text>
// 				<Text>Cheese</Text>
//         	</View>
//         	<View style = {styles.container2}>
// 				<Text style={styles.fontTitle}>Cant.</Text>
// 				<Text></Text>
//             	<Text>1000 gr.</Text>
// 				<Text>90gr.</Text>
// 				<Text>1/2 cup.</Text>
// 				<Text>30 gr.</Text>
// 				<Text>50 gr.</Text>
//         	</View>
//     	</View>
//   	)
// }
// const styles = StyleSheet.create({
//     container:{
//         // alingItems: 'center',
//         backgroundColor: 'gray',
//         flex: 1,
//         flexDirection: 'row',
//         // justifyContent: 'center',
//     },
// 	fontTitle:{
// 		fontSize: 20,
// 		fontWeight: 'bold',
// 	},
//     container1:{
//         alignItems: 'flex-start',
//         flex: 1,
// 		justifyContent: 'flex-start',
//     },
//     container2:{
//         alignItems: 'flex-end',
//         flex: 1,
//         justifyContent: 'flex-start',
//     },
// })
