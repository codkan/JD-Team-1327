/*
 * Written by Team 1327 - Cody, Akash, Erin, Aayush, Will
 */

/**
 * This file is responsible for the app's stack navigation
 *  To Add a screen component to the app, add it to the screens variable
 */

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Landing from "./screens/Landing.js";
import Settings from "./screens/Settings.js";
import Disclaim from "./screens/Disclaim.js";
import Search from "./screens/Search.js";

import Info from "./screens/Info.js";
import Falls from "./screens/Falls";
import Burns from "./screens/Burns";
import Poisonings from "./screens/Poisonings";
import Drownings from "./screens/Drownings";
import Traffic from "./screens/Traffic";
import ParentalHealth from "./screens/ParentalHealth";

import Multimedia from "./screens/Multimedia.js";
import Media from "./screens/Media.js";
import FallsMM from "./screens/FallsMM";
import DrowningMM from "./screens/DrowningMM";
import CarSafetyMM from "./screens/CarSafetyMM";
import ParentalHealthMM from "./screens/ParentalHealthMM";
import PoisoningsMM from "./screens/PoisoningsMM";
import BurnsMM from "./screens/BurnsMM";

import Review from "./screens/Review.js";
import Quiz from "./screens/Quiz.js";
import Win from "./screens/Win.js";

import Sources from "./screens/Sources.js";
import Resources from "./screens/Resources.js";
//GAME SCREENS
import Home from "./screens/Home";
import About from "./screens/About";
import HowTo from "./screens/HowTo";
import Badges from "./screens/Badges";
import LevelSelect from "./screens/LevelSelect";
import LevelOne from "./screens/Level1";
import LevelTwo from "./screens/Level2";
import LevelThree from "./screens/Level3";
 
 const screens = {
     Landing: {
       screen: Landing,
       navigationOptions: {
         headerShown: false,
       },
     },
     Settings: {
         screen: Settings,
         navigationOptions: {
           headerShown: false,
         },
     },
     Disclaim: {
       screen: Disclaim,
       navigationOptions: {
         headerShown: false,
       },
     },
     Search: {
         screen: Search,
         navigationOptions: {
           headerShown: false,
         },
     },
     Info: {
       screen: Info,
       navigationOptions: {
         headerShown: false,
       },
     },
     Multimedia: {
       screen: Multimedia,
       navigationOptions: {
         headerShown: false,
       },
     },
     Media: {
       screen: Media,
       navigationOptions: {
         headerShown: false,
         animationEnabled: false,
       },
     },
     Review: {
       screen: Review,
       navigationOptions: {
         headerShown: false,
       },
     },
     Quiz: {
       screen: Quiz,
       navigationOptions: {
         headerShown: false,
       },
     },
     Win: {
         screen: Win,
         navigationOptions: {
           headerShown: false,
         },
     },
     Sources: {
       screen: Sources,
       navigationOptions: {
         headerShown: false,
       },
     },
     Resources: {
       screen: Resources,
       navigationOptions: {
         headerShown: false,
       },
     },
     Falls: {
         screen: Falls,
         navigationOptions: {
           headerShown: false,
         },
     },
     Burns: {
       screen: Burns,
       navigationOptions: {
         headerShown: false,
       },
     },
     Poisonings: {
       screen: Poisonings,
       navigationOptions: {
         headerShown: false,
       },
     },
     Drownings: {
       screen: Drownings,
       navigationOptions: {
         headerShown: false,
       },
     },
     Traffic: {
       screen: Traffic,
       navigationOptions: {
         headerShown: false,
       },
     },
     ParentalHealth: {
       screen: ParentalHealth,
       navigationOptions: {
         headerShown: false,
       },
     },
     FallsMM: {
         screen: FallsMM,
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
     PoisoningsMM: {
       screen: PoisoningsMM,
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
/////GAME SCREENS
     Home: {
         screen: Home,
         navigationOptions: {
           headerShown: false,
         },
     },
     About: {
       screen: About,
       navigationOptions: {
         headerShown: false,
       },
     },
     HowTo: {
       screen: HowTo,
       navigationOptions: {
             headerShown: false,
           },
       },
     Badges: {
       screen: Badges,
       navigationOptions: {
         headerShown: false,
       },
     },
     LevelSelect: {
       screen: LevelSelect,
       navigationOptions: {
         headerShown: false,
       },
     },
     LevelOne: {
       screen: LevelOne,
       navigationOptions: {
         headerShown: false,
       },
     },
     LevelTwo: {
       screen: LevelTwo,
       navigationOptions: {
         headerShown: false,
       },
     },
     LevelThree: {
       screen: LevelThree,
       navigationOptions: {
         headerShown: false,
       },
     },
 };

const NavStack = createStackNavigator(screens);

export default createAppContainer(NavStack);