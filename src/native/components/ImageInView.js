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
import Spacer from './Spacer';

export default class ImageInView extends Component {

    render = () => {
        return(
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

        borderRadius: 5,
        borderWidth:2,
        borderColor:'grey',
        margin:5,
      }}
      source={{uri: this.props.path }}
    />
    <Text>'\t ' </Text>
  </View>
<View
  style={{
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  }}
>

</View>
<Spacer size = {25}/>
</View>
);
};
}

