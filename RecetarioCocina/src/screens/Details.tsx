import React from 'react';
import { Text, View} from 'react-native';
import {ImgFOOD} from '../components/ImgFood';
import { FlatList } from 'react-native-gesture-handler';
import { Ingredients } from '../components/Ingredients';

const INGREDIENTS_LIST = [
	{
		id: 1,
		title: 'Pizza Peperonni'
	},
	{
		id: 2,
		title: 'Pasta'
	},
]

export const Details = () => {
	return(
		<View>
			<ImgFOOD
				category={data.category}
				title={data.Description}
				img={data.img}
			>
			</ImgFOOD>
			<FlatList
			data={INGREDIENTS_LIST}
			renderItem={({item}) => <Ingredients ingredients={item} />}
			keyExtractor={item => item.id}
			ListHeaderComponent={
				<View>
					<Text>Ingredientes</Text>
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
