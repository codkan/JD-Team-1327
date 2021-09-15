/*
 * Level Two Screen
 * React Native Game Engine Lives Here
 * Maintains the state of the game
 */

import React, { Component } from "react";
import { Linking, StyleSheet, View, Modal, Text, ImageBackground } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Movement from "../systems/Movement";
import Entities from "../entities/Level2Entities";
import Dispatches from "../systems/Level2Dispatches";
import NoteButton from "../components/NoteButton";
import GameStatusBar from "../components/GameStatusBar";
import MenuButton from "../components/MenuButton";
import SpeakButton from "../components/SpeakButton";
import { get, insert } from "../Db"
import background from "../assets/kitchen/level-2-floor.png"
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
    const { modalVisible } = this.state;
    return (
      <ImageBackground source={background} style={styles.image}>

      <View style={styles.container}>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.interactionModalVisible}
            supportedOrientations={['landscape']}
            onRequestClose={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                Collect All The Notes To Progress To The Next Level. </Text>
                <Text style={styles.modalText}>
                Then grab a drink from the fridge.</Text>
                <Text style={styles.textStyle}>Hide Modal</Text>
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
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.levelComplete}
            supportedOrientations={['landscape']}
            onRequestClosed={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
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
          style={styles.gameContainer}
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
            style={styles.NoteButton}
            //text={"Collect Note"}
            visible={this.state.collectNote1Visible}
            onPress={this.handleCollectNote1}
          />
          <NoteButton
            style={styles.NoteButton}
            //text={"Collect Note"}
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
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <Text style={styles.modalTitle}>
                Fires & Burns 
                </Text>
                <Text style={styles.modalText}>
                Cooking is the leading cause of home fires in the United States. 
                </Text>
                <Text style={styles.modalText}>
                Fires can start from: 
                </Text>
                <Text style={styles.modalText}>
                Unsupervised food on a stove, in a microwave, or in an oven. Grease spills. A dish towel too close to the burner. A coffee pot accidentally left on.  
                </Text>
                <Text style={styles.modalText}>
                Tips for using the stove: 
                </Text>
                <Text style={styles.modalText}>
                Do not leave kids unsupervised. 
                </Text>
                <Text style={styles.modalText}>
                Turn all pot handles, so they cannot be knocked over. 
                </Text>
                <Text style={styles.modalText}>
                Do not wear loose-fitted clothing that has the potential to catch fire. 
                </Text>
                <Text style={styles.modalText} onPress={() => { Linking.openURL('https://kidshealth.org/en/parents/fire.html'); }}>
                Source: https://kidshealth.org/en/parents/fire.html 
                </Text>
                <Text style={styles.textStyle}>Hide Modal</Text>
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
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <Text style={styles.modalTitle}>
                Poisons 
                </Text>
                <Text style={styles.modalText}>
                Every day, over 300 children in the U.S. ages 0 to 19 are treated in an emergency department, and two children die, as a result of being poisoned. 
                </Text>
                <Text style={styles.modalText}>
                Items in home: 
                </Text>
                <Text style={styles.modalText}>
                Household cleaners, Medicines 
                </Text>
                <Text style={styles.modalText}>
                Prevention Tips: 
                </Text>
                <Text style={styles.modalText}>
                Lock them up and keep them away. Keep medicines and other potentially toxic products, such as cleaners and detergents, in their original packaging where children cannot see or get to them. Read the label. Throw away if not needed. 
                </Text>
                <Text style={styles.modalText} onPress={() => { Linking.openURL('https://www.cdc.gov/safechild/poisoning/index.html'); }}>
                Source: https://www.cdc.gov/safechild/poisoning/index.html  
                </Text>
                <Text style={styles.textStyle}>Hide Modal</Text>
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
            style={styles.NoteButton}
            //text={"Speak"}
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
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },  
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  gameContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    fontWeight: "normal",
    textAlign: "center",
  },
  modalTitle: {
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  NoteButton: {},
});