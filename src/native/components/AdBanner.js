import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import {
  Text, H1, Container, Content, Card, CardItem, Icon, Button,
} from 'native-base';
import Spacer from './Spacer';


const AdBanner = ({ title }) => (

  <Card transparent style={{ paddingHorizontal: 0 }}>
    <CardItem cardBody>
    
        <Image 
        style={{
          height: 200,
          width: 200,
          flex: 1,
          resizeMode: 'cover',
         
        }}
        source={{ uri: 'http://discount-coupon-codes.upto75.com/uploadimages/coupons/7768-UtsavRestaurant_640x320_Banner.jpg' }}
      />
    </CardItem>
  </Card>
   

  


);

AdBanner.propTypes = {
  title: PropTypes.string,
};

AdBanner.defaultProps = {
  title: 'Missing title',
};

export default AdBanner;
