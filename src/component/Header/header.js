import React from 'react';
import { View, Text, Image } from 'react-native';

const styles = {
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    color: '#4286f4',
    fontSize: 30,
    fontWeight: '500'
  },
  image: {
      width: 40,
      height: 40,
     
  }
};
 
 
export default function Headers() {
  return (
    <View >
      <Text style={styles.text}>    
    <Image style={styles.image} source={require('../../image/abcboard.png')} alt='icon' />
          Akshar App
    </Text>
    </View>
  );
}
