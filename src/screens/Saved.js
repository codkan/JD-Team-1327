
import React, { useState, useEffect, Component } from "react";
import { ImageBackground, StyleSheet, Text, View, SafeAreaView, FlatList, Alert, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CoreStyle } from "../components/CoreStyle";
import Navbar from "../components/NavBar";
import MainButton from "../components/buttons/MainButton";
import Background from "../assets/app/bg.png";

export default class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: [],
            savedTopics: []
        };
        this.getSaves();
    };


    async getSaves() {
        var a = await AsyncStorage.getItem("saved");
        var b = JSON.parse(a);
        var c = await AsyncStorage.getItem("savedTopics");
        var d = JSON.parse(c);
        this.state = {
            saved: b,
            savedTopics: d
        };
        this.setState({
            saved: b,
            savedTopics: d
        });
    }

    ItemView = ( item ) => {
        return (
          // Flat List Item
          <TouchableOpacity onPress={() => this.getItem(item)}>
            <Text style={styles.itemStyle}>{this.state.savedTopics[item.index] + "\n\n" + item.item.title + "\n\n" + item.item.body}</Text>
          </TouchableOpacity>
        );
    };

    ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View
            style={{
              height: 15,
              width: '100%',
              backgroundColor: 'rgba(52, 52, 52, 0.0)',
            }}
          />
        );
    };

    getItem = (item) => {
        // Function for click on an item
        Alert.alert(
            'Topic : ' + this.state.savedTopics[item.index],
            'Section : ' + item.item.title + '\n\nText :\n' + item.item.body,
            [
                {text: 'REMOVE', style: 'destructive', onPress: () => this.removeBookmark(item)},
                {text: 'CLOSE', style: 'default'},
                {text: 'Visit Page', onPress: () => this.props.navigation.navigate("Information", {topic: this.state.savedTopics[item.index]}), style: 'cancel'}
            ],
            {cancelable: true}
        );
    };

    removeBookmark = async (item) => {
        var _savedTopics = this.state.savedTopics;
        var _saved = this.state.saved;
        _savedTopics.splice(item.index, 1);
        _saved.splice(item.index, 1);
        await AsyncStorage.setItem("saved", JSON.stringify(_saved));
        await AsyncStorage.setItem("savedTopics", JSON.stringify(_savedTopics));
        this.state = {
            saved: _saved,
            savedTopics: _savedTopics
        };
        this.setState({
            saved: _saved,
            savedTopics: _savedTopics
        });
    }

    clearSaved = async () => {
        this.state = {
            saved: [],
            savedTopics: []
        };
        this.setState({
            saved: [],
            savedTopics: []
        });
        var clear = [];
        await AsyncStorage.setItem("saved", JSON.stringify(clear));
        await AsyncStorage.setItem("savedTopics", JSON.stringify(clear));
    }

  render (){

      return (
        <ImageBackground source={global.bg} style={CoreStyle.image}>

        <Text allowFontScaling={true} style={styles.title}>Saved Bookmarks:</Text>

        <SafeAreaView style={{ flex: 1, marginBottom: -50}}>
          <View style={styles.container}>
            <FlatList
              data={this.state.saved}
              renderItem={this.ItemView}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={this.ItemSeparatorView}
            />
          </View>
        </SafeAreaView>

        <View style={styles.btncontainer}>
        <MainButton
          text="Clear Bookmarks"
          txtColor={"black"}
          onPress={() => this.clearSaved()}
        ></MainButton>
        </View>

        <View style = {CoreStyle.pushdown}>
        <Navbar navigation={this.props.navigation}/>
        </View>
        </ImageBackground>
      );
  };
};

const styles = StyleSheet.create({
    btncontainer: {
        marginBottom: 60,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    modalText: {
        height: 70,
        fontSize: 40,
        marginTop: 10,
        marginBottom: 0,
        fontWeight: "bold",
        textAlign: "center",
    },
    container: {
      width: '95%',
      alignItems: "center",
      alignSelf: "center",
      marginBottom: 50,
    },
    itemStyle: {
      backgroundColor: global.color2,
      padding: 20,
      fontSize: 16,
      textAlign: "justify",
      lineHeight: 20,
      marginRight: 10,
      marginLeft: 10,
      marginTop: 10,
      borderRadius: 20,
    },
    title: {
        color: global.text,
        fontSize: 40,
        marginTop: 40,
        marginBottom: 15,
        fontWeight: "bold",
        textAlign: "center",
        textDecorationLine: "underline",
    },
});