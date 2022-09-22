import React, {useState, PureComponent} from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { color } from "react-native-reanimated";
import {Audio} from "expo-av";
import ConfettiCannon from "react-native-confetti-cannon";


export default class QuizButton extends PureComponent{
    explosion;
    constructor(){
        super();
        this.state = {
            buttonColor: global.color2,
            pressed: false,
        };
    };

    changeButtonColor = () => {
      if (this.props.id === "correct") {
        this.setState({
            buttonColor: "green",
            pressed: true,
        });
        this.explosion && this.explosion.start();
        this.celebrate();
      } else {
        this.setState({
            buttonColor: "red",
            pressed: true,
        });
        this.noCelebrate();
      }
    };

  celebrate = async () => {
    try {
        var { sound } = await Audio.Sound.createAsync(
           require('../assets/sounds/cheer.mp3')
        );
        sound.volume = global.volume;
        sound.isMuted = global.muted;
        await sound.playAsync();
    } catch (e) {
        //should be fine
    }
  }

  noCelebrate = async () => {
    try {
        var { sound } = await Audio.Sound.createAsync(
           require('../assets/sounds/wrong.mp3')
        );
        sound.volume = global.volume;
        sound.isMuted = global.muted;
        await sound.playAsync();
    } catch (e) {
        //Should be fine
    }
  }

    render(){
    return (
        <TouchableOpacity onPress={this.changeButtonColor}>
          <View style={styles.button} backgroundColor={this.state.buttonColor}>
            <Text style={styles.buttonText}>{this.props.text}</Text>
          </View>
          <ConfettiCannon
                count={100}
                origin={{x: -50, y: -125}}
                autoStart={false}
                ref={ref => (this.explosion = ref)}
                fadeOut={true}
          />
        </TouchableOpacity>

    );
    }
}

    if (global.scheme == "dark") {
        global.color = "darkslategrey";
        global.color2 = "lightslategray";
        global.color3 = "black";
        global.text = "white";
    } else {
        global.color = "ivory";
        global.color2 = "papayawhip";
        global.color3 = "lightgray";
        global.text = "black";
    }

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 345,
    borderRadius: 10,
    paddingTop: 0,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset : { width: 0, height: 4},
    elevation: 7.5,
    marginVertical: 10,
  },
  buttonText: {
    fontStyle: "normal",
    fontSize: 24,
    color: global.text,
    textAlign: "center",
    justifyContent: "center",
  },
});