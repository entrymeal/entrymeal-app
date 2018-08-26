import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Constants } from 'expo';
import { Image, View, StyleSheet,  Dimensions } from 'react-native';
import {
  Container, Content, Card, CardItem, Body, H3, TabHeading, ScrollableTab, Text, Tabs, Tab
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import MenuList from './MenuList';
import restaurantData from '../../data/restaurant1.json';

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#ff6666',
  },
  tabbar: {
    backgroundColor: '#ff6666',
  },
  tab: {
    flex: 1,
  },
  indicator: {
    backgroundColor: '#ff6666',
  },
  label: {
    color: '#fff',
    fontWeight: '400',
  },
});
export default class Restaurant extends Component {
  state = {
    index: 0,    
  };


  render() {
    return (
      <Tabs renderTabBar={() => <ScrollableTab style={styles.tabbar} />}>
        <Tab heading={(
          <TabHeading style={{ backgroundColor: '#ff6666' }}>
            <Text style={styles.label}>
              {'Starter'}
            </Text>
          </TabHeading>
        )}
        >
          <MenuList style={[styles.container, { backgroundColor: 'beige' }]} category="Starter" />
        </Tab>
        <Tab heading={(
          <TabHeading style={{ backgroundColor: '#ff6666' }}>
            <Text style={styles.label}>
              {'Entre'}
            </Text>
          </TabHeading>
        )}
        >
          <MenuList style={[styles.container, { backgroundColor: 'black' }]} category="Entre" />
        </Tab>
      </Tabs>
    );
  }
}
