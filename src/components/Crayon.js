import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Dimensions } from "react-native";

const MAX_HEIGHT = Dimensions.get("screen").height;
const MAX_WIDTH = Dimensions.get("screen").width;

let color_1;
let color_2;

export default function Crayon({ text, onPress, color1, color2 }){
  color_1 = color1;
  color_2 = color2;
  return (
      <TouchableOpacity onPress={onPress} style={styles.navBar}
                        accessibilityLabel={"crayon"} accessibilityRole={"button"} accessibilityHint={"choose module or topic"}>
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
        width: MAX_WIDTH*0.80,
        height: MAX_HEIGHT/16.62,
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
        height: MAX_HEIGHT/16.62,
        backgroundColor: color_2,
        //marginHorizontal: 15,
    },
    line1: {
        width: 5,
        height: MAX_HEIGHT/16.62,
        backgroundColor: "black",
        marginLeft: 10,
    },
    line2: {
        width: 5,
        height: MAX_HEIGHT/16.62,
        backgroundColor: "black",
        marginRight: 10,
    },
    oval: {
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 50,
        width: MAX_WIDTH/10.275,
        height: MAX_WIDTH/10.275,
        transform: [{scaleX: MAX_WIDTH/82}],
        backgroundColor: "black",
    },
    text: {
        fontSize: MAX_WIDTH/82,
        color: "white",
        alignItems: "center",
        alignSelf: "center",
        transform: [{scaleY: MAX_WIDTH/82}],
        verticalAlign: "middle",
        horizontalAlign: "middle",
        marginBottom: 2.5,
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: MAX_WIDTH/22,
        borderRightWidth: MAX_WIDTH/22,
        borderBottomWidth: 2*(MAX_WIDTH/22),
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        transform: [{rotate: "90deg"}],
        alignSelf: "center",
        //shadowColor: 'black',
        //shadowOpacity: 0.25,
        //shadowRadius: 4,
        //shadowOffset : { width: 0, height: 4},
    }
  });