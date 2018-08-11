import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import {
  Container, Content, Card, CardItem, Body, H3, List, ListItem, Text,
} from 'native-base';
import ErrorMessages from '../../constants/errors';
import Error from './Error';
import Spacer from './Spacer';
import restaurantData from '../../data/restaurant1.json';

const RestaurantView = ({
  error,
  recipes,
  recipeId,
}) => {
 
  return (
    <Container>
      <Content padder>
        <Image source={{ uri: restaurantData.img }} style={{ height: 100, width: null, flex: 1 ,resizeMode: 'contain'}} />

        <Spacer size={25} />
        <H3>
          {recipe.title}
        </H3>
        <Text>
          by
          {' '}
          {recipe.author}
        </Text>
        <Spacer size={15} />

        <Card>
          <CardItem header bordered>
            <Text>
              About this recipe
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                {recipe.body}
              </Text>
            </Body>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered>
            <Text>
              Ingredients
            </Text>
          </CardItem>
          <CardItem>
            <Content>
              <List>
                {ingredients}
              </List>
            </Content>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered>
            <Text>
              How To
            </Text>
          </CardItem>
          <CardItem>
            <List>
              {method}
            </List>
          </CardItem>
        </Card>

        <Spacer size={20} />
      </Content>
    </Container>
  );
};

RestaurantView.propTypes = {
  error: PropTypes.string,
  recipeId: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

RestaurantView.defaultProps = {
  error: null,
};

export default RestaurantView;
