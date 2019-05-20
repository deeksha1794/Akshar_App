import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {Icon } from 'react-native-elements'
import { Container } from 'native-base';
 
export default function MenuIcon(props){
        return(
            <View style={styles.container}>
            <Container >
            <Icon
             name='menu'
             type='ion-icon'
             size={32}
             color='#4286f4'
             style={styles.menuIcon}
             onPress={()=>{props.navigation.toggleDrawer()}}
            />
            <Text style={styles.menuText}>Menu</Text>
            </Container>
            <Container >

            <Icon
             name='home'
             type='ion-icon'
             color='#4286f4'
             size={32}

             style={styles.menuIcon}
             onPress={()=>props.navigation.navigate('Home')}
            />
            <Text style={styles.menuText}>Home</Text>
            </Container>
            <Container >

            <Icon
             name='person'
             type='ion-icon'
             color='#4286f4'
             size={32}

             style={styles.menuIcon}
             onPress={()=>{}}
            />
            <Text style={styles.menuText}>Login</Text>
            </Container>
    </View>
        )
    }

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexWrap: 'wrap',
        flexDirection:'row'
    },
    menuIcon:{
        flexDirection:'column',
        flexBasis: '33%',
        alignItems:'center',
        justifyContent:'center',
        padding:10
        
    },
    menuText:{
     color:'#4286f4',
     textAlign:'center'
    }

})