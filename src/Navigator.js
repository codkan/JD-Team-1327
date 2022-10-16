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
import Menu from "./screens/Menu.js";

import Information from "./screens/Information.js";
import Media from "./screens/Media.js";
import Quiz from "./screens/Quiz.js";
import Win from "./screens/Win.js";
import Resources from "./screens/Resources.js";

import LocalBoard from "./screens/LocalBoard.js";
import GlobalBoard from "./screens/GlobalBoard.js";
import TMenu from "./screens/TMenu.js";

////GAME SCREENS
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
     Menu: {
       screen: Menu,
       navigationOptions: {
         headerShown: false,
       },
     },
     Information: {
        screen: Information,
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
     Resources: {
       screen: Resources,
       navigationOptions: {
         headerShown: false,
       },
     },
     LocalBoard: {
       screen: LocalBoard,
       navigationOptions: {
         headerShown: false,
       },
     },
     GlobalBoard: {
       screen: GlobalBoard,
       navigationOptions: {
         headerShown: false,
       },
     },
     TMenu: {
       screen: TMenu,
       navigationOptions: {
         headerShown: false,
       },
     },
     ////GAME SCREENS
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