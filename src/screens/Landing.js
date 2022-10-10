/*
 * Landing Screen
 */

import React from "react";
import {useState} from 'react'
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import disclaim from "../assets/buttons/info.png";
import setting from "../assets/buttons/settings.png";
import Background from "../assets/app/bg.png";
import Background_alt from "../assets/app/bg-alt.png";
import logo from "../assets/app/landinglogo.png"
import game from "../assets/landingCrayons/game.png";
import info from "../assets/landingCrayons/info.png";
import review from "../assets/landingCrayons/review1.png";
import sources from "../assets/landingCrayons/sources.png";
import videos from "../assets/landingCrayons/videos.png";
import Navbar from "../components/NavBar";
import * as ScreenOrientation from 'expo-screen-orientation'
import { CoreStyle } from "../components/CoreStyle";

import * as AuthSession from 'expo-auth-session';
const auth0ClientId = "buXJbiJx322WquQTdYUGUc6SNhpweqaT";
const auth0DiscoveryUrl = "https://childsafe.us.auth0.com";
const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

async function handleLogin() {

  const discovery = await AuthSession.fetchDiscoveryAsync(auth0DiscoveryUrl);

  const request = new AuthSession.AuthRequest({
    usePKCE: true,
    responseType: AuthSession.ResponseType.Code,
    codeChallengeMethod: AuthSession.CodeChallengeMethod.S256,
    clientId: auth0ClientId,
    redirectUri,
    scopes: ['offline_access'],
  })

  const result = await request.promptAsync(discovery, { useProxy })
  if (result.type === "success") {
    const result2 = await AuthSession.exchangeCodeAsync({
      clientId: auth0ClientId,
      code: result.params.code,
      redirectUri,
      extraParams: {
        code_verifier: request.codeVerifier,
      },
    }, discovery)
    console.log(result2)
  }
}

export default function Landing({ navigation }) {

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

    if (global.scheme == "dark") {
        global.bg = Background_alt;
        global.color = "darkslategrey";
        global.color2 = "lightslategray";
        global.color3 = "black";
        global.text = "white";
    } else {
        global.bg = Background;
        global.color = "ivory";
        global.color2 = "papayawhip";
        global.color3 = "lightgray";
        global.text = "black";
    }

  const goMenu = (_module) => {
    navigation.navigate("Menu", {module: _module});
  }

  const handleSettingsNav = () => {
    navigation.navigate("Settings");
  };
  const handleDisclaimNav = () => {
    navigation.navigate("Disclaim");
  };
  const handleGameNav = () => {
    ScreenOrientation.unlockAsync();
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    navigation.navigate("Home");
  };

    return (
      <ImageBackground source={global.bg} style={CoreStyle.image}>

      <View style = {CoreStyle.topnavbuttons}>
        <TouchableOpacity onPress={handleLogin}>
            <Image source={setting} style={CoreStyle.btn}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDisclaimNav}>
            <Image source={disclaim} style={CoreStyle.btn}></Image>
        </TouchableOpacity>
      </View>

        <View style={CoreStyle.buttonContainer}>

        <Image source={global.logo} style={CoreStyle.logo}></Image>

        <TouchableOpacity onPress={() => goMenu("Information")}>
            <Image source={info} style={CoreStyle.landingCrayon}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goMenu("Media")}>
            <Image source={videos} style={CoreStyle.landingCrayon}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goMenu("Quiz")}>
            <Image source={review} style={CoreStyle.landingCrayon}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goMenu("Resources")}>
            <Image source={sources} style={CoreStyle.landingCrayon}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGameNav}>
            <Image source={game} style={CoreStyle.landingCrayon}></Image>
        </TouchableOpacity>

        </View>

        <Navbar navigation={navigation}/>
      </ImageBackground>
      
    );
 }
