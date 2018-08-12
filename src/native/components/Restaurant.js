import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Constants } from 'expo';
import { Image, View, StyleSheet,  Dimensions } from 'react-native';
import {
  Container, Content, Card, CardItem, Body, H3, List, ListItem, Text,
} from 'native-base';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import MenuList from './MenuList';
import restaurantData from '../../data/restaurant1.json';

export default class Restaurant extends Component {

  state = {
    index: 0,
    routes: [
      { key: 'starter', title: 'Starter' },
      { key: 'entre', title: 'Entre' },
    ],
  };
  _renderTabBar = props => (
    <TabBar
      {...props}
      style={styles.tabbar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
    />
  );

render(){
  const starterTab = () => (
    <MenuList style={[styles.container, { backgroundColor: 'beige' }]} category='Starter' />
  );
  const entreTab = () => (
    <MenuList style={[styles.container, { backgroundColor: 'black' }]} category='Entre' />
  );
  return (
    <TabView
    navigationState={this.state}
    renderScene={SceneMap({
      starter: starterTab,
      entre: entreTab,
    })}
    renderTabBar={this._renderTabBar}
    onIndexChange={index => {this.setState({ index })}}
    initialLayout={{ width: Dimensions.get('window').width }}
  />

  );
}
}
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
