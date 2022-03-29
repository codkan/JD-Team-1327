/**
 * This file is responsible for the app's stack navigation
 *  To Add a screen component to the app, add it to the screens variable
 */

import { createAppContainer } from "react-navigation";
import { createStackNavigator,TransitionSpecs, HeaderStyleInterpolators, CardStyleInterpolators } from "react-navigation-stack";
import {Easing,StatusBar, StyleSheet,Text,View } from "react-native";
import { NavigationNativeContainer } from '@react-navigation/native';
import React from 'react';

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

const NavStack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  }
}

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  }
}

const customTransition = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            })
          },
          {
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: ["180deg", "0deg"],
            }),
          },
          {
            scale: next ?
              next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.7],
              }) : 1,
          }
        ]
      },
      opacity: current.opacity,
    }
  }
}


const ScreenStack = () => {
  return (
    <NavStack.Navigator
      screenOptions={{
      gestureEnabled: true,
      gestureDirection: 'horizontal',
    }}
    >
      <NavStack.Screen name="Landing" component={Landing} />
      <NavStack.Screen name="Info" component={Info}
        options={{
          gestureDirection: 'vertical',
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      />
      <NavStack.Screen name="Poisonings" component={Poisonings}
        options={{
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <NavStack.Screen name="ScreenC" component={ScreenC}
        options={{
          ...customTransition,
        }}
      />
      <NavStack.Screen name="ScreenD" component={ScreenD}
        options={{
          gestureDirection: 'vertical',
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
       <NavStack.Screen name="ScreenE" component={ScreenE}
        options={{
          gestureDirection: 'vertical-inverted',
          cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
        }}
      />

    </NavStack.Navigator>
      
  )
};

export default NavStack;

