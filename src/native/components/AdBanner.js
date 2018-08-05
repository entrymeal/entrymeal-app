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
  { title: 'Pizza', value: 'https://possector.com/wordpress/wp-content/uploads/2013/09/restaurant-menu-special0.jpg', abbr: 'SUN' },
  { title: 'Grilled', value: 'https://i.pinimg.com/originals/c0/a5/3d/c0a53da27ca851c1b639931e9e4dd9fa.jpg', abbr: 'SUN' },
  { title: 'Fries', value: 'https://cdn.winsightmedia.com/platform/files/public/2018-04/background/800x420/Australian-Loaded-Fries_1524594883.jpg', abbr: 'SUN' },
  { title: 'Food', value: 'https://communityimpact.com/wp-content/uploads/2017/12/CTA-2017-12-17-05.jpg', abbr: 'SUN' },
  { title: 'Tandoori', value: 'https://pbs.twimg.com/media/C8wRTaOV0AAOudl.jpg', abbr: 'SUN' },
  { title: 'Tandoori1', value: 'https://cdn20.patchcdn.com/users/22844250/20180430/034323/styles/T800x600/public/processed_images/facebookpost-1525117369-1363.jpg', abbr: 'SUN' },
  { title: 'Tandoori2', value: 'https://hhzone-9xus1dmbj2c6vgkwmqf.netdna-ssl.com/wp-content/uploads/2011/03/Anna-Maria-Photos-42-of-48-436x298.jpg', abbr: 'SUN' },
  { title: 'Tandoori3', value: 'https://blog.opentable.com/wp-content/uploads/2018/04/blog-OceanaShellfishPlateau39649-copy.jpeg', abbr: 'SUN' },
  { title: 'Tandoori4', value: 'https://kristyowen1.files.wordpress.com/2010/02/frank-austin1.jpg', abbr: 'SUN' }
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

            <SideSwipe
              data={planets}
              shouldCapture={() => true}
              style={[styles.fill, { width }]}
              contentContainerStyle={{  paddingTop: 10 }}
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
    backgroundColor: 'white',
  },
  fill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

});
