import React, {useState} from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { color } from "react-native-reanimated";
import {Audio} from "expo-av";
import ConfettiCannon from "react-native-confetti-cannon";


export default function QuizButton({ text, onPress, title }) {
    let explosion;

    const [buttonColor, setButtonColor] = useState('white');
    const [shoot, setShoot] = useState(false);

    const changeButtonColor = () => {
      if (title === "correct") {
        setButtonColor("green");
        explosion.start();
        celebrate();
      } else {
        setButtonColor("red");
      }
    };

  async function celebrate() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/cheer.mp3')
    );
    console.log('Playing Sound');
    await sound.playAsync();
    setShoot(true);
  }

    return (
        <TouchableOpacity text={text} onPress={changeButtonColor}>
          <View style={styles.button} backgroundColor={buttonColor}>
            <Text style={styles.buttonText}>{text}</Text>
          </View>
          <ConfettiCannon
                count={100}
                origin={{x: -40, y: 0}}
                autoStart={false}
                ref={ref => explosion = ref}
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