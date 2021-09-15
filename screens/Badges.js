/*
 * Badges Screen
 */
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Background from "../assets/badgeScreen.png";
import Constants from "../Constants";
import MenuButton from "../components/MenuButton";
import { get } from "../Db"

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image
        source={item.photo}
        style={{ height: 100, width: 100 }}
      />
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text style={{ fontWeight: "bold", color: "black", fontSize: 22 }}>{item.name}</Text>
        <Text style={{color: "black", paddingTop: Constants.MAX_HEIGHT*.02, fontSize:20}}>{item.position}</Text>
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></TouchableOpacity>
    </View>
  );
}
//Nav callbacks
const goHome = () => {
  navigation.pop();
};

export default class Badges extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  handleReturnToHome = () => {
    this.props.navigation.pop();
  };


  badges = [
    {
      name: "Gold Star Level 1",
      position: "Finished level one in record time!",
      ID: "gold1",
      photo: require("../assets/badges/goldBadge.png"),
    },
    {
      name: "Silver Star Level 1",
      position: "Finished level one in decent time!",
      ID: "silver1",
      photo: require("../assets/badges/silverBadge.png"),
    },
    {
      name: "Bronze Star Level 1",
      position: "Finished level one!",
      ID: "bronze1",
      photo: require("../assets/badges/bronzeBadge.png"),
    },
    {
      name: "Gold Star Level 2",
      position: "Finished level two in record time!",
      ID: "gold2",
      photo: require("../assets/badges/goldBadge.png"),
    },
    {
      name: "Silver Star Level 2",
      position: "Finished level two in decent time!",
      ID: "silver2",
      photo: require("../assets/badges/silverBadge.png"),
    },
    {
      name: "Bronze Star Level 2",
      position: "Finished level two!",
      ID: "bronze2",
      photo: require("../assets/badges/bronzeBadge.png"),
    },
    {
      name: "Gold Star Level 3",
      position: "Finished level three in record time!",
      ID: "gold3",
      photo: require("../assets/badges/goldBadge.png"),
    },
    {
      name: "Silver Star Level 3",
      position: "Finished level three in decent time!",
      ID: "silver3",
      photo: require("../assets/badges/silverBadge.png"),
    },
    {
      name: "Bronze Star Level 3",
      position: "Finished level three!",
      ID: "bronze3",
      photo: require("../assets/badges/bronzeBadge.png"),
    },
    {
      name: "Baby Steps Badge",
      position: "Found the first child safety note!",
      ID: "mark",
      photo: require("../assets/badges/checkmarkBadge.png"),
    },
    {
      name: "Clock Badge",
      position: "Finished in record time!",
      ID: "clock",
      photo: require("../assets/badges/clockBadge.png"),
    },
    {
      name: "Coffee Cup Badge",
      position: "Found the coffee cup with child safety information!",
      ID: "coffee",
      photo: require("../assets/badges/coffeecupBadge.png"),
    },
    {
      name: "Heart Badge",
      position: "You pet the good doggo!",
      ID: "heart",
      photo: require("../assets/badges/heartBadge.png"),
    },
  ];
  async componentDidMount() {
    this.badges.forEach( async element => {
      let earned = await get(element.ID) 
      if (earned === 'true') {
        this.setState(state => {
          const data = state.data.concat(element);
          return {
            data
          }
        })
      }
    });
  }
  render() {
    return (
      <ImageBackground source={Background} style={styles.image}>
        <View style={styles.contentArea}>
          <FlatList
            style={{ flex: 1 }}
            data={this.state.data}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.ID}
          />
        </View>
        <MenuButton txtColor="black" text="GO BACK" onPress={this.handleReturnToHome}></MenuButton>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    marginTop: 60,
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "transparent",
    width: "80%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    paddingHorizontal: Constants.MAX_HEIGHT * 0.1,
    paddingTop: Constants.MAX_HEIGHT * 0.24,
  },
  contentArea: {
    backgroundColor: "transparent",
    height: (Constants.MAX_HEIGHT * 7) / 10,
  },
});
