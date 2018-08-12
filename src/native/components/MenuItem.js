import React, { Component } from 'react';
import { Image, View, StyleSheet,  Dimensions, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'native-base';
import Spacer from './Spacer';

export default class MenuItem extends Component {

    state = {};
    render(){
        return(
            <View>
            <Spacer size={25} /> 
            <Icon name='close-circle' onPress = {() => Actions.pop()}/>           
                <Text>{'Hiya'}</Text>
            </View>
        );
    }
}