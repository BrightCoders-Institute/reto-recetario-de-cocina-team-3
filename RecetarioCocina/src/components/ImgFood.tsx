import React from 'react'
import { StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';


interface propsInfo {
	title: string,
  category: string,
  img: string
}

export const ImgFOOD = ({title,category,img}: propsInfo) => {
  const image = {uri: img};
	return (
    <View style={styles.flex}>
      <ImageBackground
        source={image}
        style={{width: '100%', height: 250}}
        imageStyle={{ opacity: 0.3 }}
      >
        <View style={styles.container}>
          <View style={styles.container_icon}>
          <TouchableOpacity>
            <Image 
              source={require('../assets/images/icons/cancelar.png')}
              />
          </TouchableOpacity>
            <View style={styles.container_icon}>
              <Image 
              source={require('../assets/images/icons/compartir.png')}
              />
              <Image style={ { marginLeft: 20 } }
                source={require('../assets/images/icons/corazon.png')}
              />
            </View>
          </View>
          <View>
            <Text style={styles.titlle}> {category} </Text>
            <Text style={styles.sub_titlle}> {title} </Text>
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
    height: '100%',
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