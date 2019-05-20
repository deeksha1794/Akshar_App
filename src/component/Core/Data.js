import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity,Text,Image } from 'react-native';
import {  Button} from 'react-native-elements';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export const users = [
    {
       name: 'React Js',
       icon: require('../../image/react_jslogo.png'),
       screens:{
         page1:[ {question:'React js introduction',
         answer:(<Text  style={styles.answerView}>Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.'+ 

         'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. In order to use the React CLI,'
         +' you have to first globally install it. You can use npm or Node Package Manager to run the installation.</Text>)},
         {question:'Benefits of React',
         answer:(<Text  style={styles.answerView}>{'\u2022 '}Easy to know how a component is rendered, you just look at the render function.

         {'\n\n \u2022 '}JSX makes it easy to read the code of your components. It is also really easy to see the layout, or how components are plugged/combined with each other.
         
         {'\n\n \u2022 '}You can render React on the server-side.
         
         {'\n\n \u2022 '}It is easy to test, and you can also integrate some tools like jest.
         
         {'\n\n \u2022 '}It ensures readability and makes maintainability easier.
         
         {'\n\n \u2022 '}You can use React with any framework (Backbone.js, Angular.js) as it is only a view layer.</Text>)}
           ]
         ,
         page2:[ {question:'Creating a New React App',
         answer:(<Text  style={styles.answerText}>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
         +'It lets you compose complex UIs from small and isolated pieces of code called “components”. </Text>)},
         {question:'Create A React Application In A New Folder ',
         answer:(<Text  style={styles.answerText}>npx create-react-app my-app
          {'\n\n'}cd my-app
         {'\n\n'}npm start </Text>)},
         {question:'Create A React Application In An Existing Folder',
         answer:(<Text  style={styles.answerText}>cd my-app
         {'\n\n'}npx create-react-app
         {'\n\n'}npm start</Text>)}
           ],
         page3:[ {question:'React js concept',
         answer:(<View>
           <View style={styles.buttonView}>
         <Button 
         raised
         title={'Components'}
         buttonStyle={styles.button} 
         titleStyle={styles.titleStyle}
         onPress={()=>props.navigation.navigate("Course",{textView:(
           <View >
           <View>
             <Text style={{textAlign:'center',fontSize:22}}>What are components?</Text>
             </View>
             <View style={styles.answerView}>
             <Text style={styles.answerText}>
             Components are the building blocks of any React app and a typical 
             React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs
              i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.
             </Text>
             </View>
             <View style={styles.answerView}>
             <Text style={styles.answerText}>
             {'const Greeting = () =><h1>Hello World today!</h1>;'}
             </Text>
             </View>
             <View>
             <Text style={{textAlign:'center',fontSize:22}}>Example</Text>
             </View>
             <View style={styles.answerView}>
             <Text style={styles.answerText}>
             {'<!DOCTYPE html>'+
'\n<html>'+
'\n<head>'+
    '\n<meta charset="utf-8">'+
    '\n<title>Get Started with Vumbula React</title>'+
'\n</head>'+

'\n<body>'+
'\n<div id="root">'+
   '\nLoading...'+
'\n</div>'+
'\n<script src="https://unpkg.com/@babel/standalone/babel.js"></script>'+
'\n<script src="https://unpkg.com/react/umd/react.development.js"></script>'+
'\n<script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>'+
'\n<script type="text/babel">'+
  '\n// Add your brand new component here'+
  '\nconst Greeting = () => <h1>Hello World today!</h1>;'+
  '\nReactDOM.render('+
      '\n<Greeting />,'+
      'document.getElementById("root)'+
 ' \n);'+
'\n</script>'+
'\n</body>'+
'\n</html>'}
             </Text>
             </View>
           </View>
         )})}/>
         </View>
         <View style={styles.buttonView}>
         <Button
         raised
          titleStyle={styles.titleStyle}
           title={'The Component Lifecycle'}
            buttonStyle={styles.button}
             onPress={()=>props.navigation.navigate("Course",{textView:(
               <View>
                 <View>
              <View>
              <Text style={{textAlign:'center',fontSize:22}}>Component Life Cycle</Text>
              </View>
              <View style={styles.answerView}>
              <Text style={{textAlign:'center',fontSize:18}}>Initialization</Text>

              <Text style={styles.answerText}>The component is setting up the initial state in the constructor, which can be changed later by using thesetState method.

The defaultProps is defined as a property of Component to define all the default value of props, which can be overridden with new prop values.

By rendering like{'\n\n<ContraMusicPlayer/>\n\n'} Contra Music player will start with volume 70% in paused state with dark theme.

By rendering like {'\n\n<ContraMusicPlayer theme="light"/>\n\n'} Contra Music player will start with volume 70% in paused state with light theme.</Text>
<View style={styles.imageViews}>

              <Image style={styles.imageView} source={require('../../image/intiallization.png')}/>
              </View>
               </View>
               </View>
               <View>
              <View style={styles.answerView}>
              <Text style={{textAlign:'center',fontSize:18}}>Mounting</Text>

              <Text style={styles.answerText}>After preparing with basic needs, 
              state and props, our React Component is ready to mount in the browser DOM. 
              This phase gives hook methods for before and after mounting of components. 
              The methods which gets called in this phase are</Text>
              <View style={styles.imageViews}>
              <Image style={styles.imageView} source={require('../../image/mounting.png')}/>
              </View>
               </View>
               </View>
               </View>
             )})}/> 
             </View>
             <View style={styles.buttonView}>
         <Button
         raised
          titleStyle={styles.titleStyle}
           title={'Higher-Order Components'}
            buttonStyle={styles.button}
             onPress={()=>props.navigation.navigate("Course")}/>
             </View>
             <View style={styles.buttonView}>
         <Button
          raised
          titleStyle={styles.titleStyle}
          title={'JSX'}
           buttonStyle={styles.button}
            onPress={()=>props.navigation.navigate("Course")}/> 
            </View> 
            <View style={styles.buttonView}>
         <Button
         raised
          titleStyle={styles.titleStyle}
           title={'Props and State'}
            buttonStyle={styles.button}
             onPress={()=>props.navigation.navigate("Course")}/>
             </View>
             <View style={styles.buttonView}> 
         <Button
         raised
          titleStyle={styles.titleStyle}
           title={'The Component API'}
            buttonStyle={styles.button}
             onPress={()=>props.navigation.navigate("Course")}/>
             </View>
             <View style={styles.buttonView}>
         <Button
         raised
          titleStyle={styles.titleStyle}
           title={'Component Types'}
            buttonStyle={styles.button}
             onPress={()=>props.navigation.navigate("Course")}/>
             </View>
             <View style={styles.buttonView}>
         <Button
         raised
          titleStyle={styles.titleStyle}
           title={' React Context'}
            buttonStyle={styles.button}
             onPress={()=>props.navigation.navigate("Course")}/>
             </View>
         </View>),
         

      
    }],
         page4:[ {question:'\nReact js Limitation\n',
         answer:<Text  style={styles.answerText}>
         {'\u2022 '}Learning curve. Being not full-featured framework it is requered in-depth knowledge for integration user interface free library into MVC framework.
         {'\n\n \u2022 '}View-orientedness is one of the cons of ReactJS. It should be found 'Model' and 'Controller' to resolve 'View' problem.
         {'\n\n \u2022 '}Not using isomorphic approach to exploit application leads to search engines indexing problems.
         {'\n\n \u2022 '}Lots of developers dislike JSX React’s documentation, manuals are difficult for newcomers’ understanding.
         {'\n\n \u2022 '}React’s large size library.
         </Text>},
           
           ],
         page5:[ {question:'\nReact js Summary\n',
         answer:(<Text  style={styles.answerText}>
         ReactJS is JavaScript library used for building reusable UI components.
         According to React official documentation, following is the definition −
         React is a library for building composable user interfaces.
         It encourages the creation of reusable UI components, which present data that changes over time.
         Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance.
         React can also render on the server using Node, and it can power native apps using React Native. 
         React implements one-way reactive data flow, which reduces the boilerplate and is easier to reason about than traditional data binding.
         </Text>)},
           
           {question:'\nReact Features\n',
           answer:(<View  style={styles.answerView}>
           <Text style={{fontWeight: 'bold'}}>{'\u2022 '}JSX{'\n'}</Text> 
           <Text style={styles.answerText}>
             JSX is JavaScript syntax extension. It isn't necessary to use JSX in React development, but it is recommended.{'\n\n '}
             </Text>

           <Text style={{fontWeight: 'bold'}}>{'\u2022 '}Components{'\n'}</Text>
           <Text style={styles.answerText}>
              React is all about components. 
             You need to think of everything as a component.
              This will help you maintain the code when working on larger scale projects.{'\n\n'}
              
              </Text>
           
           <Text style={{fontWeight: 'bold'}}>{'\u2022 '}Unidirectional data flow and Flux{'\n'}</Text>
           <Text style={styles.answerText}> 
             React implements one-way data flow which makes it easy to reason about your app. 
             Flux is a pattern that helps keeping your data unidirectional. {'\n\n'}
             </Text>          
           </View>)}],
           page6:[ {
             question:'\nReact Js Quiz Level\n',
           answer:(<View>
             <View style={styles.buttonView}>
         <Button
         raised
          titleStyle={styles.titleStyle}
           title={'Basic Level'}
            buttonStyle={styles.button}
             onPress={()=>props.navigation.navigate("Quiz",{Quiz:[{question:'React js introduction',
             answer:(<Text  style={styles.answerText}>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
             It lets you compose complex UIs from small and isolated pieces of code called “components”.</Text>)},
               
               {question:'Benefits of React',
               answer:(<Text  style={styles.answerText}>Easy to know how a component is rendered, you just look at the render function.
    
               JSX makes it easy to read the code of your components. It is also really easy to see the layout, or how components are plugged/combined with each other.
               
               You can render React on the server-side.
               
               It is easy to test, and you can also integrate some tools like jest.
               
               It ensures readability and makes maintainability easier.
               
                You can use React with any framework (Backbone.js, Angular.js) as it is only a view layer.</Text>)}]})}/>
             </View>
             <View style={styles.buttonView}>
         <Button
          raised
          titleStyle={styles.titleStyle}
          title={'Intermediate Level'}
           buttonStyle={styles.button}
          disabled={true}
            onPress={()=>props.navigation.navigate("Course")}/> 
            </View> 
            <View style={styles.buttonView}>
         <Button
         raised
          titleStyle={styles.titleStyle}
           title={'Advance Level'}
            buttonStyle={styles.button}
            disabled={true}
             onPress={()=>props.navigation.navigate("Course")}/>
             </View>
           </View>)}],
             page7:[ {question:'What is React?',
             answer:(<Text  style={styles.answerText}>React is an open-source frontend JavaScript library which is used for building user interfaces especially for single page applications.
              It is used for handling view layer for web and mobile apps. React was created by Jordan Walke,
              a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.</Text>)},
               
               {question:'What are the major features of React?',
               answer:(<Text  style={styles.answerText}>The major features of React are:

                It uses VirtualDOM instead RealDOM considering that RealDOM manipulations are expensive.
                Supports server-side rendering.
                Follows Unidirectional* data flow or data binding.
                Uses reusable/composable UI components to develop the view.
                </Text>)},
                {question:'What is JSX?',
                answer:(<View><Text  style={styles.answerText}>JSX is a XML-like syntax extension to
                 ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar for the React.createElement() function,
                 giving us expressiveness of JavaScript along with HTML like template syntax.
                 In the example below text inside {'<h1>'} tag return as JavaScript function to the render function.
                 </Text>
                 <Text>
                  {'\nclass App extends React.Component {\n\n'+
  '  render() {\n\n'+
    '   return(\n\n'+
      '    <div>\n\n'+
        '     <h1>{"Welcome to React world!"}</h1>\n\n'+
      '    </div>\n\n'+
   ' )}}'}
                 </Text>
                 </View>)},
                 {question:'What are the major features of React?',
                 answer:(<Text  style={styles.answerText}>The major features of React are:
  
                  It uses VirtualDOM instead RealDOM considering that RealDOM manipulations are expensive.
                  Supports server-side rendering.
                  Follows Unidirectional* data flow or data binding.
                  Uses reusable/composable UI components to develop the view.
                  </Text>)},
                  {question:'What are the major features of React?',
                  answer:(<Text  style={styles.answerText}>The major features of React are:
   
                   It uses VirtualDOM instead RealDOM considering that RealDOM manipulations are expensive.
                   Supports server-side rendering.
                   Follows Unidirectional* data flow or data binding.
                   Uses reusable/composable UI components to develop the view.
                   </Text>)}],
       }
    },
    {
        name: 'React native',
        icon: require('../../image/react_nativelogo.png'),
        screens:{
          page1:"This is the page_1 in react native",
         page2:"This is the page_2 in react native",
         page3:"This is the page_3 in react native",
         page4:"This is the page_4 in react native",
         page5:"This is the page_5 in react native",
          
        }
     },
     {
        name: 'Type script',
        icon: require('../../image/typescriptlogo.png'),
        screens:{
          page1:"This is the page_1 in Type script",
          page2:"This is the page_2 in Type script",
          page3:"This is the page_3 in Type script",
          page4:"This is the page_4 in Type script",
          page5:"This is the page_5 in Type script",
         
        }
     },
     {
        name: 'Java script',
        icon: require('../../image/javascriptlogo.png'),
        screens:{
          page1:"This is the page_1 in Java script",
          page2:"This is the page_2 in Java script",
          page3:"This is the page_3 in Java script",
          page4:"This is the page_4 in Java script",
          page5:"This is the page_5 in Java script",
        }
     },
     {
        name: 'Redux saga',
        icon: require('../../image/reduxlogo.png'),
        screens:{
          page1:"This is the page_1 in Redux saga",
          page2:"This is the page_2 in Redux saga",
          page3:"This is the page_3 in Redux saga",
          page4:"This is the page_4 in Redux saga",
          page5:"This is the page_5 in Redux saga",
        }
     }
   ];
   export const styles = StyleSheet.create({
    item: {
        color: '#4286f4',
        fontWeight: '500',
        textAlign: 'center',
        fontSize: 18
    },
    card: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
      
    },
    col: {
        flexBasis: '49%',
        shadowOffset: { width: 10, height: 10, },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 1,
    },
    containerStyle: {
        height: 165,
       
    },
    image: {
        height: 50,
        width: 50,
        marginLeft: 60,
        marginTop: 30
    },
    answerText:{
      textAlign:'left',
      fontSize:14,
    },
    button:{
      backgroundColor: 'transparent',
      padding:10,
      borderRadius:20
    },
    buttonView:{
      margin:5
    },
    titleStyle:{
      color:'#000'
    },
    answerView:{
      backgroundColor:'lightgray',
      margin:5,
      padding:10
    
    },
    imageViews:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      height:250,
      width:'100%'
    },
    imageView:{
      height:'80%',
      width:'100%'
    }
});
