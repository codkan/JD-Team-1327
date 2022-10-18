/*
 * Level Three Screen
 * React Native Game Engine Lives Here
 * Maintains the state of the game
 */

import React, { Component } from "react";
import axios from "axios";
import { Image, ImageBackground, Linking, Modal, StyleSheet, Text, View } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Background from "../assets/yard/level-3-floor.png";
import GameStatusBar from "../components/GameStatusBar";
import MenuButton from "../components/buttons//MenuButton";
import GameButton from "../components/buttons//GameButton";
import note from "../assets/gameItems/note.png";
import speak from "../assets/gameItems/speak.png";
import { get, insert } from "../Db";
import Entities from "../entities/Level3Entities";
import DogMove from "../systems/DogMove";
import Dispatches from "../systems/Level3Dispatches";
import Movement from "../systems/Movement";
import * as ScreenOrientation from 'expo-screen-orientation';
import car from "../assets/gameNotePics/car.png";
import pool from "../assets/gameNotePics/pool.png";
import { CoreStyle } from "../components/CoreStyle.js";

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

  handleLeaderboard = () => {
    var axios = require("axios").default;

    var options = {
      method: 'PATCH',
      url: 'https://childsafe.us.auth0.com/api/v2/users/'+global.user_id,
      headers: {authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InhsR0ZUWTZ5a283eHNMWVFnUVdxSSJ9.eyJpc3MiOiJodHRwczovL2NoaWxkc2FmZS51cy5hdXRoMC5jb20vIiwic3ViIjoiTU9hZENodU1LMTFocHBWWG5ibXNMQlJaVEdsVE9mWmhAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vY2hpbGRzYWZlLnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjY1Nzc3NzM0LCJleHAiOjE2NjgzNjk3MzQsImF6cCI6Ik1PYWRDaHVNSzExaHBwVlhuYm1zTEJSWlRHbFRPZlpoIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSByZWFkOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl9jdXN0b21fYmxvY2tzIGRlbGV0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZTpjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cmVzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3JlZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGRhdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmhvb2tzIHVwZGF0ZTpob29rcyBkZWxldGU6aG9va3MgY3JlYXRlOmhvb2tzIHJlYWQ6YWN0aW9ucyB1cGRhdGU6YWN0aW9ucyBkZWxldGU6YWN0aW9ucyBjcmVhdGU6YWN0aW9ucyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXRlOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOmluc2lnaHRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6bG9nc191c2VycyByZWFkOnNoaWVsZHMgY3JlYXRlOnNoaWVsZHMgdXBkYXRlOnNoaWVsZHMgZGVsZXRlOnNoaWVsZHMgcmVhZDphbm9tYWx5X2Jsb2NrcyBkZWxldGU6YW5vbWFseV9ibG9ja3MgdXBkYXRlOnRyaWdnZXJzIHJlYWQ6dHJpZ2dlcnMgcmVhZDpncmFudHMgZGVsZXRlOmdyYW50cyByZWFkOmd1YXJkaWFuX2ZhY3RvcnMgdXBkYXRlOmd1YXJkaWFuX2ZhY3RvcnMgcmVhZDpndWFyZGlhbl9lbnJvbGxtZW50cyBkZWxldGU6Z3VhcmRpYW5fZW5yb2xsbWVudHMgY3JlYXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRfdGlja2V0cyByZWFkOnVzZXJfaWRwX3Rva2VucyBjcmVhdGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiBkZWxldGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiByZWFkOmN1c3RvbV9kb21haW5zIGRlbGV0ZTpjdXN0b21fZG9tYWlucyBjcmVhdGU6Y3VzdG9tX2RvbWFpbnMgdXBkYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMgcmVhZDpwcm9tcHRzIHVwZGF0ZTpwcm9tcHRzIHJlYWQ6YnJhbmRpbmcgdXBkYXRlOmJyYW5kaW5nIGRlbGV0ZTpicmFuZGluZyByZWFkOmxvZ19zdHJlYW1zIGNyZWF0ZTpsb2dfc3RyZWFtcyBkZWxldGU6bG9nX3N0cmVhbXMgdXBkYXRlOmxvZ19zdHJlYW1zIGNyZWF0ZTpzaWduaW5nX2tleXMgcmVhZDpzaWduaW5nX2tleXMgdXBkYXRlOnNpZ25pbmdfa2V5cyByZWFkOmxpbWl0cyB1cGRhdGU6bGltaXRzIGNyZWF0ZTpyb2xlX21lbWJlcnMgcmVhZDpyb2xlX21lbWJlcnMgZGVsZXRlOnJvbGVfbWVtYmVycyByZWFkOmVudGl0bGVtZW50cyByZWFkOmF0dGFja19wcm90ZWN0aW9uIHVwZGF0ZTphdHRhY2tfcHJvdGVjdGlvbiByZWFkOm9yZ2FuaXphdGlvbnNfc3VtbWFyeSBjcmVhdGU6YWN0aW9uc19sb2dfc2Vzc2lvbnMgcmVhZDpvcmdhbml6YXRpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVycyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGRlbGV0ZTpvcmdhbml6YXRpb25fbWVtYmVycyBjcmVhdGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgY3JlYXRlOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.vIaT7T6v2f8lXRl2G06pPCZ15_JMxEHxBvt_1HwQJGH6ypx1Oz_AGqq_hd-AsaevuI3-G-e94yxCvBUUZUT9pcrm9XlYVvkbULJhVfcgr4bjyP-9bqtbQOKcq8zDNMPCmOk8a_SWA6l_m0WY8b2X-eHObvUNzwSBfz_6O0dKg2338hHT8eFzeFGmHiNPmFKhSKttMNkxOFB2U6FXsQLJHxq0oHhOYYDOpmHL94-AK-1e84_skCiyi9kT1NaOQSIWNvg1R6rJWMZzWisWFnPZLx_MQH8DVoaIr0MSUZlVEDV8DdMtnW0UXmPD38ltiRzK8cWY0c6rreezhN_QbFQ-yw'},
      data: {user_metadata: {score3: this.state.min+":"+this.state.sec+":"+this.state.msec}}
    };

    axios.request(options).then(function (response) {
      console.log(response.data.user_metadata);
    }).catch(function (error) {
      console.error(error);
    });
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
      this.state.inventorySize >= this.state.inventoryCap &&
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
            supportedOrientations={["landscape"]}
            onRequestClose={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={CoreStyle.centeredView}>
              <View style={CoreStyle.modalView}>
                <Text allowFontScaling={true} style={CoreStyle.modalText}>
                  Collect All The Notes To Progress To The Next Level.
                  </Text>
                  <Text allowFontScaling={true} style={CoreStyle.modalText}>
                  Then go pet the nice doggo.
                </Text>
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
            supportedOrientations={["landscape"]}
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
                    text="ENTER SCORE"
                    onPress={this.handleLeaderboard}
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
          <View style={CoreStyle.centeredView}>
            <View style={CoreStyle.modalView}>
              <Text allowFontScaling={true} style={CoreStyle.modalText}>You Pet The Dog!</Text>
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
          <GameButton
            visible={this.state.collectNote1Visible}
            onPress={this.handleCollectNote1}
            img = {note}
          />
          <GameButton
            visible={this.state.collectNote2Visible}
            onPress={this.handleCollectNote2}
            img = {note}
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
            <View style={CoreStyle.centeredView}>
              <View style={CoreStyle.modalView}>
                <Text allowFontScaling={true} style={CoreStyle.modalTitle}>Hot Car</Text>
                <Text allowFontScaling={true} style={CoreStyle.modalText}>
                  Children dying from heatstroke in cars, either because they
                  were left or became trapped, has increased in the recent
                  years. On April 25, the first vehicular heatstroke of 2020
                  occurred when a four-year-old left a home and climbed into a
                  vehicle without his family noticing. His death follows 52 car
                  deaths in 2019, and a record 53 deaths in 2018.
                </Text>
                <Text allowFontScaling={true} style={CoreStyle.modalText}>
                  The majority of hot car deaths – 54% - happen because someone
                  forgets a child in a car. Nearly 75% of children who are
                  forgotten and die are under 2 years old.
                </Text>
                <Text allowFontScaling={true} style={CoreStyle.modalText} onPress={() => { Linking.openURL('https://www.nhtsa.gov/child-safety/help-prevent-hot-car-deaths'); }}>
                  Source:https://www.nhtsa.gov/child-safety/help-prevent-hot-car-deaths
                </Text>
                <Image style={styles.carimg} source={car}/>
                <Text allowFontScaling={true} style={CoreStyle.textStyle}>Hide Modal</Text>
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
            <View style={CoreStyle.centeredView}>
              <View style={CoreStyle.modalView}>
                <Text allowFontScaling={true} style={CoreStyle.modalTitle}>Drowning:</Text>
                <Text allowFontScaling={true} style={CoreStyle.modalText}>
                  Drowning is the leading cause of injury death in children 1–4.
                  Young children can drown in as little as an inch or two of
                  water, and it can happen quickly and silently.{'\n'}{'\n'}
                  The biggest drowning threat facing families with toddlers is
                  unexpected, unsurpervised access to water: swimming pools, hot
                  tubs and spas, bathtubs, natural bodies of water such as
                  ponds, and standing water in homes. For example, 69% of all
                  drownings among children 4 and younger happen during non-swim
                  times.{'\n'}{'\n'}
                  Research suggests that fencing can prevent more than half of
                  all swimming pool drownings of young children. Swimming pools,
                  including large, inflatable above-ground pools and other
                  temporary pools, should be completely surrounded by a fence on
                  all 4 sides.
                </Text>
                <Text allowFontScaling={true} style={CoreStyle.modalText} onPress={() => { Linking.openURL('https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Water-Safety-And-Young-Children.aspx'); }}>
                  Source: https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Water-Safety-And-Young-Children.aspx
                </Text>
                <Text allowFontScaling={true} style={CoreStyle.textStyle}>Hide Modal</Text>
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
          <GameButton
            visible={this.state.interactionIconVisible}
            onPress={this.handleNPCInteraction}
            img = {speak}
          />
        </View>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  poolimg: {
    height: 100,
    width: 170,
  },
  carimg: {
    height: 85.7,
    width: 150,
  },
});
