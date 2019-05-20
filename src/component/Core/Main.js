import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { ThemeProvider, Button } from 'react-native-elements';


export default function Main(props) {
    const { navigate } = props.navigation;
    return (
      <View >
       <View style={styles.img}>
       <Image source={require('../../image/abcboard.png')} alt='icon' />
       </View>
      <View>
        <Text style={styles.text}>
          Akshar App
        </Text>
      </View>
      <ThemeProvider theme={theme}>

      <View>
      <Button
        title="Login"
         type="outline" 
         buttonStyle={styles.button}
      />
      <Button
        title="Sign Up"
         type="outline" 
         buttonStyle={styles.button}
      />
      <Button
        title="Sign in as guest"
         type="outline" 
         buttonStyle={styles.button}
         onPress={() => navigate('Course_Page')}
      />
      </View>
      </ThemeProvider>
      </View>
    );
  }

const styles = StyleSheet.create({
img: {
  marginTop: 150,
   alignItems: 'center',
   justifyContent: 'center'
},
text: {
  textAlign: 'center',
  color: '#4286f4',
  fontSize: 50,
  fontWeight: '500'
},
button: {
margin: 5,

},
});
const theme = {
    Button: {
      titleStyle: {
        color: '#4286f4',
      }
    }
  };
