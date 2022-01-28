/**
 * This file is responsible for the app's stack navigation
 *  To Add a screen component to the app, add it to the screens variable
 */

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Landing from "./screens/Landing"
import Info from "./screens/Info";
import Review from "./screens/Review";
import Sources from "./screens/Sources";
import Settings1 from "./screens/Settings1";
import Settings2 from "./screens/Settings2";
import Settings3 from "./screens/Settings3";


import Home from "./screens/Home";
import LevelSelect from "./screens/LevelSelect";
import Badges from "./screens/Badges";
import About from "./screens/About";
import Settings from "./screens/Settings";

import Falls1 from "./screens/Falls1";
import Burns1 from "./screens/Burns1";
import Poisoning1 from "./screens/Poisoning1";
import Drowning1 from "./screens/Drowning1";
import Traffic1 from "./screens/Traffic1";
import PoisoningSources from "./screens/PoisoningSources";

import LevelOne from "./screens/Level1";
import LevelTwo from "./screens/Level2";
import LevelThree from "./screens/Level3";

const screens = {
    Landing: {
      screen: Landing,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      },
    },
    Info: {
      screen: Info,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      },
    },
    Falls1: {
      screen: Falls1,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      },
    },
    Burns1: {
      screen: Burns1,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      },
    },
    Poisoning1: {
      screen: Poisoning1,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      },
    },
    Drowning1: {
      screen: Drowning1,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      },
    },
    Traffic1: {
      screen: Traffic1,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      },
    },
    Review: {
      screen: Review,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      },
    },
    Home: {
        screen: Home,
        navigationOptions: {
          headerShown: false,
          animationEnabled: false,
        },
    },
    Sources: {
      screen: Sources,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      },
    },
    Settings1: {
        screen: Settings1,
        navigationOptions: {
          headerShown: false,
          animationEnabled: false,
        },
    },
    Settings2: {
        screen: Settings2,
        navigationOptions: {
          headerShown: false,
          animationEnabled: false,
        },
    },
    Settings3: {
        screen: Settings3,
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
    PoisoningSources: {
    screen: PoisoningSources,
    navigationOptions: {
      headerShown: false,
      animationEnabled: false,
    },
    },
};

const NavStack = createStackNavigator(screens);

export default createAppContainer(NavStack);
