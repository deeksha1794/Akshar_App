import React from 'react';
import DrawerNavigate from '../Header/CourseHeader';
import { Container} from 'native-base'

export default function CourseBoard(props) {
  const params=props.navigation.state.params;
    return (
      <Container >
       
        <DrawerNavigate screenProps={{name:params.itemName,
          icon:params.itemIcon,
          screens:params.itemScreen}}/>
      </Container>
    );
  }

