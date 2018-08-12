import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Content, Icon, Text } from 'native-base';
import { Image } from 'react-native';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

// import RecipesContainer from '../../containers/Recipes';
// import RecipesComponent from '../components/Recipes';
// import RecipeViewComponent from '../components/Recipe';

import Restaurants from '../components/Restaurants';
import Restaurant from '../components/Restaurant';

import MenuList from '../components/MenuList';
import MenuItem from '../components/MenuItem';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/ForgotPassword';

import LocaleContainer from '../../containers/Locale';
import LocaleComponent from '../components/Locale';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/UpdateProfile';

import MemberContainer from '../../containers/Member';
import ProfileComponent from '../components/Profile';

import AboutComponent from '../components/About';
import GroupComponent from '../components/Groups';
import ChatComponent from '../components/Chat';

const Index = (
  <Stack>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        <Stack
          key="home"
          title="Groups/Orders"
          icon={() => <Icon name="planet" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene
            key="home"
            // navigationBarTitleImage={require('../../images/logo/entrymeal.png')}
            // navigationBarTitleImageStyle={{ height:40, position: 'absolute',  left: 10, width:50}}
            component={GroupComponent}
          >

          </Scene>
        </Stack>

        <Stack
          key="restaurants"
          title="Restaurants"
          icon={() => <Icon name="book" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="restaurants" component={Restaurants}  />
        </Stack>
        <Stack
          key="chat"
          title="Chat"
          icon={() => <Icon name="chatbubbles" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="chat" component={ChatComponent} />
        </Stack>
        <Stack
          key="profile"
          title="PROFILE"
          icon={() => <Icon name="contact" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="profileHome" component={MemberContainer} Layout={ProfileComponent} />
          <Scene
            back
            key="signUp"
            title="SIGN UP"
            {...DefaultProps.navbarProps}
            component={SignUpContainer}
            Layout={SignUpComponent}
          />
          <Scene
            back
            key="login"
            title="LOGIN"
            {...DefaultProps.navbarProps}
            component={LoginContainer}
            Layout={LoginComponent}
          />
          <Scene
            back
            key="forgotPassword"
            title="FORGOT PASSWORD"
            {...DefaultProps.navbarProps}
            component={ForgotPasswordContainer}
            Layout={ForgotPasswordComponent}
          />
          <Scene
            back
            key="locale"
            title="CHANGE LANGUAGE"
            {...DefaultProps.navbarProps}
            component={LocaleContainer}
            Layout={LocaleComponent}
          />
          <Scene
            back
            key="updateProfile"
            title="UPDATE PROFILE"
            {...DefaultProps.navbarProps}
            component={UpdateProfileContainer}
            Layout={UpdateProfileComponent}
          />
        </Stack>
      </Tabs>
    </Scene>

    <Scene
      back
      clone
      key="restaurant"
      title="Restaurant"
      {...DefaultProps.navbarProps}
      component={Restaurant}
    />
    <Scene
      back
      clone
      key="menulist"
      title="Menu"
      {...DefaultProps.navbarProps}
      component={MenuList}
    />
    <Scene
      key="menuitem"
      direction="horizontal"
      component={MenuItem}
      title="Customize"
      hideNavBar
/>
  </Stack>
);

export default Index;
