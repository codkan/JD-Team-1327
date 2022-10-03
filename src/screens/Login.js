import React from "react";
import {useState} from 'react'
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import Background from "../assets/app/bg.png";

//import * as AuthSession from "expo-auth-session";
const auth0Domain = "https://childsafe.us.auth0.com";
const auth0ClientId = "buXJbiJx322WquQTdYUGUc6SNhpweqaT";

export default class Login extends React.Component<Props, State> {

    _loginWithAuth0 = async () => {
        const redirectUrl = AuthSession.getRedirectUrl();
        let authUrl = `${auth0Domain}/authorize` + toQueryString({
            client_id: auth0ClientId,
            response_type: 'token',
            scope: 'openid profile email',
            redirect_uri: redirectUrl,
        });
        console.log(`Redirect URL (add this to Auth0): ${redirectUrl}`);
        console.log(`AuthURL is:  ${authUrl}`);
        const result = await AuthSession.startAsync({
            authUrl: authUrl
        });

        if (result.type === 'success') {
            console.log(result);
            let token = result.params.access_token;
            this.props.setToken(token);
            this.props.navigation.navigate("Next Screen");
        }
    };

    render() {
        return (
            <Login
                navigation={this.props.navigation}
                onLogin={() => this._loginWithAuth0()}
            />
        );
    }
}