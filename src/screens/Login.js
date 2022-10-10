import React from "react";
import {useState} from 'react'
import { Alert, Button, Platform, Layout, Image, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import Background from "../assets/app/bg.png";
import { CoreStyle } from "../components/CoreStyle.js";

import * as AuthSession from 'expo-auth-session';
const auth0ClientId = "buXJbiJx322WquQTdYUGUc6SNhpweqaT";
const auth0DiscoveryUrl = "https://childsafe.us.auth0.com";
const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

export async function handleLogin() {

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