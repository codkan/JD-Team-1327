/*
 * Level Two Screen
 * React Native Game Engine Lives Here
 * Maintains the state of the game
 */

import React, { Component } from "react";
import {Image, ImageBackground, Linking, Modal, StyleSheet, Text, View, Alert } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Background from "../assets/kitchen/level-2-floor.png";
import GameStatusBar from "../components/GameStatusBar";
import MenuButton from "../components/buttons/MenuButton";
import GameButton from "../components/buttons/GameButton";
import note from "../assets/gameItems/note.png";
import speak from "../assets/gameItems/speak.png";
import { get, insert } from "../Db";
import Entities from "../entities/Level2Entities";
import Dispatches from "../systems/Level2Dispatches";
import Movement from "../systems/Movement";
import * as ScreenOrientation from 'expo-screen-orientation';
import pan from "../assets/gameNotePics/pan.png";
import poison from "../assets/gameNotePics/poison.png";
import { CoreStyle } from "../components/CoreStyle.js";
import {handleLogin} from "../components/Login.js";

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

  handleLeaderboard = () => {
    if (global.user_id != null) {
        let axios = require("axios").default;

        let options = {
          method: 'PATCH',
          url: 'https://childsafe.us.auth0.com/api/v2/users/'+global.user_id,
          headers: {authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InhsR0ZUWTZ5a283eHNMWVFnUVdxSSJ9.eyJpc3MiOiJodHRwczovL2NoaWxkc2FmZS51cy5hdXRoMC5jb20vIiwic3ViIjoiTU9hZENodU1LMTFocHBWWG5ibXNMQlJaVEdsVE9mWmhAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vY2hpbGRzYWZlLnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjY1Nzc3NzM0LCJleHAiOjE2NjgzNjk3MzQsImF6cCI6Ik1PYWRDaHVNSzExaHBwVlhuYm1zTEJSWlRHbFRPZlpoIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSByZWFkOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl9jdXN0b21fYmxvY2tzIGRlbGV0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZTpjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cmVzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3JlZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGRhdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmhvb2tzIHVwZGF0ZTpob29rcyBkZWxldGU6aG9va3MgY3JlYXRlOmhvb2tzIHJlYWQ6YWN0aW9ucyB1cGRhdGU6YWN0aW9ucyBkZWxldGU6YWN0aW9ucyBjcmVhdGU6YWN0aW9ucyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXRlOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOmluc2lnaHRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6bG9nc191c2VycyByZWFkOnNoaWVsZHMgY3JlYXRlOnNoaWVsZHMgdXBkYXRlOnNoaWVsZHMgZGVsZXRlOnNoaWVsZHMgcmVhZDphbm9tYWx5X2Jsb2NrcyBkZWxldGU6YW5vbWFseV9ibG9ja3MgdXBkYXRlOnRyaWdnZXJzIHJlYWQ6dHJpZ2dlcnMgcmVhZDpncmFudHMgZGVsZXRlOmdyYW50cyByZWFkOmd1YXJkaWFuX2ZhY3RvcnMgdXBkYXRlOmd1YXJkaWFuX2ZhY3RvcnMgcmVhZDpndWFyZGlhbl9lbnJvbGxtZW50cyBkZWxldGU6Z3VhcmRpYW5fZW5yb2xsbWVudHMgY3JlYXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRfdGlja2V0cyByZWFkOnVzZXJfaWRwX3Rva2VucyBjcmVhdGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiBkZWxldGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiByZWFkOmN1c3RvbV9kb21haW5zIGRlbGV0ZTpjdXN0b21fZG9tYWlucyBjcmVhdGU6Y3VzdG9tX2RvbWFpbnMgdXBkYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMgcmVhZDpwcm9tcHRzIHVwZGF0ZTpwcm9tcHRzIHJlYWQ6YnJhbmRpbmcgdXBkYXRlOmJyYW5kaW5nIGRlbGV0ZTpicmFuZGluZyByZWFkOmxvZ19zdHJlYW1zIGNyZWF0ZTpsb2dfc3RyZWFtcyBkZWxldGU6bG9nX3N0cmVhbXMgdXBkYXRlOmxvZ19zdHJlYW1zIGNyZWF0ZTpzaWduaW5nX2tleXMgcmVhZDpzaWduaW5nX2tleXMgdXBkYXRlOnNpZ25pbmdfa2V5cyByZWFkOmxpbWl0cyB1cGRhdGU6bGltaXRzIGNyZWF0ZTpyb2xlX21lbWJlcnMgcmVhZDpyb2xlX21lbWJlcnMgZGVsZXRlOnJvbGVfbWVtYmVycyByZWFkOmVudGl0bGVtZW50cyByZWFkOmF0dGFja19wcm90ZWN0aW9uIHVwZGF0ZTphdHRhY2tfcHJvdGVjdGlvbiByZWFkOm9yZ2FuaXphdGlvbnNfc3VtbWFyeSBjcmVhdGU6YWN0aW9uc19sb2dfc2Vzc2lvbnMgcmVhZDpvcmdhbml6YXRpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVycyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGRlbGV0ZTpvcmdhbml6YXRpb25fbWVtYmVycyBjcmVhdGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgY3JlYXRlOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.vIaT7T6v2f8lXRl2G06pPCZ15_JMxEHxBvt_1HwQJGH6ypx1Oz_AGqq_hd-AsaevuI3-G-e94yxCvBUUZUT9pcrm9XlYVvkbULJhVfcgr4bjyP-9bqtbQOKcq8zDNMPCmOk8a_SWA6l_m0WY8b2X-eHObvUNzwSBfz_6O0dKg2338hHT8eFzeFGmHiNPmFKhSKttMNkxOFB2U6FXsQLJHxq0oHhOYYDOpmHL94-AK-1e84_skCiyi9kT1NaOQSIWNvg1R6rJWMZzWisWFnPZLx_MQH8DVoaIr0MSUZlVEDV8DdMtnW0UXmPD38ltiRzK8cWY0c6rreezhN_QbFQ-yw'},
          data: {user_metadata: {score2: this.state.min+":"+this.state.sec+":"+this.state.msec}}
        };

        axios.request(options).then(function (response) {
          console.log(response.data.user_metadata);
        }).catch(function (error) {
          console.error(error);
        });
    } else {
        Alert.alert(
            'You Are Not Logged In',
            "You are trying to access Global Leaderboard rankings without logging in\n\nYou must login to view Global Leaderboard rankings\n\nWould you like to log in?",
            [
                {text: 'NO', style: 'destructive'},
                {text: 'CLOSE', style: 'cancel'},
                {text: 'YES', style: 'default', onPress: () => handleLogin()},
            ],
        );
    }
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
      this.state.highestEarned = "bronze";
    } else {
      this.state.highestEarned = null;
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
    if (e.type === "note-one-found" && !this.state.note1Collected) {
      this.setState({ collectNote1Visible: true });
    }
    if (e.type === "note-two-found" && !this.state.note2Collected) {
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
      this.state.inventorySize >= this.state.inventoryCap &&
      !this.state.levelComplete
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
  panimg: {
    height: 70,
    width: 250,
  },
  poisonimg: {
    height: 100,
    width: 50,
  },
});