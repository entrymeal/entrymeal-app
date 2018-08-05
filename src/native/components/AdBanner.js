import React, { Component } from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';
import { Constants, Font } from 'expo';
import SideSwipe from 'react-native-sideswipe'; // Version can be specified in package.json

import Offers from './Offers';

const { width } = Dimensions.get('window');

const planets = [
  { title: 'Chicken Roast', value: 'https://realfood.tesco.com/media/images/TescoWinter40-18GreekChicken-1400x919-f075adee-5ae5-4347-a14a-9ea69a482ce1-0-1400x919.jpg', abbr: 'SUN' },
  { title: 'Grilled', value: 'https://realfood.tesco.com/media/images/TescoWinter40-18GreekChicken-1400x919-f075adee-5ae5-4347-a14a-9ea69a482ce1-0-1400x919.jpg', abbr: 'SUN' },
  { title: 'Masala', value: 'https://realfood.tesco.com/media/images/TescoWinter40-18GreekChicken-1400x919-f075adee-5ae5-4347-a14a-9ea69a482ce1-0-1400x919.jpg', abbr: 'SUN' },
  { title: 'Tandoori', value: 'https://realfood.tesco.com/media/images/TescoWinter40-18GreekChicken-1400x919-f075adee-5ae5-4347-a14a-9ea69a482ce1-0-1400x919.jpg', abbr: 'SUN' }
 ];

export default class AdBanner extends Component {
  state = {
    currentIndex: 0,   
  };

 

    

  render = () => {
    const offset = (width - Offers.WIDTH) / 2;

    return (
      <View
        style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Image
          resizeMode="contain"
          style={styles.fill}
          source={{uri:'https://image.freepik.com/free-vector/abstract-white-background-vector-illustration_1407-419.jpg'}}
      />
            <SideSwipe
              data={planets}
              shouldCapture={() => true}
              style={[styles.fill, { width }]}
              contentContainerStyle={{  paddingTop: 100 }}
              itemWidth={Offers.WIDTH}
              threshold={Offers.WIDTH / 4}
              extractKey={item => item.title}
              contentOffset={offset}
              onIndexChange={index =>
                this.setState(() => ({ currentIndex: index }))}
              renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
                <Offers
                  planet={item}
                  index={itemIndex}
                  currentIndex={currentIndex}
                  animatedValue={animatedValue}
                />
            )}
          />

          
        </View>
);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
  },
  fill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

});
