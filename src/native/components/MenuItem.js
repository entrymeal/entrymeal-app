import React, { Component } from 'react';
import { View, StatusBar, Image, FlatList, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Icon, ListItem, CheckBox, Card, CardItem, Body } from 'native-base';

import { Constants } from 'expo';
import MenuItemData from '../../data/menuItem1';

const styles = {
  headerStyle: {
    flex: 0.1,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ff6666',
    paddingLeft: 15,
    paddingRight: 15,
  },
  containterStyle: {
    flex: 3,
    backgroundColor: '#ffe6e6',
  },
  grpContainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffe6e6',
  },
};

export default class MenuItem extends Component {
    state = {
        index: 0
      }    
      updateIndex = (index) => {
        this.setState({ index });
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

                <Card transparent>
                    <CardItem header>
                  <Text fontSize="6">
                    {value[0].toString()}
                  </Text>
                  </CardItem >
                  <CardItem>
                  <FlatList
                  keyExtractor={(item, index) => item.id}
                  numColumns={1}
                  data={value[1]}
                    renderItem={({ item }) => (
                     
                           <ListItem>
                          <CheckBox checked color="red" onPress={this.updateIndex} />

                          <Text justifyContent="right">
                            {' '}{item}
                          </Text>
                         
          </ListItem>
                      
                        
                          
                )}
              />              
              </CardItem>
                </Card>
               
            );
          });

      return (
        <View  style={{ flex: 1 }}>
        <View style={styles.headerStyle}>
          <StatusBar hidden />
          <Icon name="close-circle" onPress={() => Actions.pop()} size={35} color="#a8a9ad" />
          <Text style={{ fontSize: 18, color:'#fff', fontWeight:'800' }}>
            {MenuItemData.item.name}
          </Text>

        </View>
        <Container>              
              <Content>
        {option}
        </Content>
      </Container>
      </View>
      );
    }
}

