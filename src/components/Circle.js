import React, { Component } from "react";
import { View } from "react-native";

export default class Circle extends Component {
  render() {
    const radius = this.props.radius;
    const x = this.props.body.position.x - radius / 2;
    const y = this.props.body.position.y - radius / 2;

    return (
      <View
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: radius * 2,
          height: radius * 2,
          borderRadius: radius * 2,
          backgroundColor: this.props.color,
        }}
      />
    );
  }
}
