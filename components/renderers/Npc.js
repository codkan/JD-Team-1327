import React, { Component } from "react";
import { Image } from "react-native";

export default class Npc extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const width = this.props.size[0];
    const height = this.props.size[1];
    const x = this.props.body.position.x - width / 4;
    const y = this.props.body.position.y - height / 4;

    return (
      <Image
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: width,
          height: height,
          backgroundColor: this.props.backgroundColor,
          resizeMode: "stretch",
        }}
        source={require("../../assets/npc.png")}
      />
    );
  }
}
