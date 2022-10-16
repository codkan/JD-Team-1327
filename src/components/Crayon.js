import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text, Triangle } from "react-native";

var color_1;
var color_2;

export default function Crayon({ text, onPress, color1, color2 }){
  color_1 = color1;
  color_2 = color2;
  return (
      <TouchableOpacity onPress={onPress} style={styles.navBar}>
        <View style={styles.rect1} backgroundColor={color1}>
            <View style={styles.rect2} backgroundColor={color2}>
                <View style={styles.line1}/>
                <View style={styles.oval}>
                    <Text style={styles.text}>{text}</Text>
                </View>
                <View style={styles.line2}/>
            </View>
        </View>
        <View style={styles.triangle} borderBottomColor={color1}/>
      </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
    navBar: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "transparent",
      elevation: 2,
    },
    rect1: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width: 330,
        height: 55,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowOffset : { width: 10, height: 10},
        elevation: 10,
    },
    rect2: {
        display: "flex",
        flexDirection: "row",
        width: "93%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between",
        height: 55,
        backgroundColor: color_2,
        //marginHorizontal: 15,
    },
    line1: {
        width: 5,
        height: 55,
        backgroundColor: "black",
        marginLeft: 10,
    },
    line2: {
        width: 5,
        height: 55,
        backgroundColor: "black",
        marginRight: 10,
    },
    oval: {
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 50,
        width: 40,
        height: 40,
        transform: [{scaleX: 5}],
        backgroundColor: "black",
    },
    text: {
        fontSize: 6,
        color: "white",
        alignItems: "center",
        alignSelf: "center",
        transform: [{scaleY: 5}],
        verticalAlign: "middle",
        horizontalAlign: "middle",
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 23,
        borderRightWidth: 23,
        borderBottomWidth: 46,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        transform: [{rotate: "90deg"}],
        alignSelf: "center",
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset : { width: 0, height: 4},
    }
  });