
import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View, SafeAreaView, FlatList, Alert } from "react-native";
import { SearchBar } from 'react-native-elements';
import { CoreStyle } from "../components/CoreStyle";
import Navbar from "../components/NavBar";
import Background from "../assets/bg.png";
import { Content } from "../Content";

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
          <Text style={styles.itemStyle} onPress={() => getItem(item)}>
            {item.topic}
            {'\n'}
            {item.title}
            {'\n'}
            {item.body}
          </Text>
        );
    };

    const ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View
            style={{
              height: 0.5,
              width: '100%',
              backgroundColor: '#C8C8C8',
            }}
          />
        );
    };

    const getItem = (item) => {
        // Function for click on an item
        Alert.alert(
            'Topic : ' + item.topic,
            'Section : ' + item.title + '\nText : ' + item.body,
            [
                {text: 'BACK', style: 'destructive'},
                {text: 'CONTINUE     ', style: 'default'},
                {text: 'Visit Page', onPress: () => navigation.navigate(item.topic), style: 'cancel'}
            ],
            {cancelable: true}
        );
    };

  return (
    <ImageBackground source={Background} style={styles.image}>

    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Search Here..."
          value={search}
        />
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
    image: {
        flex: 1,
        resizeMode: "cover",
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
      backgroundColor: 'white',
    },
    itemStyle: {
      padding: 15,
      fontSize: 16,
      textAlign: "justify",
      lineHeight: 20,
      marginRight: 15,
      marginLeft: 15,
    },
});