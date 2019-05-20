import React from 'react';
import { StyleSheet,ScrollView,View,Text,Image,TouchableOpacity} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

import { Container, Content, Footer, Header} from 'native-base'
import  MenuIcon  from '../Navigation/MenuIcon';
import { WebView } from 'react-native-webview';

export default function CourseContent(props) {
  return (
      <Container>
        
      <ScrollView>
              {props.navigation.state.params.textView}

             
      </ScrollView>
      <TouchableOpacity style={styles.bottom} onPress={()=>props.navigation.navigate('Editor')}>

<Icon
raised
  name='code'
  type='font-awesome'
  size={24}
    color='#4286f4'
    />
    </TouchableOpacity>
    
      </Container>
   
  )
  
  }

const styles = StyleSheet.create({
footer:{
  backgroundColor:'lightgray'
},
webview:{
  padding:5,
  margin:10,
  fontSize:14
},
answerText:{
  textAlign:'left',
  fontSize:14,
},
answerView:{
  backgroundColor:'lightgray',
  margin:5,
  padding:10

},
bottom: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    bottom: 0,
  }
  

});
