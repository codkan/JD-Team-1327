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

import Falls from "./screens/Falls";
import Burns from "./screens/Burns";
import Poisonings from "./screens/Poisonings";
import Drownings from "./screens/Drownings";
import Traffic from "./screens/Traffic";
import ParentalHealth from "./screens/ParentalHealth";

import FallSources from "./screens/FallSources";
import PoisoningSources from "./screens/PoisoningSources";
import BurningSources from "./screens/BurnSources";
import TrafficSources from "./screens/TrafficSources";
import DrowningSources from "./screens/DrowningsSources";
import ParentalHealthSources from "./screens/ParentalHealthSources";

import FallsMM from "./screens/FallsMM";
import DrowningMM from "./screens/DrowningMM";
import CarSafetyMM from "./screens/CarSafetyMM";
import ParentalHealthMM from "./screens/ParentalHealthMM";
import PoisoningsMM from "./screens/PoisoningsMM";
import BurnsMM from "./screens/BurnsMM";

import FallsR from "./screens/FallsR";

import LevelOne from "./screens/Level1";
import LevelTwo from "./screens/Level2";
import LevelThree from "./screens/Level3";

import Multimedia from "./screens/Multimedia";
import Disclaim from "./screens/Disclaim.js";


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
    Multimedia: {
      screen: Multimedia,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      },
    },
    Falls: {
        screen: Falls,
        navigationOptions: {
          headerShown: false,
          animationEnabled: false,
        },
    },
    FallsMM: {
        screen: FallsMM,
        navigationOptions: {
          headerShown: false,
          animationEnabled: false,
        },
    },
    FallsR: {
        screen: FallsR,
        navigationOptions: {
          headerShown: false,
          animationEnabled: false,
        },
    },
    DrowningMM: {
      screen: DrowningMM,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      },
    },
    CarSafetyMM: {
        screen: CarSafetyMM,
        navigationOptions: {
          headerShown: false,
          animationEnabled: false,
        },
    },
    ParentalHealthMM: {
        screen: ParentalHealthMM,
        navigationOptions: {
          headerShown: false,
          animationEnabled: false,
        },
    },
    Burns: {
      screen: Burns,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      },
    },
    Poisonings: {
      screen: Poisonings,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      },
    },
    Drownings: {
      screen: Drownings,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      },
    },
    Traffic: {
      screen: Traffic,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      },
    },
    ParentalHealth: {
      screen: ParentalHealth,
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
    Disclaim: {
    screen: Disclaim,
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
    BurningSources: {
    screen: BurningSources,
    navigationOptions: {
      headerShown: false,
      animationEnabled: false,
      },
    },
    FallSources: {
    screen: FallSources,
    navigationOptions: {
          headerShown: false,
          animationEnabled: false,
        },
    },
    TrafficSources: {
    screen: TrafficSources,
    navigationOptions: {
          headerShown: false,
          animationEnabled: false,
        },
    },
    DrowningSources: {
      screen: DrowningSources,
      navigationOptions: {
            headerShown: false,
            animationEnabled: false,
          },
      },
    ParentalHealthSources: {
      screen: ParentalHealthSources,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      },
    },

    PoisoningsMM: {
      screen: PoisoningsMM,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      },
    },
    BurnsMM: {
      screen: BurnsMM,
      navigationOptions: {
        headerShown: false,
        animationEnabled: false,
      },
    },
};

const NavStack = createStackNavigator(screens);

export default createAppContainer(NavStack);
