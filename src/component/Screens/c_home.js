import React from 'react';
import { StyleSheet,ScrollView,View,Text,Image} from 'react-native';

import { Container, Content, Footer} from 'native-base'
import  MenuIcon  from '../Navigation/MenuIcon';
import { WebView } from 'react-native-webview';

export default function Course_Main(props) {
  let Contents=props.screenProps.map((s,i)=>{
    return(
      <View key={i}>
         <View>

         <Text  style={{textAlign:'center',fontSize:22}}>{s.question}</Text>
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
      
       
       <Footer style={styles.footer}>
           <MenuIcon navigation={props.navigation}/>
       </Footer>
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
