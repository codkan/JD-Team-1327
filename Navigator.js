/**
 * This file is responsible for the app's stack navigation
 *  To Add a screen component to the app, add it to the screens variable
 */

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./screens/Home";
import LevelSelect from "./screens/LevelSelect";
import Badges from "./screens/Badges";
import About from "./screens/About";
import Settings from "./screens/Settings";

import LevelOne from "./screens/Level1";
import LevelTwo from "./screens/Level2";
import LevelThree from "./screens/Level3";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
      animationEnabled: false,
    },
  },
  LevelSelect: {
    screen: LevelSelect,
    navigationOptions: {
      headerShown: false,
      animationEnabled: false,
    },
  },
  Badges: {
    screen: Badges,
    navigationOptions: {
      headerShown: false,
      animationEnabled: false,
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      headerShown: false,
      animationEnabled: false,
    },
  },
  About: {
    screen: About,
    navigationOptions: {
      headerShown: false,
      animationEnabled: false,
    },
  },
  LevelOne: {
    screen: LevelOne,
    navigationOptions: {
      headerShown: false,
      animationEnabled: false,
    },
  },
  LevelTwo: {
    screen: LevelTwo,
    navigationOptions: {
      headerShown: false,
      animationEnabled: false,
    },
  },
  LevelThree: {
    screen: LevelThree,
    navigationOptions: {
      headerShown: false,
      animationEnabled: false,
    },
  },
};

const NavStack = createStackNavigator(screens);

export default createAppContainer(NavStack);
