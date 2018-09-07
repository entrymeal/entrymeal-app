import React, { Component } from 'react';
import {
  FlatList, Image, TouchableOpacity, View
} from 'react-native';
import {
  Container, Card, CardItem, Body, Text, Left, Icon, Header, Item, Input, Thumbnail, H3, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Spacer from './Spacer';
import restaurantData from '../../data/restaurants.json';
import offerData from '../../data/restaurants_offers.json';

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
        <Header searchBar rounded>
          <Item style={{ backgroundColor: '#ffe6e6' }}>
            <Icon name="search" />
            <Input placeholder="Search" />
            <Icon name="locate" />
          </Item>
        </Header>
        <H3>
          { 'Trending' }
        </H3>
        <FlatList 
          style={{ height: 550, backgroundColor: 'white', marginTop: 10,
                paddingTop: 10, 
 }}       
          horizontal
          data={offerData.restaurants}          
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <Card transparent>
              <CardItem width={250}>
                <Image style={{ height: 200, width: null, flex: 2 }} source={{ uri: item.bannerImg }} />
              </CardItem>
              <CardItem>
                <Text note> {'abc'} </Text>            
              </CardItem>
            </Card>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: '100%',
                width: 20,
                backgroundColor: 'white',
              }}
            />
          )}
        />
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
                  <Image style={{ height: 200, flex: 1 }} source={{ uri: item.bannerImg }} />
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
