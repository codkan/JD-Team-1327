
import React, { Component } from "react";
import { Image } from "react-native";

export default class Rug extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const radius = this.props.radius;
    const x = this.props.body.position.x - radius / 2;
    const y = this.props.body.position.y - radius/ 2;

    return (
      <Image
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: radius*2, 
          height: radius*2, 
          backgroundColor: this.props.backgroundColor,
          borderRadius: radius* 2,
          resizeMode: "stretch",
        }}
        source={require("../../assets/living-room/rug.png")}
      />
    );
  }
}