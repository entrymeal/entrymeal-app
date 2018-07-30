import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Icon,Input, Left, Body, Right,Item, Thumbnail, Text, Button} from 'native-base';
var BUTTONS = ['Option 0', 'Option 1', 'Option 2', 'Delete', 'Cancel'];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

const Groups = () => (
  <Container>
    <Header searchBar rounded>
      <Item>
        <Icon name="ios-search" />
        <Input placeholder="" />
        <Icon name="ios-people" />
      </Item>
    </Header>
    <Content>
      <List>
        <ListItem avatar>
          <Left>
            <Thumbnail source={require('../../images/group/arjun.jpg')}/>
          </Left>
          <Body>
          <Text>Family</Text>
          <Text note>Family Group . .</Text>
          </Body>
          <Right>
            <Text note>online</Text>
          </Right>
        </ListItem>
        <ListItem avatar>
          <Left>
            <Thumbnail source={require('../../images/group/arjun.jpg')}/>
          </Left>
          <Body>
          <Text>Arjun</Text>
          <Text note>Personal. .</Text>
          </Body>
          <Right>
            <Text note>3:43 pm</Text>
          </Right>
        </ListItem>
        <ListItem avatar>
          <Left>
            <Thumbnail source={require('../../images/group/arjun.jpg')}/>
          </Left>
          <Body>
          <Text>JAS</Text>
          <Text note>Office Friends . .</Text>
          </Body>
          <Right>
            <Text note>8:43 pm</Text>
          </Right>
        </ListItem>
        <ListItem avatar>
          <Left>
            <Thumbnail source={require('../../images/group/arjun.jpg')}/>
          </Left>
          <Body>
          <Text>Habitat</Text>
          <Text note>Team group . .</Text>
          </Body>
          <Right>
            <Text note>3:43 pm</Text>
          </Right>
        </ListItem>
      </List>
    </Content>
  </Container>
);
export default Groups;

