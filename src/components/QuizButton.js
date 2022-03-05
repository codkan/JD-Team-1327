import React, {useState} from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { color } from "react-native-reanimated";
import {Audio} from "expo-av";
import ConfettiCannon from "react-native-confetti-cannon";
import FallsR from "../screens/FallsR.js"


export default function QuizButton({ text, onPress, title, reRender }) {
    let explosion;

    const [buttonColor, setButtonColor] = useState('white');

    const changeButtonColor = () => {
      if (title === "correct") {
        setButtonColor("green");
        explosion.start();
        celebrate();
        setTimeout(() => {2000});
      } else {
        setButtonColor("red");
        noCelebrate();
      }
    };

  async function celebrate() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/cheer.mp3')
    );
    console.log('Playing Sound');
    await sound.playAsync();
  }

  async function noCelebrate() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(
         require('../assets/wrong.mp3')
      );
      console.log('Playing Sound');
      await sound.playAsync();
    }

    return (
        <TouchableOpacity text={text} onPress={changeButtonColor, reRender}>
          <View style={styles.button} backgroundColor={buttonColor}>
            <Text style={styles.buttonText}>{text}</Text>
          </View>
          <ConfettiCannon
                count={100}
                origin={{x: -40, y: -125}}
                autoStart={false}
                ref={ref => explosion = ref}
                fadeOut={true}
          />
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 345,
    borderRadius: 10,
    paddingTop: 5,
    //paddingHorizontal: 10,
    backgroundColor: "rgba(196,196,196,1)",
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
    fontSize: 32,
    color: "black",
    textAlign: "center",
    justifyContent: "center",
  },
});