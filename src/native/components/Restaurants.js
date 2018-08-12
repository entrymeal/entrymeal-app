import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, View, ScrollView, Image, TouchableOpacity,
} from 'react-native';
import {
  Container, Content, Card, CardItem, Body, Text, Button,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Header from './Header';
import AdBanner from './AdBanner';
import ImageInView from './ImageInView';
import Spacer from './Spacer';
import restaurantData from '../../data/restaurants.json';

export default class Restaurants extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: true,

    };
  }
  render(){
   
  return (
    
    <Container>
      <Content padder>
        <Header
          title="Top Restaurants & Offers"
          content="Check out all cuisines and ambience to make your next meal memorable!"
        />
        <View  
          style={{
           
            backgroundColor: '#eee',
            width: 400,
            height: 200,
          }}
        >
          <AdBanner />
        </View>
        <Text style={{fontSize:35}}> Varieties </Text>
        <ScrollView horizontal  
          style={ {          
           backgroundColor: '#eee',
           width: 400,
           height: 200,
          
         }}>
          <ImageInView path="https://media1.fdncms.com/pittsburgh/imager/u/original/1951465/dining-reviews-pasha-cafe-and-restaurant.jpg"/>
          <ImageInView path = "https://hungryhappenings.com/wp-content/uploads/2015/07/chocolate-ice-cream-cone-puppies-dogs-.jpg"/>
          <ImageInView path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_fD4ZeUL6svhw0rkGUqyQ94NiNjqMCbS56t4B4LTFitkhz9WaQ"/>
        </ScrollView>
        <FlatList
          flex={1}
          keyExtractor={item => item.name}
          numColumns={1}
          data={restaurantData.restaurants}
          renderItem={({ item }) => (
            <View
            style={{
              flex: 1,
              backgroundColor: '#eee',
              width: 400,
              height: 200,
              
            }}
          >
              <Spacer size = {50}/>
              <View
                style={{
                  position: 'absolute',
                  marginTop: 20,
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              >

                <Image
                  style={{
                    flex: 1,
                    resizeMode: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                  source={{uri: item.bannerImg }}

                />
              </View>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                justifyContent: 'center',
              }}
            >

              <Button                
                small
                onPress={() => Actions.restaurant( { title: item.name } )} style={{ flex: 1 }}
              >
                <Text>{item.name}{"\n"}{item.availableTime}</Text>
              </Button>
            </View>
            <Spacer size = {25}/>
          </View>
            

          )}

        />

        <Spacer size={20} />
      </Content>
    </Container>
  );
}
}