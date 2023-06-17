import React from 'react';
import { Text, View} from 'react-native';
import {ImgFOOD} from '../components/ImgFood';
import { FlatList } from 'react-native-gesture-handler';
import { Ingredients } from '../components/Ingredients';


export const Details = ({route}) => {
	const data_item =  route.params.data;
	console.log('hola 2');
	return(
		<View style={{backgroundColor: '#242424'}}>
			<ImgFOOD
				category={data_item.category}
				title={data_item.Description}
				img={data_item.img}
			/>
			{/* <Text>{data_item.portion}</Text>
			<Text>{data_item.ingredient}</Text> */}
			<FlatList
			data={data_item}
			keyExtractor={item => item.index}
			renderItem={({item}) => 
				<Ingredients 
					dataItem = {item}
				/>
			}
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
