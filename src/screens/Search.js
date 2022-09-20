
import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View, SafeAreaView, FlatList, Alert } from "react-native";
import { SearchBar } from 'react-native-elements';
import { CoreStyle } from "../components/CoreStyle";
import Navbar from "../components/NavBar";
import Background from "../assets/bg.png";
import { Content } from "../Content";
import Highlighter from "@sanar/react-native-highlight-text";

export default function Search({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(() => {
      setFilteredDataSource(Content);
      setMasterDataSource(Content);
    }, []);

    const searchFilterFunction = (text) => {
      // Check if searched text is not blank
      if (text) {
        // Inserted text is not blank
        // Filter the masterDataSource
        // Update FilteredDataSource
        const newData = masterDataSource.filter(function(item){
          const itemData = item.body
            ? item.body.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
        setSearch(text);
      } else {
        // Inserted text is blank
        // Update FilteredDataSource with masterDataSource
        setFilteredDataSource(masterDataSource);
        setSearch(text);
      }
    };

    const ItemView = ({ item }) => {
        return (
          // Flat List Item
          <Highlighter
            style={styles.itemStyle}
            highlightStyle={{backgroundColor: "yellow"}}
            onPress={() => getItem(item)}
            searchWords={[search]}
            textToHighlight={item.topic + "\n" + item.title + '\n' + item.body}
            />
        );
    };

    const ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View
            style={{
              height: 2,
              width: '100%',
              backgroundColor: 'rgba(52, 52, 52, 0.0)',
            }}
          />
        );
    };

    const getItem = (item) => {
        // Function for click on an item
        Alert.alert(
            'Topic : ' + item.topic,
            'Section : ' + item.title + '\nText :\n' + item.body,
            [
                {text: 'BACK', style: 'destructive'},
                {text: 'CONTINUE     ', style: 'default'},
                {text: 'Visit Page', onPress: () => navigation.navigate(item.topic), style: 'cancel'}
            ],
            {cancelable: true}
        );
    };

  return (
    <ImageBackground source={global.bg} style={CoreStyle.image}>

    <SafeAreaView style={{ flex: 1 }}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Search Here..."
          value={search}
        />
      <View style={styles.container}>
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>

    <View style = {CoreStyle.pushdown}>
    <Navbar navigation={navigation}/>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

    modalText: {
        height: 70,
        fontSize: 40,
        marginTop: 10,
        marginBottom: 0,
        fontWeight: "bold",
        textAlign: "center",
    },
    container: {
      width: '100%',
      alignItems: "center",
      alignSelf: "center",
      marginBottom: 120,
    },
    itemStyle: {
      backgroundColor: global.color2,
      padding: 10,
      fontSize: 16,
      textAlign: "justify",
      lineHeight: 20,
      marginRight: 10,
      marginLeft: 10,
      marginTop: 10,
      borderRadius: 20,
    },
});