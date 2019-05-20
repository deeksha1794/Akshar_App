import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
Image} from 'react-native';



export default function MenuDrawer(props){
    navLink=(nav, text)=>{
        return(
            <TouchableOpacity style={{height:50}} onPress={()=>props.navigation.navigate(nav)}>
                <Text style={styles.link}>
                    {text}
                </Text>
            </TouchableOpacity>
        )
    }
    
    return(
        <View style={styles.container}>
        <View style={styles.topLinks}>
        <View style={styles.profile}>
         <View style={styles.imgView}>
         <Image source={props.items.icon} style={styles.img}/>
         </View>
         <View style={styles.profileText}>
             <Text style={styles.name}>
             {props.items.name}
             </Text>
         </View>
        </View>
        </View>
        <View style={styles.bottomLinks}>
        {navLink('Introduction','Introduction')}
        {navLink('SetUp','SetUp')}
        {navLink('Content','Content')}
        {navLink('Limitation','Limitation')}
        {navLink('Summary','Summary')}
        {navLink('Quiz','Quiz')}
        {navLink('Interview Question','Interview Question')}
        </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray'
    },
    link:{
        flex:1,
        fontSize:16,
        padding:6,
        paddingLeft:14,
        margin:5,
        textAlign:'left',
        color:'#4286f4',
        fontWeight:'500'
    },
    topLinks:{
      height:'20%',
      backgroundColor: '#4286f4'
    },
    bottomLinks:{
      flex:1,
      backgroundColor:'white',
      paddingTop:10,
      paddingBottom:'30%'
    },
    profile:{
     flex:1,
     flexDirection:'row',
     alignItems:'center',
     borderBottomWidth:1,
     borderBottomColor:'white'
    },
    imgView:{
     flex:1,
     flexDirection:'column',
     justifyContent:'center',
     padding:10
    },
    img:{
        height:100,
        width:100,
        borderRadius:50,
        backgroundColor:'white'
    },
    profileText:{
        flex:3,
        flexDirection:'column',
        justifyContent:'center',
        padding:10
    },
    name:{
     fontSize:18,
     padding:10,
     color:'white',
     textAlign:'right',
     fontWeight:'500'
    }
});