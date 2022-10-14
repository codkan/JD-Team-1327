/*
 * Landing Screen
 */

import React from "react";
import axios from "axios";
import {useState} from 'react'
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import disclaim from "../assets/buttons/info.png";
import setting from "../assets/buttons/settings.png";
import login from "../assets/buttons/login.png";
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
import jwt_decode from "jwt-decode";

global.user_id;
global.user;
global.times;

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
    console.log(result2);
  }

    var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: 'https://childsafe.us.auth0.com/api/v2/users',
      params: {q: 'email:*', search_engine: 'v3'},
      headers: {authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InhsR0ZUWTZ5a283eHNMWVFnUVdxSSJ9.eyJpc3MiOiJodHRwczovL2NoaWxkc2FmZS51cy5hdXRoMC5jb20vIiwic3ViIjoiTU9hZENodU1LMTFocHBWWG5ibXNMQlJaVEdsVE9mWmhAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vY2hpbGRzYWZlLnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjY1Nzc3NzM0LCJleHAiOjE2NjgzNjk3MzQsImF6cCI6Ik1PYWRDaHVNSzExaHBwVlhuYm1zTEJSWlRHbFRPZlpoIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSByZWFkOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl9jdXN0b21fYmxvY2tzIGRlbGV0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZTpjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cmVzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3JlZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGRhdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmhvb2tzIHVwZGF0ZTpob29rcyBkZWxldGU6aG9va3MgY3JlYXRlOmhvb2tzIHJlYWQ6YWN0aW9ucyB1cGRhdGU6YWN0aW9ucyBkZWxldGU6YWN0aW9ucyBjcmVhdGU6YWN0aW9ucyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXRlOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOmluc2lnaHRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6bG9nc191c2VycyByZWFkOnNoaWVsZHMgY3JlYXRlOnNoaWVsZHMgdXBkYXRlOnNoaWVsZHMgZGVsZXRlOnNoaWVsZHMgcmVhZDphbm9tYWx5X2Jsb2NrcyBkZWxldGU6YW5vbWFseV9ibG9ja3MgdXBkYXRlOnRyaWdnZXJzIHJlYWQ6dHJpZ2dlcnMgcmVhZDpncmFudHMgZGVsZXRlOmdyYW50cyByZWFkOmd1YXJkaWFuX2ZhY3RvcnMgdXBkYXRlOmd1YXJkaWFuX2ZhY3RvcnMgcmVhZDpndWFyZGlhbl9lbnJvbGxtZW50cyBkZWxldGU6Z3VhcmRpYW5fZW5yb2xsbWVudHMgY3JlYXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRfdGlja2V0cyByZWFkOnVzZXJfaWRwX3Rva2VucyBjcmVhdGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiBkZWxldGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiByZWFkOmN1c3RvbV9kb21haW5zIGRlbGV0ZTpjdXN0b21fZG9tYWlucyBjcmVhdGU6Y3VzdG9tX2RvbWFpbnMgdXBkYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMgcmVhZDpwcm9tcHRzIHVwZGF0ZTpwcm9tcHRzIHJlYWQ6YnJhbmRpbmcgdXBkYXRlOmJyYW5kaW5nIGRlbGV0ZTpicmFuZGluZyByZWFkOmxvZ19zdHJlYW1zIGNyZWF0ZTpsb2dfc3RyZWFtcyBkZWxldGU6bG9nX3N0cmVhbXMgdXBkYXRlOmxvZ19zdHJlYW1zIGNyZWF0ZTpzaWduaW5nX2tleXMgcmVhZDpzaWduaW5nX2tleXMgdXBkYXRlOnNpZ25pbmdfa2V5cyByZWFkOmxpbWl0cyB1cGRhdGU6bGltaXRzIGNyZWF0ZTpyb2xlX21lbWJlcnMgcmVhZDpyb2xlX21lbWJlcnMgZGVsZXRlOnJvbGVfbWVtYmVycyByZWFkOmVudGl0bGVtZW50cyByZWFkOmF0dGFja19wcm90ZWN0aW9uIHVwZGF0ZTphdHRhY2tfcHJvdGVjdGlvbiByZWFkOm9yZ2FuaXphdGlvbnNfc3VtbWFyeSBjcmVhdGU6YWN0aW9uc19sb2dfc2Vzc2lvbnMgcmVhZDpvcmdhbml6YXRpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVycyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGRlbGV0ZTpvcmdhbml6YXRpb25fbWVtYmVycyBjcmVhdGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgY3JlYXRlOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.vIaT7T6v2f8lXRl2G06pPCZ15_JMxEHxBvt_1HwQJGH6ypx1Oz_AGqq_hd-AsaevuI3-G-e94yxCvBUUZUT9pcrm9XlYVvkbULJhVfcgr4bjyP-9bqtbQOKcq8zDNMPCmOk8a_SWA6l_m0WY8b2X-eHObvUNzwSBfz_6O0dKg2338hHT8eFzeFGmHiNPmFKhSKttMNkxOFB2U6FXsQLJHxq0oHhOYYDOpmHL94-AK-1e84_skCiyi9kT1NaOQSIWNvg1R6rJWMZzWisWFnPZLx_MQH8DVoaIr0MSUZlVEDV8DdMtnW0UXmPD38ltiRzK8cWY0c6rreezhN_QbFQ-yw'}
    };

    axios.request(options).then(function (response) {
      global.user_id = response.data[0].user_id;
      global.user = response.data[0].nickname;
      global.times = response.data[0].user_metadata;
      //console.log("Login User: [" + global.user + "] success!");
      //console.log("Times: " + global.times);
    }).catch(function (error) {
      console.error(error);
    });


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
            <Image source={login} style={CoreStyle.btn}></Image>
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
