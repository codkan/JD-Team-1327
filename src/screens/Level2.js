/*
 * Level Two Screen
 * React Native Game Engine Lives Here
 * Maintains the state of the game
 */

import React, { Component } from "react";
import {Image, ImageBackground, Linking, Modal, StyleSheet, Text, View } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Background from "../assets/kitchen/level-2-floor.png";
import GameStatusBar from "../components/GameStatusBar";
import MenuButton from "../components/buttons/MenuButton";
import NoteButton from "../components/buttons/NoteButton";
import SpeakButton from "../components/buttons/SpeakButton";
import { get, insert } from "../Db";
import Entities from "../entities/Level2Entities";
import Dispatches from "../systems/Level2Dispatches";
import Movement from "../systems/Movement";
import * as ScreenOrientation from 'expo-screen-orientation';
import pan from "../assets/gameNotePics/pan.png";
import poison from "../assets/gameNotePics/poison.png";
import { CoreStyle } from "../components/CoreStyle.js";

export default class LevelTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      engineRunning: true,
      modalVisible: false,
      levelComplete: false,
      collectNote1Visible: false,
      collectNote2Visible: false,
      inventorySize: 0,
      inventoryCap: 2,
      min: "00",
      sec: "00",
      msec: "00",
      note1Collected: false,
      note2Collected: false,
      interactionIconVisible: false,
      interactionModalVisible: false,
      note1ModalVisible: false,
      note2ModalVisible: false,
    };

    this.gameEngine = null;
  }

  pauseCheckCallback = (pauseStatus) => {
    this.setState({ engineRunning: pauseStatus });
  };

  handleNextLevel = () => {
    this.props.navigation.replace("LevelThree");
  };
  handleLevelRestart = () => {
    this.props.navigation.replace("LevelTwo");
  };

  handleReturnToHome = () => {
    this.props.navigation.replace("Home");
  };

  handleCollectNote1 = () => {
    this.setState({ inventorySize: this.state.inventorySize + 1 });
    this.setState({ note1ModalVisible: true });
    this.timerRef.stopClock();
  };

  // callback that is called when the user hits the Note Button
  // updates the inventory by one
  handleCollectNote2 = () => {
    this.setState({ inventorySize: this.state.inventorySize + 1 });
    this.setState({ note2ModalVisible: true });
    this.timerRef.stopClock();
  }

 async componentDidMount() {
    this.state.badgeEarned = await get("coffee");
    let gold = await get("gold2");
    let silver = await get("silver2");
    let bronze = await get("bronze2");

    if (gold === "true") {
      this.state.highestEarned = "gold";
    } else if (silver === "true") {
      this.state.highestEarned = "silver";
    } else if (bronze === "true") {
      this.state.highestEarned == "bronze";
    } else {
      this.state.highestEarned == null;
    }
  }
  handleLevelComplete = () => {
    this.setState({ levelComplete: true });
    if (
      this.state.sec < 15 &&
      this.state.min == 0 &&
      this.state.highestEarned !== "gold"
    ) {
      insert("gold2", "true");
      insert("silver2", "false");
      insert("bronze2", "false");
      this.setState({ highestEarned: "gold" });
    } else if (
      this.state.sec < 30 &&
      this.state.min == 0 &&
      this.state.highestEarned !== "gold" &&
      this.state.highestEarned !== "silver"
    ) {
      insert("silver2", "true");
      insert("bronze2", "false");
      this.setState({ highestEarned: "silver" });
    } else {
      insert("bronze2", "true");
      this.setState({ highestEarned: "bronze" });
    }
    insert("lvl3", "true")
  };
  getTime = (time) => {
    this.setState({ min: time.min });
    this.setState({ sec: time.sec });
    this.setState({ msec: time.msec });
  };

  handleNPCInteraction = () => {
    this.setState({ interactionModalVisible: true });
  };

  onEvent = (e) => {
    if (e.type === "note-one-found" && this.state.note1Collected == false) {
      this.setState({ collectNote1Visible: true });
    }
    if (e.type === "note-two-found" && this.state.note2Collected == false) {
      this.setState({ collectNote2Visible: true });
    }
    if (e.type === "npc-interact") {
      this.setState({ interactionIconVisible: true });
    }
    if (e.type === "none") {
      this.setState({ collectNote1Visible: false });
      this.setState({ collectNote2Visible: false });
      this.setState({ interactionIconVisible: false });
    }
    if (
      e.type === "at-objective" &&
      this.state.inventoryCap == this.state.inventorySize &&
      this.state.levelComplete != true
    ) {
      this.handleLevelComplete();
    }
  };

  render() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    const { modalVisible } = this.state;
    return (
      <ImageBackground source={Background} style={CoreStyle.image}>
      <View style={CoreStyle.gameContain}>
        <View style={CoreStyle.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.interactionModalVisible}
            supportedOrientations={['landscape']}
            onRequestClose={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={CoreStyle.centeredView}>
              <View style={CoreStyle.modalView}>
                <Text allowFontScaling={true} style={CoreStyle.modalText}>
                Collect All The Notes To Progress To The Next Level. </Text>
                <Text allowFontScaling={true} style={CoreStyle.modalText}>
                Then grab a drink from the fridge.</Text>
                <Text allowFontScaling={true} style={CoreStyle.textStyle}>Hide Modal</Text>
                <MenuButton
                  text="OK"
                  onPress={() => {
                    this.setState({ interactionModalVisible: false });
                  }}
                ></MenuButton>
              </View>
            </View>
          </Modal>
        </View>
        <View style={CoreStyle.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.levelComplete}
            supportedOrientations={['landscape']}
            onRequestClosed={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={CoreStyle.centeredView}>
              <View style={CoreStyle.modalView}>
                <Text allowFontScaling={true} style={CoreStyle.modalText}>
                  Time: {this.state.min}:{this.state.sec}:{this.state.msec}
                </Text>
                <MenuButton
                  text="CONTINUE"
                  onPress={this.handleNextLevel}
                ></MenuButton>
                <MenuButton
                  text="PLAY AGAIN"
                  onPress={this.handleLevelRestart}
                ></MenuButton>
                <MenuButton
                  text="QUIT"
                  onPress={this.handleReturnToHome}
                ></MenuButton>
              </View>
            </View>
          </Modal>
        </View>
        <GameEngine
          ref={(ref) => {
            this.gameEngine = ref;
          }}
          style={CoreStyle.gameContainer}
          running={this.state.engineRunning}
          systems={[Movement, Dispatches]}
          onEvent={this.onEvent}
          entities={Entities()}
        ></GameEngine>
        <GameStatusBar
          pauseUpdater={this.pauseCheckCallback}
          inventorySize={this.state.inventorySize}
          inventoryCap={this.state.inventoryCap}
          navigation={this.props.navigation}
          levelComplete={this.state.levelComplete}
          timeToLevel={this.getTime}
          currentLevel={"LevelTwo"}
          ref={(cd) => this.timerRef = cd}
        />
        <View style={{ alignItems: "flex-end" }}>
          <NoteButton
            visible={this.state.collectNote1Visible}
            onPress={this.handleCollectNote1}
          />
          <NoteButton
            visible={this.state.collectNote2Visible}
            onPress={this.handleCollectNote2}
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.note1ModalVisible}
            supportedOrientations={['landscape']}
            onRequestClose={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={CoreStyle.centeredView}>
              <View style={CoreStyle.modalView}>
              <Text allowFontScaling={true} style={CoreStyle.modalTitle}>
                Fires & Burns 
                </Text>
                <Text allowFontScaling={true} style={CoreStyle.modalText}>
                Cooking is the leading cause of home fires in the United States.
               Some common ways in which fires start in the kitchen include unsupervised food on a stove, in a microwave, or in an oven, grease spills, a dish towel too close to the burner, or a coffee pot accidentally left on. 
                </Text>
                <Text allowFontScaling={true} style={CoreStyle.modalText}>
                Tips for using the stove:
                Do not leave kids unsupervised.
                Turn all pot handles, so they cannot be knocked over. 
                </Text>
                <Text allowFontScaling={true} style={CoreStyle.modalText}>
                Do not wear loose-fitted clothing that has the potential to catch fire. 
                </Text>
                <Text allowFontScaling={true} style={CoreStyle.modalText} onPress={() => { Linking.openURL('https://kidshealth.org/en/parents/fire.html'); }}>
                Source: https://kidshealth.org/en/parents/fire.html 
                </Text>
                <Image style={styles.panimg} source={pan}/>
                <Text allowFontScaling={true} style={CoreStyle.textStyle}>Hide Modal</Text>
                <MenuButton
                  text="OK"
                  onPress={() => {
                    this.setState({ note1ModalVisible: false });
                    this.setState({ note1Collected: true});
                    this.timerRef.startClock();
                  }}
                ></MenuButton>
              </View>
            </View>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.note2ModalVisible}
            supportedOrientations={['landscape']}
            onRequestClose={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={CoreStyle.centeredView}>
              <View style={CoreStyle.modalView}>
              <Text allowFontScaling={true} style={CoreStyle.modalTitle}>
                Poisons 
                </Text>
                <Text allowFontScaling={true} style={CoreStyle.modalText}>
                Every day, over 300 children in the U.S. ages 0 to 19 are treated in an emergency department, and two children die, as a result of being poisoned.
                Common item causes in the home include: household cleaners, cosmetics, plastics left out, and medicine bottles left open.
                </Text>
                <Text allowFontScaling={true} style={CoreStyle.modalText}>
                Prevention Tips: Lock them up and keep them away. Keep medicines and other potentially toxic products, such as cleaners and detergents, in their original packaging where children cannot see or get to them. Read the label. Throw away if not needed. 
                </Text>
                <Text allowFontScaling={true} style={CoreStyle.modalText} onPress={() => { Linking.openURL('https://www.cdc.gov/safechild/poisoning/index.html'); }}>
                Source: https://www.cdc.gov/safechild/poisoning/index.html  
                </Text>
                <Image style={styles.poisonimg} source={poison}/>
                <Text allowFontScaling={true} style={CoreStyle.textStyle}>Hide Modal</Text>
                <MenuButton
                  text="OK"
                  onPress={() => {
                    this.setState({ note2ModalVisible: false });
                    this.setState({ note2Collected: true});
                    this.timerRef.startClock();
                  }}
                ></MenuButton>
              </View>
            </View>
          </Modal>
          <SpeakButton
            visible={this.state.interactionIconVisible}
            onPress={this.handleNPCInteraction}
          />
        </View>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  panimg: {
    height: 70,
    width: 250,
  },
  poisonimg: {
    height: 100,
    width: 50,
  },
});