import React from 'react';
import {Dimensions} from 'react-native';
import {createDrawerNavigator,createAppContainer} from 'react-navigation';
import MenuDrawer from '../Navigation/MenuDrawer';
import   Course_Main from "../Screens/c_home";
import CoursePage from '../Core/CoursePage';
import CourseContent from '../Screens/content';
import Quiz from '../Screens/quiz';
const WIDTH=Dimensions.get('window').width;
const DrawerConfig={
  drawerWidth:WIDTH*0.83,
 contentComponent:(props)=>{
    return ( 
      <MenuDrawer items={props.screenProps} navigation={props.navigation}/>
   )
  }
}

  const DrawerNav=createDrawerNavigator(
    {
      "Introduction":{screen:(props)=><Course_Main screenProps={props.screenProps.screens.page1} navigation={props.navigation}/>},
      "SetUp":{screen:(props)=><Course_Main screenProps={props.screenProps.screens.page2} navigation={props.navigation}/>},
      "Content":{screen:(props)=><Course_Main screenProps={props.screenProps.screens.page3} navigation={props.navigation}/>},
      "Limitation":{screen:(props)=><Course_Main screenProps={props.screenProps.screens.page4} navigation={props.navigation}/>},
      "Summary":{screen:(props)=><Course_Main screenProps={props.screenProps.screens.page5} navigation={props.navigation}/>},
      "Quiz":{screen:(props)=><Course_Main screenProps={props.screenProps.screens.page6} navigation={props.navigation}/>},
      "Interview Question":{screen:(props)=><Course_Main screenProps={props.screenProps.screens.page7} navigation={props.navigation}/>},
      Home: { screen: CoursePage },
      Course:{screen:(props)=><CourseContent {...props}/>},
      Quizs:{screen:(props)=><Quiz {...props}/>}

     
    }, 
     DrawerConfig

  )


 const DrawerNavigate= createAppContainer(DrawerNav);
 export default DrawerNavigate