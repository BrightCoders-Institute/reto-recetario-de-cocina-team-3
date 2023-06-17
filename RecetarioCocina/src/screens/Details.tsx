import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import {ImgFOOD} from '../components/ImgFood';
import { FlatList } from 'react-native-gesture-handler';
import { Ingredients } from '../components/Ingredients';



export const Details = ({route}) => {
	const data_item =  route.params.data;
	return (
		<View style={{backgroundColor: '#242424'}}>
			<ImgFOOD
				category={data_item.category}
				title={data_item.Description}
				img={data_item.img}
			/>
			{/* <Text>{data_item.portion}</Text>
			<Text>{data_item.ingredient}</Text> */}
			<FlatList
			data={data_item.things}
			keyExtractor={item => item.id}
			renderItem={({item}) => <Ingredients  ingredient = {item.ingredient} amount={item.amount}/>}
			ItemSeparatorComponent = {() => <View style = {{marginBottom: 20, }} /> }
			ListHeaderComponent={
				<View>
					<Text style={styles.container_text}>Ingredients for {data_item.portion}</Text>
				</View>
			}
			/>
		</View>
	);
};


const styles = StyleSheet.create({
    container_text: {
		padding: 10,
        marginBottom: 20,
		marginTop: 20,
		fontSize: 20,
		fontWeight: 'bold',
    },
});
