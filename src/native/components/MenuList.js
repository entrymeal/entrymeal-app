import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Constants } from 'expo';
import { Image, View, StyleSheet,  Dimensions } from 'react-native';
import {
  Container, Content,  H3  
} from 'native-base';
import {ListItem, Avatar} from 'react-native-elements';


import Spacer from './Spacer';
import restaurantData from '../../data/restaurant1.json';
import { Actions } from 'react-native-router-flux';

export default class MenuList extends Component {
    state = {};

    openMenu = (name) => {
      Actions.menuitem({ title: name });
    }
    render(){
        const method = restaurantData.restaurant.menu.
        filter((items) => (items.category==this.props.category)).
        map(item => (

            <ListItem 
                key={item.id}  
                title ={item.name}
                avatar={<Avatar
                rounded
                source={item.img && {uri: item.img}}
                title={item.name}
              />}               
                subtitle={item.description}
                onPress ={() => {Actions.menuitem({ title: item.name })}}  
                           
            />
          ));
        return(
    <Container style = {styles.scene} >
      <Content padder>
        <Image source={{ uri: restaurantData.img }} style={{ flex: 1,}} />
       <H3>
          {this.props.title}
        </H3>
        <View  >
              {method}
        </View>
        <Spacer size={15} />

      </Content>
    </Container>
        );
    }
}
const styles = StyleSheet.create({
    scene: {
      flex: 1,
      backgroundColor: '#ffe6e6',
    },
  });
  