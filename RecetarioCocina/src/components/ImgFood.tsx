import React, {useState} from 'react'
import { StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';


export const ImgFOOD = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
	return (
    <View style={styles.flex}>
      <ImageBackground 
        source={require('../assets/images/pizza_casera.jpg')} 
        style={{width: '100%', height: '80%'}}
        imageStyle={{ opacity: 0.3 }}
      >
        <View style={styles.container}>
          <View style={styles.container_icon}>
          <TouchableOpacity onPress={onPress}>
            <Image 
              source={require('../assets/images/icons/cancelar.png')}
              />
          </TouchableOpacity>
          <Text>Count: {count}</Text>
            <View style={styles.container_icon}>
              <Image 
              source={require('../assets/images/icons/compartir.png')}
              />
              <Image style={{marginLeft: 20}}
                source={require('../assets/images/icons/corazon.png')}
              />
            </View>
          </View>
          <View>
            <Text style={styles.titlle}> TRENDING </Text>
            <Text style={styles.sub_titlle}> Peperonin pizza pocket </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
	);
};

const styles = StyleSheet.create({
  flex:{
    flexDirection: 'column',
    // flex: 6,
  },
  container:{
    flexDirection: 'column',
    // paddingLeft: 30,
    // paddingRight: 30,
    padding: 30,
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    height: '80%',
    // flexDirection: 'column',
    // flex: 6,

  },
  container_icon: {
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  titlle:{
    color: 'white',
    fontSize:20,
    textTransform: 'uppercase',
  },
  sub_titlle:{
    color: 'white',
    fontSize:20,
    fontWeight: '600',
  },
  });