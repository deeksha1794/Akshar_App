import React from 'react';
import { StyleSheet,ScrollView,View,Text,Image,TouchableOpacity} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

import { Container, Content, Footer, Header} from 'native-base'
import  MenuIcon  from '../Navigation/MenuIcon';
import { WebView } from 'react-native-webview';

export default function Quiz(props) {
    let Contents=props.navigation.state.params.Quiz.map((s,i)=>{
        return(
          <View key={i}>
             <View>
    
             <Text  style={{textAlign:'left',fontSize:20}}>{s.question}</Text>
             </View>
             <View style={styles.answerView}>
             {s.answer}</View>
    
             <View>
             {s.image}
             </View>
             </View>
    
        )
      });
        return (
          <Container >
            <Content>
            <ScrollView>
    
            {Contents}
            </ScrollView>
            </Content>
          
           
       
          </Container>
        );
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
    
    }
    
    });
    