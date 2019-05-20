import React from 'react';
import Main from './Core/Main';
import CoursePage from './Core/CoursePage';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CourseBoard from './Core/CourseBoard';
import { Container } from 'native-base';
import Editors from './Screens/c_editor';
import CourseContent from './Screens/content';
import Quiz from './Screens/quiz';
const MainNavigator = createStackNavigator({
  Home: { screen: Main },
  Course_Page: { screen: CoursePage },
  Course_Board:{ screen: CourseBoard},
  Editor:{screen:Editors},
  Course:{screen:(props)=><CourseContent {...props}/>},
  Quizs:{screen:(props)=><Quiz {...props}/>}
});
 const Application = createAppContainer(MainNavigator);

class App extends React.Component{
  render(){
    return(
      <Container>
               <Application/>

      </Container>
    )
  }
}
export default App;

