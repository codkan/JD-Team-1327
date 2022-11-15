
import React, { useState, useEffect } from "react";
import { ImageBackground, View, SafeAreaView, FlatList, Alert } from "react-native";
import { SearchBar } from 'react-native-elements';
import { CoreStyle } from "../components/CoreStyle";
import Navbar from "../components/NavBar";
import { Index } from "../json/Index.json";
import Highlighter from "@sanar/react-native-highlight-text";

export default function Search({ navigation }) {

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(() => {
      setFilteredDataSource(Index);
      setMasterDataSource(Index);
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
            style={CoreStyle.itemStyle}
            highlightStyle={{backgroundColor: "yellow"}}
            onPress={() => getItem(item)}
            searchWords={[search]}
            textToHighlight={item.topic + "\n\n" + item.title + '\n\n' + item.body}
            />
        );
    };

    const ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View
            style={{
              height: 15,
              width: '100%',
              borderRadius: 20,
              backgroundColor: 'rgba(52, 52, 52, 0.0)',
            }}
          />
        );
    };

    const getItem = (item) => {
        // Function for click on an item
        Alert.alert(
            'Topic : ' + item.topic,
            'Section : ' + item.title + '\n\nText :\n' + item.body,
            [
                {text: 'BACK', style: 'destructive'},
                {text: 'CONTINUE     ', style: 'default'},
                {text: 'Visit Page', onPress: () => navigation.navigate("Information", {topic: item.topic}), style: 'cancel'}
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
      <View style={CoreStyle.itemContainer}>
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
}