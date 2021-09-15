// import React, { Component } from "react";
// import { View, Image } from "react-native";

// export default class Health extends Component {
//   render() {
//     const width = 30;
//     const height = 30;
//     const x = 10;
//     const y = 15;

//     return (
//       <View>
//         {Array.from(Array(this.props.value)).map((_, index) => (
//           <Image
//             style={{
//               position: "absolute",
//               left: x + 35 * index,
//               top: y,
//               width: width,
//               height: height,
//               backgroundColor: this.props.color,
//             }}
//             source={require("../heart.png")}
//             key={index}
//           />
//         ))}
//       </View>
//     );
//   }
// }