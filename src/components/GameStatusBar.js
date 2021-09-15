import React, { Component } from "react";
import { View, Modal, Button, Text, StyleSheet } from "react-native";
import Constants from "../Constants";
import Timer from "./Timer";
import MenuButton from "./MenuButton";

export default class GameStatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: false,
      inventorySize: this.props.inventorySize,
      inventoryCap: this.props.inventoryCap,
      pauseModalVisible: false,
    };
  }

  componentDidUpdate() {
    if (
      this.state.inventorySize != this.props.inventorySize &&
      this.state.inventorySize < this.state.inventoryCap
    ) {
      this.setState({ inventorySize: this.props.inventorySize });
    }
    if (this.props.levelComplete == true && this.state.paused == false) {
      this.setState({ paused: true });
      this.props.pauseUpdater(false);
      this.props.getTime;
    }
  }
  handlePauseButton = () => {
    this.setState({ paused: true });
    this.setState({ pauseModalVisible: true });
    this.props.pauseUpdater(false);
  };

  stopClock() {
    this.setState({paused: true});
  }

  startClock = () => {
    this.setState({paused: false});
  }

  handleResume = () => {
    this.setState({ paused: false });
    this.setState({ pauseModalVisible: false });
    this.props.pauseUpdater(true);
  };

  handleLevelRestart = () => {
    this.props.navigation.replace(this.props.currentLevel);
  };

  handleReturnToHome = () => {
    this.props.navigation.replace("Home");
  };

  getTime = (time) => {
    this.props.timeToLevel(time);
  };
  render() {
    const width = Constants.MAX_WIDTH;
    const height = Constants.MAX_HEIGHT * 0.08;
    const x = 0;
    const y = 0;

    return (
      <View style={{ position: "absolute" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            position: "absolute",
            alignItems: "center",
            justifyContent: "flex-start",
            left: x,
            top: y,
            width: width,
            height: height,
            backgroundColor: "#111111",
          }}
        >
          <View style={{ marginLeft: "2%", marginRight: "5%" }}>
            <Button
              title="II"
              color="gray"
              onPress={this.handlePauseButton}
            ></Button>
          </View>
          <Text style={{ color: "white", justifyContent: "center" }}>
            Items: {this.state.inventorySize}/{this.state.inventoryCap}
          </Text>
          <View style={{ marginLeft: "65%" }}>
            <Timer
              paused={this.state.paused}
              final={this.props.levelComplete}
              timeToStatusBar={this.getTime}
            />
          </View>
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.pauseModalVisible}
            supportedOrientations={['landscape']}
            // onRequestClose={() => {
            //   this.setModalVisible(!modalVisible);
            // }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>PAUSED</Text>
                <Text style={styles.textStyle}>Hide Modal</Text>
                <MenuButton
                  text="RESUME"
                  onPress={this.handleResume}
                ></MenuButton>
                <MenuButton
                  text="RESTART"
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
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#88ccff",
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
    fontWeight: "bold",
    textAlign: "center",
  },
  NoteButton: {},
});
