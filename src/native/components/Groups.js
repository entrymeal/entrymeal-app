import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Icon,
  Input,
  Left,
  Body,
  Right,
  Item,
  Thumbnail,
  Text,
} from 'native-base';
import PropTypes from 'prop-types';

import groups from '../../data/groups.json';

export default class Groups extends Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    error: null,
    loading: false,
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(groups.groupList),
    };

    this.handleChange = this.handleOnGroupSelect.bind(this);
  }

  handleOnGroupSelect = () => {
    this.setState({});
  };

  render() {
    const { loading, error } = this.props;
    const { groupName, groupImage } = this.state;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search Groups" />
            <Icon name="ios-people" />
          </Item>
        </Header>
        <Content>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={groupData => (
              <ListItem avatar onPress={() => Actions.groupChat({ title: groupData.groupName })}>
                <Left>
                  <Thumbnail small source={{ uri: groupData.groupImage }} />
                </Left>
                <Body>
                  <Text>
                    {groupData.groupName}
                  </Text>
                  <Text note>
                    {groupData.noteText}
                  </Text>
                </Body>
                <Right>
                  <Text note>
                    {groupData.status}
                  </Text>
                </Right>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}
