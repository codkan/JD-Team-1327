/*
 * Written by Team 1327 - Cody, Akash, Erin, Aayush, Will
 */

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
 import DrowningReview from "./screens/DrowningReview";
 import PoisonR from "./screens/PoisonR";
 import BurnR from "./screens/BurnsR";
 import RoadRev1 from "./screens/RoadRev1";
 import ParRev1 from "./screens/ParRev1";
 import Win from "./screens/Win";
 
 import LevelOne from "./screens/Level1";
 import LevelTwo from "./screens/Level2";
 import LevelThree from "./screens/Level3";
 
 import Multimedia from "./screens/Multimedia";
 import Disclaim from "./screens/Disclaim.js";
 import Search from "./screens/Search.js";
 
 const screens = {
     Landing: {
       screen: Landing,
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
     Win: {
         screen: Win,
         navigationOptions: {
           headerShown: false,
         },
     },
     PoisonR: {
         screen: PoisonR,
         navigationOptions: {
           headerShown: false,
         },
     },
     BurnR: {
         screen: BurnR,
         navigationOptions: {
           headerShown: false,
         },
     },
     DrowningReview: {
         screen: DrowningReview,
         navigationOptions: {
           headerShown: false,
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
     RoadRev1: {
       screen: RoadRev1,
       navigationOptions: {
         headerShown: false,
       },
     },
     ParentalHealthMM: {
         screen: ParentalHealthMM,
         navigationOptions: {
           headerShown: false,
           animationEnabled: false,
         },
     },
     ParRev1: {
       screen: ParRev1,
       navigationOptions: {
         headerShown: false,
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
       },
     },
     Home: {
         screen: Home,
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
     Settings1: {
         screen: Settings1,
         navigationOptions: {
           headerShown: false,
         },
     },
     Settings2: {
         screen: Settings2,
         navigationOptions: {
           headerShown: false,
         },
     },
     Settings3: {
         screen: Settings3,
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
     Badges: {
       screen: Badges,
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
     About: {
       screen: About,
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
     PoisoningSources: {
       screen: PoisoningSources,
       navigationOptions: {
         headerShown: false,
       },
     },
     BurningSources: {
       screen: BurningSources,
       navigationOptions: {
         headerShown: false,
       },
     },
     FallSources: {
       screen: FallSources,
       navigationOptions: {
           headerShown: false,
         },
     },
     TrafficSources: {
       screen: TrafficSources,
       navigationOptions: {
           headerShown: false,
         },
     },
     DrowningSources: {
       screen: DrowningSources,
       navigationOptions: {
             headerShown: false,
           },
       },
     ParentalHealthSources: {
       screen: ParentalHealthSources,
       navigationOptions: {
         headerShown: false,
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
 
 