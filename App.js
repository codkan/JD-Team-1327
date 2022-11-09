import React, { Component } from "react";
import Navigator from "./src/Navigator";
import { StatusBar } from "react-native";
import bg1 from "./src/assets/app/bg.png";
import bg2 from "./src/assets/app/bg-alt.png";
import logo1 from "./src/assets/app/landinglogo.png";
import logo2 from "./src/assets/app/landinglogo-alt.png";

global.scheme = "light";
global.color = "ivory";
global.color2 = "powderblue";
global.color3 = "lightgray";
global.bg = bg1;
global.logo = logo1;
global.text = "black";
global.volume = 0.5;
global.isMuted = false;
global.showAlert = true;

global.user_id = null;
global.user;
global.times;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {scheme: global.scheme};
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  changeScheme = () => {
    this.setState({scheme: global.scheme});
  }

  render() {
    return <Navigator />;
  }

}
