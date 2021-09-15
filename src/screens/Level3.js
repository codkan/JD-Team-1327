/*
 * Level Three Screen
 * React Native Game Engine Lives Here
 * Maintains the state of the game
 */

import React, { Component } from "react";
import { Linking, StyleSheet, View, Modal, Text, ImageBackground } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Movement from "../systems/Movement";
import Entities from "../entities/Level3Entities";
import Dispatches from "../systems/Level3Dispatches";
import NoteButton from "../components/NoteButton";
import GameStatusBar from "../components/GameStatusBar";
import SpeakButton from "../components/SpeakButton";
import MenuButton from "../components/MenuButton";
import DogMove from "../systems/DogMove";
import { insert, get } from "../Db";
import background from "../assets/yard/level-3-floor.png"

export default class LevelThree extends Component {
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
      heartBadgeModal: false,
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
    this.props.navigation.replace("LevelThree");
  };

  handleReturnToHome = () => {
    this.props.navigation.replace("Home");
  };

  handleCollectNote1 = () => {
    this.setState({ inventorySize: this.state.inventorySize + 1 });
    this.setState({ note1ModalVisible: true });
    this.timerRef.stopClock();
  };

  handleCollectNote2 = () => {
    this.setState({ inventorySize: this.state.inventorySize + 1 });
    this.setState({ note2ModalVisible: true });
    this.timerRef.stopClock();
  };

  async componentDidMount() {
    this.state.badgeEarned = await get("heart");
    let gold = await get("gold3");
    let silver = await get("silver3");
    let bronze = await get("bronze3");
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
      insert("gold3", "true");
      insert("silver3", "false");
      insert("bronze3", "false");
      this.setState({ highestEarned: "gold" });
    } else if (
      this.state.sec < 30 &&
      this.state.min == 0 &&
      this.state.highestEarned !== "gold" &&
      this.state.highestEarned !== "silver"
    ) {
      insert("silver3", "true");
      insert("bronze3", "false");
      this.setState({ highestEarned: "silver" });
    } else {
      insert("bronze3", "true");
      this.setState({ highestEarned: "bronze" });
    }
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
    if (e.type === "pet" && this.state.badgeEarned == null) {
      this.setState({ heartBadgeModal: true });
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
            supportedOrientations={["landscape"]}
            onRequestClose={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  Collect All The Notes To Progress To The Next Level.
                  </Text>
                  <Text style={styles.modalText}>
                  Then go pet the nice doggo.
                </Text>
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
            supportedOrientations={["landscape"]}
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
          systems={[Movement, Dispatches, DogMove]}
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
          currentLevel={"LevelThree"}
          ref={(cd) => this.timerRef = cd}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.heartBadgeModal}
          supportedOrientations={["landscape"]}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>You Pet The Dog!</Text>
              <MenuButton
                text="OK"
                onPress={() => {
                  this.setState({ heartBadgeModal: false });
                  insert("heart", "true");
                  this.setState({ badgeEarned: "true" });
                }}
              ></MenuButton>
            </View>
          </View>
        </Modal>
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
            supportedOrientations={["landscape"]}
            onRequestClose={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Hot Car</Text>
                <Text style={styles.modalText}>
                  Children dying from heatstroke in cars, either because they
                  were left or became trapped, has increased in the recent
                  years. On April 25, the first vehicular heatstroke of 2020
                  occurred when a four-year-old left a home and climbed into a
                  vehicle without his family noticing. His death follows 52 car
                  deaths in 2019, and a record 53 deaths in 2018.
                </Text>
                <Text style={styles.modalText}>
                  The majority of hot car deaths – 54% -- happen because someone
                  forgets a child in a car. Nearly 75% of children who are
                  forgotten and die are under 2 years old.
                </Text>
                <Text style={styles.modalText} onPress={() => { Linking.openURL('https://www.nhtsa.gov/child-safety/help-prevent-hot-car-deaths'); }}>
                  Source:
                  https://www.nhtsa.gov/child-safety/help-prevent-hot-car-deaths
                </Text>
                <Text style={styles.textStyle}>Hide Modal</Text>
                <MenuButton
                  text="OK"
                  onPress={() => {
                    this.setState({ note1ModalVisible: false });
                    this.setState({ note1Collected: true });
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
            supportedOrientations={["landscape"]}
            onRequestClose={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Drowning:</Text>
                <Text style={styles.modalText}>
                  Drowning is the leading cause of injury death in children 1 –
                  4.
                </Text>
                <Text style={styles.modalText}>
                  Young children can drown in as little as an inch or two of
                  water, and it can happen quickly and silently.
                </Text>
                <Text style={styles.modalText}>
                  The biggest drowning threat facing families with toddlers is
                  unexpected, unsurpervised access to water: swimming pools, hot
                  tubs and spas, bathtubs, natural bodies of water such as
                  ponds, and standing water in homes. For example, 69% of all
                  drownings among children 4 and younger happen during non-swim
                  times.
                </Text>
                <Text style={styles.modalText}>
                  Research suggests that fencing can prevent more than half of
                  all swimming pool drownings of young children. Swimming pools,
                  including large, inflatable above-ground pools and other
                  temporary pools, should be completely surrounded by a fence on
                  all 4 sides.
                </Text>
                <Text style={styles.modalText} onPress={() => { Linking.openURL('https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Water-Safety-And-Young-Children.aspx'); }}>
                  Source:
                  https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Water-Safety-And-Young-Children.aspx
                </Text>
                <Text style={styles.textStyle}>Hide Modal</Text>
                <MenuButton
                  text="OK"
                  onPress={() => {
                    this.setState({ note2ModalVisible: false });
                    this.setState({ note2Collected: true });
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
