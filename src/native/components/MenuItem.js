import React, { Component } from 'react';
import { View, StatusBar, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'native-base';
import { ListItem, ButtonGroup } from 'react-native-elements';
import { Constants } from 'expo';
import MenuItemData from '../../data/menuItem1';

export default class MenuItem extends Component {
    state = {
        index: 0
      }
      
      updateIndex = (index) => {
        this.setState({index})
      }


    render() {
        const optionList = Object.entries(MenuItemData.item.options).map(([key,value])=>{
            return (value);
        });
        const optionType = Object.entries(optionList).map(([key,value])=>{
            return (Object.entries(value)[0]);
        });
        const option = (optionType).map((value)=>{
            return (
                
                <View style={styles.grpContainer}>
                <Text>{value[0].toString()}</Text>
               
                <ButtonGroup
                selectedBackgroundColor="black"
                onPress={this.updateIndex}
                selectedIndex={this.state.index}
                buttons={value[1]}
                containerStyle={{height: 25}} />
                </View>
            );
          });

      return (
        <View  style={{ flex: 1 }}>
        <View style={styles.headerStyle}>
          <StatusBar hidden />
          <Icon name="close-circle" onPress={() => Actions.pop()} size={35} color="#a8a9ad" />
          <Text style={{ fontSize: 18 }}>
            {MenuItemData.item.name}
          </Text>

        </View>
        <View style={styles.containterStyle}>
        {option}
      </View>
      </View>
      );
    }
}
const styles = {
  headerStyle: {
    flex: 0.4,
    elevation: 2,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
  },
  containterStyle: {
    flex: 4,
    backgroundColor: '#ffe6e6'
  },
  grpContainer: {
    flex: 1,
   
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffe6e6',
  }
};
