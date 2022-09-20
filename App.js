import React, { Component } from "react";
import Navigator from "./src/Navigator";
import { StatusBar } from "react-native";
import bg1 from "./src/assets/bg.png";
import bg2 from "./src/assets/bg-alt.png";
import logo1 from "./src/assets/landinglogo.png"
import logo2 from "./src/assets/landinglogo-alt.png"

global.scheme = "light";
global.color = "ivory";
global.color2 = "papayawhip";
global.color3 = "lightgray";
global.bg = bg1;
global.logo = logo1;
global.text = "black";
global.volume = 0.5;
global.isMuted = false;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return <Navigator />;
  }

}
