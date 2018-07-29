import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, View, ImageBackground, Image,
} from 'react-native';
import {
  Container, Content, Card, CardItem, Body, Text, Button,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';
import Error from './Error';
import Header from './Header';
import AdBanner from './AdBanner';
import Spacer from './Spacer';
import restaurantData from '../../data/restaurants.json';


const RestaurantListing = ({
  error,
  loading,
  recipes,
  reFetch,
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  const keyExtractor = item => item.id;

  const onPress = item => Actions.recipe({ match: { params: { id: String(item.id) } } });

  return (
    <Container>
      <Content padder>
        <Header
          title="Top Restaurants & Offers"
          content="Check out all cuisines and ambience to make your next meal memorable!"
        />
        <View  
          style={{
            flex: 1,
            backgroundColor: '#eee',
          }}
        >
          <AdBanner
            title="Hello There"
          />
        </View>
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
                boredered
                small
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
};

RestaurantListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  reFetch: PropTypes.func,
};

RestaurantListing.defaultProps = {
  error: null,
  reFetch: null,
};

export default RestaurantListing;
