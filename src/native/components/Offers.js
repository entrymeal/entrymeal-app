import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const width = screenWidth - 225;

export default class Offers extends Component {
  static WIDTH = width;

  render = () => {
    const { animatedValue, planet, index } = this.props;

    return (
      <Animated.View style={styles.container}>
        <Animated.Image
          style={[
            styles.planet,
            {
              transform: [
                {
                  scale: animatedValue.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [1, 1.6, 1],
                    extrapolate: 'clamp',
                  }),
                },
                {
                  rotate: animatedValue.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: ['-90deg', '0deg', '90deg'],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}
          source={{uri :planet.value} }
        />
        <Animated.Text
          style={[
            styles.title,
            {
              opacity: animatedValue.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [0, 1, 0],
              }),
              transform: [
                {
                  translateY: animatedValue.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [-30, 0, -30],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}>
          {planet.title.toUpperCase()}
        </Animated.Text>
      </Animated.View>
    );
  };
}


const styles = StyleSheet.create({
  container: {
    width: width,
    height: width,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
  },
  planet: Platform.select({
    ios: {
      width: width - 25,
      height: width - 25,
    },
    android: {
      width: width - 50,
      height: width - 50,
    },
  }),
  title: Platform.select({
    ios: {
      
      fontSize: 32,
      position: 'absolute',
      bottom: 0,
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: 1.2,
      color: 'white',
      backgroundColor: 'transparent',
    },
    android: {
      
      fontSize: 24,
      position: 'absolute',
      bottom: 20,
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: 1.2,
      color: 'white',
      backgroundColor: 'transparent',
    }
  }),
  tagLine: {
    color: 'white',
    
    fontSize: 15,
  },
  tagLineContainer: {
    paddingBottom: 4,
    borderBottomWidth: 2,
    borderBottomColor: '#6D214F',
  },
  ports: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    height: 150,
    width: '90%',
  },
  port: {
    borderRadius: 4,
    backgroundColor: '#2C3A47',
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  portTitle: {
    color: 'white',
    fontSize: 48,

  }, 

});
