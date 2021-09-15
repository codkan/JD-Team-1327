import React, { Component } from "react";
import Navigator from "./src/Navigator";
import { StatusBar } from "react-native";

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
