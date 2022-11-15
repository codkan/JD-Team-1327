/*
 * Level One Screen
 * React Native Game Engine Lives Here
 * Maintains the state of the game
 */

import React, { Component } from "react";
import {Image, ImageBackground, Linking, Modal, StyleSheet, Text, View, Alert } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Background from "../assets/living-room/level-1-floor.png";
import GameStatusBar from "../components/GameStatusBar";
import MenuButton from "../components/buttons/MenuButton";
import GameButton from "../components/buttons/GameButton";
import note from "../assets/gameItems/note.png";
import speak from "../assets/gameItems/speak.png";
import { get, insert } from "../Db";
import Entities from "../entities/Level1Entities";
import Dispatches from "../systems/Level1Dispatches";
import Movement from "../systems/Movement";
import * as ScreenOrientation from 'expo-screen-orientation';
import train from "../assets/gameNotePics/train.png";
import { CoreStyle } from "../components/CoreStyle.js";
import {handleLogin} from "../components/Login.js";

export default class LevelOne extends Component {
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
      markBadgeModal: false,
    };
  }

  async componentDidMount() {
    this.state.badgeEarned = await get("mark");
    let gold = await get("gold1");
    let silver = await get("silver1");
    let bronze = await get("bronze1");

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

  // This is a callback function that is passed as a
  // prop to pause. When the pause button in the status bar
  // is clicked the status bar calls this function which changes
  // the pause state
  pauseCheckCallback = (pauseStatus) => {
    this.setState({ engineRunning: pauseStatus });
  };

  //callback to take the user to the next level
  handleNextLevel = () => {
    this.props.navigation.replace("LevelTwo");
  };

  //callback to restart the level
  handleLevelRestart = () => {
    this.props.navigation.replace("LevelOne");
  };

  handleLeaderboard = () => {

    if (global.user_id != null) {

        let axios = require("axios").default;

        let options = {
          method: 'PATCH',
          url: 'https://childsafe.us.auth0.com/api/v2/users/'+global.user_id,
          headers: {authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InhsR0ZUWTZ5a283eHNMWVFnUVdxSSJ9.eyJpc3MiOiJodHRwczovL2NoaWxkc2FmZS51cy5hdXRoMC5jb20vIiwic3ViIjoiTU9hZENodU1LMTFocHBWWG5ibXNMQlJaVEdsVE9mWmhAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vY2hpbGRzYWZlLnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjY4NTQ0NzYxLCJleHAiOjE2NzExMzY3NjEsImF6cCI6Ik1PYWRDaHVNSzExaHBwVlhuYm1zTEJSWlRHbFRPZlpoIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSByZWFkOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl9jdXN0b21fYmxvY2tzIGRlbGV0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZTpjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cmVzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3JlZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGRhdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmhvb2tzIHVwZGF0ZTpob29rcyBkZWxldGU6aG9va3MgY3JlYXRlOmhvb2tzIHJlYWQ6YWN0aW9ucyB1cGRhdGU6YWN0aW9ucyBkZWxldGU6YWN0aW9ucyBjcmVhdGU6YWN0aW9ucyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXRlOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOmluc2lnaHRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6bG9nc191c2VycyByZWFkOnNoaWVsZHMgY3JlYXRlOnNoaWVsZHMgdXBkYXRlOnNoaWVsZHMgZGVsZXRlOnNoaWVsZHMgcmVhZDphbm9tYWx5X2Jsb2NrcyBkZWxldGU6YW5vbWFseV9ibG9ja3MgdXBkYXRlOnRyaWdnZXJzIHJlYWQ6dHJpZ2dlcnMgcmVhZDpncmFudHMgZGVsZXRlOmdyYW50cyByZWFkOmd1YXJkaWFuX2ZhY3RvcnMgdXBkYXRlOmd1YXJkaWFuX2ZhY3RvcnMgcmVhZDpndWFyZGlhbl9lbnJvbGxtZW50cyBkZWxldGU6Z3VhcmRpYW5fZW5yb2xsbWVudHMgY3JlYXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRfdGlja2V0cyByZWFkOnVzZXJfaWRwX3Rva2VucyBjcmVhdGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiBkZWxldGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiByZWFkOmN1c3RvbV9kb21haW5zIGRlbGV0ZTpjdXN0b21fZG9tYWlucyBjcmVhdGU6Y3VzdG9tX2RvbWFpbnMgdXBkYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMgcmVhZDpwcm9tcHRzIHVwZGF0ZTpwcm9tcHRzIHJlYWQ6YnJhbmRpbmcgdXBkYXRlOmJyYW5kaW5nIGRlbGV0ZTpicmFuZGluZyByZWFkOmxvZ19zdHJlYW1zIGNyZWF0ZTpsb2dfc3RyZWFtcyBkZWxldGU6bG9nX3N0cmVhbXMgdXBkYXRlOmxvZ19zdHJlYW1zIGNyZWF0ZTpzaWduaW5nX2tleXMgcmVhZDpzaWduaW5nX2tleXMgdXBkYXRlOnNpZ25pbmdfa2V5cyByZWFkOmxpbWl0cyB1cGRhdGU6bGltaXRzIGNyZWF0ZTpyb2xlX21lbWJlcnMgcmVhZDpyb2xlX21lbWJlcnMgZGVsZXRlOnJvbGVfbWVtYmVycyByZWFkOmVudGl0bGVtZW50cyByZWFkOmF0dGFja19wcm90ZWN0aW9uIHVwZGF0ZTphdHRhY2tfcHJvdGVjdGlvbiByZWFkOm9yZ2FuaXphdGlvbnNfc3VtbWFyeSBjcmVhdGU6YWN0aW9uc19sb2dfc2Vzc2lvbnMgcmVhZDpvcmdhbml6YXRpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVycyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGRlbGV0ZTpvcmdhbml6YXRpb25fbWVtYmVycyBjcmVhdGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgY3JlYXRlOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.AhJB3Z5DEO_rjTIJgr4CHcSpRXZ5hGNd6ug-fr2l5LgfgVZ1Go1Fj_Cdl2hXN6EZS3D8O5k5D4XMPPZfFGB1BOcBBPBwdPmSd67N84fsKHD4vppb0UvonYUtwEvonGM1hnQSU2rlVKH522Whp-Aj2fTUQYNjd5DmH0pQXpzB3xqEL6j9nRCSdgqS4oUOzuhUknC9sEdkobBG7RZ88CX2OV9AmJDesUow2eOcxKH5D0KVHaRwRNIHerAsQvotSIPfK0T7b1VPFZNYLK8hvRvbcU4Luzxp-jrjj4GEex9eVN86mc3zgaqSUyvDzYVUo7ckEOFr2a9kOJHieGN8mBJZUw'}
          data: {user_metadata: {score1: this.state.min+":"+this.state.sec+":"+this.state.msec}}
        };

        axios.request(options).then(function (response) {
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

  // go home callback
  handleReturnToHome = () => {
    this.props.navigation.replace("Home");
  };

  // callback that is called when the user hits the Note Button
  // updates the inventory by one
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
  };
  //callback that changes the level status to complete
  // called after contacting the stairs with a full inventory
  handleLevelComplete = () => {
    this.setState({ levelComplete: true });
    if (
      this.state.sec < 15 &&
      this.state.min == 0 &&
      this.state.highestEarned !== "gold"
    ) {
      insert("gold1", "true");
      insert("silver1", "false");
      insert("bronze1", "false");
      this.setState({ highestEarned: "gold" });
    } else if (
      this.state.sec < 30 &&
      this.state.min == 0 &&
      this.state.highestEarned !== "gold" &&
      this.state.highestEarned !== "silver"
    ) {
      insert("silver1", "true");
      insert("bronze1", "false");
      this.setState({ highestEarned: "silver" });
    } else {
      insert("bronze1", "true");
      this.setState({ highestEarned: "bronze" });
    }
    insert("lvl2", "true");
  };

  //confusing process to get time from the timer component
  // callback is passed to statusbar which passes it to timer.
  // Time calls the function when level complete changes and updates
  // the final level time
  getTime = (time) => {
    this.setState({ min: time.min });
    this.setState({ sec: time.sec });
    this.setState({ msec: time.msec });
  };

  // function called by the speak button
  // makes the npc dialog modal visible
  handleNPCInteraction = () => {
    this.setState({ interactionModalVisible: true });
  };

  //Handles all of the collisions and information that comes from
  //the system dispatches. (Level1Dispatches.js)
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
              supportedOrientations={["landscape"]}
              onRequestClose={() => {
                this.setModalVisible(!modalVisible);
              }}
            >
              <View style={CoreStyle.centeredView}>
                <View style={CoreStyle.modalView}>
                  <Text allowFontScaling={true} style={CoreStyle.modalText}>
                  Collect All The Notes To Progress To The Next Level.</Text>
                  <Text allowFontScaling={true} style={CoreStyle.modalText}>
                    Then go the stairs to finish the level. </Text>
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
            currentLevel={"LevelOne"}
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
              supportedOrientations={["landscape"]}
              onRequestClose={() => {
                this.setModalVisible(!modalVisible);
              }}
            >
              <View style={CoreStyle.centeredView}>
                <View style={CoreStyle.modalView}>
                  <Text allowFontScaling={true} style={CoreStyle.modalTitle}>Coins:</Text>
                  <Text allowFontScaling={true} style={CoreStyle.modalText}>
                    Choose a toy chest without a lid. Toys should be large
                    enough — at least 1¼" (3 centimeters) in diameter and 2¼" (6
                    centimeters) in length — so that they can't be swallowed or
                    lodged in the windpipe. Avoid marbles, coins, balls, and
                    games with balls that are 1.75 inches (4.4 centimeters) in
                    diameter or less because they can become lodged in the
                    throat above the windpipe and cause trouble with breathing.
                  </Text>
                   <Text allowFontScaling={true} style={CoreStyle.modalText} onPress={() => { Linking.openURL('https://kidshealth.org/en/parents/products-toys.html') }}>
                    Source: https://kidshealth.org/en/parents/products-toys.html
                  </Text> 
                  <Image style={styles.img} source={train}/>
                  <Text allowFontScaling={true} style={CoreStyle.textStyle}>Hide Modal</Text>
                  <MenuButton
                    text="OK"
                    onPress={() => {
                      this.setState({ note1ModalVisible: false });
                      this.setState({ note1Collected: true });
                      if (this.state.badgeEarned == null) {
                        this.setState({ markBadgeModal: true });
                      }
                      this.timerRef.startClock();
                    }}
                  ></MenuButton>
                </View>
              </View>
            </Modal>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.markBadgeModal}
              supportedOrientations={["landscape"]}
              onRequestClose={() => {
                this.setModalVisible(!modalVisible);
              }}
            >
              <View style={CoreStyle.centeredView}>
                <View style={CoreStyle.modalView}>
                  <Text allowFontScaling={true} style={CoreStyle.modalText}>
                    Congrats! You found your first Note. Go to the badges page
                    to track your progress!
                  </Text>
                  <MenuButton
                    text="OK"
                    onPress={() => {
                      this.setState({ markBadgeModal: false });
                      insert("mark", "true");
                      this.setState({ badgeEarned: "true" });
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
                  <Text allowFontScaling={true} style={CoreStyle.modalTitle}>Outlets:</Text>
                  <Text allowFontScaling={true} style={CoreStyle.modalText}>
                    Outlet covers are great solutions to prevent accidental
                    electrocutions. Nearly one-third of accidents occur when a
                    child inserts common household items into receptacles, 70
                    percent of them occurring when adults are present. Items
                    that children insert into outlets can be found anywhere, and
                    commonly include: hairpins, keys, plugs, paper clips, staples, tools,
                    jewelry, belt buckles, nail files, and knives. {'\n'}{'\n'}
                    Approximately 100 kids die each year by electrocution, and
                    many others are seriously hurt. {'\n'}{'\n'}
                    95 percent of injuries resulting from electrical outlets
                    will involve burns. Though they range in severity, it is
                    important to understand that burns are very serious in young
                    children whose skin is thin and offers little resistance to
                    electric flow or heat.
                  </Text>
                  <Text allowFontScaling={true} style={CoreStyle.modalText} onPress={() => { Linking.openURL('https://mrelectric.com/child-proof-outlets'); }}>
                      Source: https://mrelectric.com/child-proof-outlets
                    </Text>
                  <Text allowFontScaling={true} style={CoreStyle.textStyle}>Hide Modal</Text>
                  <MenuButton
                    text="OK"
                    onPress={() => {
                      this.setState({ note2ModalVisible: false });
                      this.setState({ note2Collected: true });
                      if (this.state.badgeEarned == null) {
                        this.setState({ markBadgeModal: true });
                      }
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
  img: {
    height: 70,
    width: 70,
  },
});
