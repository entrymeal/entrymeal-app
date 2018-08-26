import React, { Component } from 'react';
import {
  FlatList, Image, TouchableOpacity,
} from 'react-native';
import {
  Container, Card, CardItem, Body, Text, Left, Icon, Right, Title, Header 
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Spacer from './Spacer';
import restaurantData from '../../data/restaurants.json';

export default class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true,

    };
  }

  render() {
    return (

      <Container>
        <Header>
        
          
            <Title>{"Top Restaurants"}</Title>
          
         
        </Header>
        <FlatList

          keyExtractor={item => item.name}
          numColumns={1}
          data={restaurantData.restaurants}
          renderItem={({ item }) => (
            <Card style={{ elevation: 2 }}>
              <CardItem onPress={() => Actions.restaurant({ title: item.name })}>
                <Left>

                  <Body>
                    <Text>
                      {item.name}
                    </Text>
                    <Text note>
                      {item.availableTime}
                    </Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <TouchableOpacity onPress={() => Actions.restaurant({ title: item.name })} style={{ flex: 1 }}>
                  <Image style={{ height: 200, flex: 1 }} source={{uri: item.bannerImg }} />
                </TouchableOpacity>
              </CardItem>
              <CardItem onPress={() => Actions.restaurant({ title: item.name })}>
                <Icon name="heart" style={{ color: '#ED4A6A' }} />
                <Text>
                  {item.name}
                </Text>
              </CardItem>
            </Card>


          )}
        />

        <Spacer size={20} />

      </Container>
    );
  }
}
