
import React, { Component } from "react";
import { ImageBackground, Text, View, SafeAreaView, FlatList, Alert, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CoreStyle } from "../components/CoreStyle";
import Navbar from "../components/NavBar";
import MainButton from "../components/buttons/MainButton";

export default class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: [],
            savedTopics: []
        };
        this.getSaves();
    }


    async getSaves() {
        let a = await AsyncStorage.getItem("saved");
        let b = JSON.parse(a);
        let c = await AsyncStorage.getItem("savedTopics");
        let d = JSON.parse(c);
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
            <Text style={CoreStyle.itemStyle}>{this.state.savedTopics[item.index] + "\n\n" + item.item.title + "\n\n" + item.item.body}</Text>
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
        let _savedTopics = this.state.savedTopics;
        let _saved = this.state.saved;
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
        let clear = [];
        await AsyncStorage.setItem("saved", JSON.stringify(clear));
        await AsyncStorage.setItem("savedTopics", JSON.stringify(clear));
    }

  render (){

      return (
        <ImageBackground source={global.bg} style={CoreStyle.image}>

        <Text allowFontScaling={true} style={CoreStyle.title}>Saved Bookmarks:</Text>

        <SafeAreaView style={{ flex: 1, marginBottom: -50}}>
          <View style={CoreStyle.itemContainer}>
            <FlatList
              data={this.state.saved}
              renderItem={this.ItemView}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={this.ItemSeparatorView}
            />
          </View>
        </SafeAreaView>

        <View style={{
                     marginBottom: 60,
                     marginTop: -65,
                     alignSelf: "center",
                     alignItems: "center",
                     justifyContent: "center",
                    }}>
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
  }
}