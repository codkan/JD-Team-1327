import React, {Component} from "react";
import axios from "axios";
import { ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Background from "../assets/app/bg.png";
import BackButton from "../components/buttons/BackButton";
import MainButton from "../components/buttons/MainButton";
import TopicButton from "../components/buttons/TopicButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";

var last;
var next;
var data = [];

export default class GlobalBoard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            scores: []
        };
        this.getScores();
    };

  async getScores() {

    var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: 'https://childsafe.us.auth0.com/api/v2/users',
      params: {q: 'email:*', search_engine: 'v3'},
      headers: {authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InhsR0ZUWTZ5a283eHNMWVFnUVdxSSJ9.eyJpc3MiOiJodHRwczovL2NoaWxkc2FmZS51cy5hdXRoMC5jb20vIiwic3ViIjoiTU9hZENodU1LMTFocHBWWG5ibXNMQlJaVEdsVE9mWmhAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vY2hpbGRzYWZlLnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjY1Nzc3NzM0LCJleHAiOjE2NjgzNjk3MzQsImF6cCI6Ik1PYWRDaHVNSzExaHBwVlhuYm1zTEJSWlRHbFRPZlpoIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSByZWFkOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl9jdXN0b21fYmxvY2tzIGRlbGV0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZTpjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cmVzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3JlZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGRhdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmhvb2tzIHVwZGF0ZTpob29rcyBkZWxldGU6aG9va3MgY3JlYXRlOmhvb2tzIHJlYWQ6YWN0aW9ucyB1cGRhdGU6YWN0aW9ucyBkZWxldGU6YWN0aW9ucyBjcmVhdGU6YWN0aW9ucyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXRlOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOmluc2lnaHRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6bG9nc191c2VycyByZWFkOnNoaWVsZHMgY3JlYXRlOnNoaWVsZHMgdXBkYXRlOnNoaWVsZHMgZGVsZXRlOnNoaWVsZHMgcmVhZDphbm9tYWx5X2Jsb2NrcyBkZWxldGU6YW5vbWFseV9ibG9ja3MgdXBkYXRlOnRyaWdnZXJzIHJlYWQ6dHJpZ2dlcnMgcmVhZDpncmFudHMgZGVsZXRlOmdyYW50cyByZWFkOmd1YXJkaWFuX2ZhY3RvcnMgdXBkYXRlOmd1YXJkaWFuX2ZhY3RvcnMgcmVhZDpndWFyZGlhbl9lbnJvbGxtZW50cyBkZWxldGU6Z3VhcmRpYW5fZW5yb2xsbWVudHMgY3JlYXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRfdGlja2V0cyByZWFkOnVzZXJfaWRwX3Rva2VucyBjcmVhdGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiBkZWxldGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiByZWFkOmN1c3RvbV9kb21haW5zIGRlbGV0ZTpjdXN0b21fZG9tYWlucyBjcmVhdGU6Y3VzdG9tX2RvbWFpbnMgdXBkYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMgcmVhZDpwcm9tcHRzIHVwZGF0ZTpwcm9tcHRzIHJlYWQ6YnJhbmRpbmcgdXBkYXRlOmJyYW5kaW5nIGRlbGV0ZTpicmFuZGluZyByZWFkOmxvZ19zdHJlYW1zIGNyZWF0ZTpsb2dfc3RyZWFtcyBkZWxldGU6bG9nX3N0cmVhbXMgdXBkYXRlOmxvZ19zdHJlYW1zIGNyZWF0ZTpzaWduaW5nX2tleXMgcmVhZDpzaWduaW5nX2tleXMgdXBkYXRlOnNpZ25pbmdfa2V5cyByZWFkOmxpbWl0cyB1cGRhdGU6bGltaXRzIGNyZWF0ZTpyb2xlX21lbWJlcnMgcmVhZDpyb2xlX21lbWJlcnMgZGVsZXRlOnJvbGVfbWVtYmVycyByZWFkOmVudGl0bGVtZW50cyByZWFkOmF0dGFja19wcm90ZWN0aW9uIHVwZGF0ZTphdHRhY2tfcHJvdGVjdGlvbiByZWFkOm9yZ2FuaXphdGlvbnNfc3VtbWFyeSBjcmVhdGU6YWN0aW9uc19sb2dfc2Vzc2lvbnMgcmVhZDpvcmdhbml6YXRpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVycyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGRlbGV0ZTpvcmdhbml6YXRpb25fbWVtYmVycyBjcmVhdGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgY3JlYXRlOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.vIaT7T6v2f8lXRl2G06pPCZ15_JMxEHxBvt_1HwQJGH6ypx1Oz_AGqq_hd-AsaevuI3-G-e94yxCvBUUZUT9pcrm9XlYVvkbULJhVfcgr4bjyP-9bqtbQOKcq8zDNMPCmOk8a_SWA6l_m0WY8b2X-eHObvUNzwSBfz_6O0dKg2338hHT8eFzeFGmHiNPmFKhSKttMNkxOFB2U6FXsQLJHxq0oHhOYYDOpmHL94-AK-1e84_skCiyi9kT1NaOQSIWNvg1R6rJWMZzWisWFnPZLx_MQH8DVoaIr0MSUZlVEDV8DdMtnW0UXmPD38ltiRzK8cWY0c6rreezhN_QbFQ-yw'}
    };

    axios.request(options).then(function (response) {
      data = response.data.sort((a,b)=> b.last_login < a.last_login);
    }).catch(function (error) {
      console.error(error);
    });

    var s = [];

    switch(this.props.navigation.getParam('level')) {
        case "Level 1":
            last = "TMenu";
            next = "Level 2";
            for (var i = 0; i < data.length; i++) {
                if (data[i].user_metadata.score1 != "0") {
                    s.push([data[i].nickname, data[i].user_metadata.score1]);
                }
            }
            break;
        case "Level 2":
            last = "Level 1";
            next = "Level 3";
            for (var i = 0; i < data.length; i++) {
                if (data[i].user_metadata.score2 != "0") {
                    s.push([data[i].nickname, data[i].user_metadata.score2]);
                }
            }
            break;
        case "Level 3":
            last = "Level 2";
            next = "Level 3";
            for (var i = 0; i < data.length; i++) {
                if (data[i].user_metadata.score3 != "0") {
                    s.push([data[i].nickname, data[i].user_metadata.score3]);
                }
            }
            break;
        default:
            break;
    };
    var sorted = s.sort((a,b)=> b[1] < a[1]);
    this.state = {
        scores: sorted
    };
    this.setState = ({
        scores: sorted
    });
  }

    ItemView = ({ item }) => {
        return (
          // Flat List Item
          <View style={CoreStyle.board}>
            <Text style={CoreStyle.entry}>{item[0]}</Text>
            <Text style={CoreStyle.entry}>{item[1]}</Text>
          </View>
        );
    };

    ItemSeparatorView = () => {
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

  handleBackNav = () => {
    if (this.props.navigation.getParam("level") != "Level 1") {
        this.props.navigation.navigate("GlobalBoard", {level: last});
        this.getScores();
    } else {
        this.goMenu();
    }
  }

  handleNextNav = () => {
    if (this.props.navigation.getParam("level") != "Level 3") {
        this.props.navigation.navigate("GlobalBoard", {level: next});
        this.getScores();
    } else {
        this.props.navigation.navigate("GlobalBoard", {level: "Level 3"})
    }
  }

  goMenu = () => {
    this.props.navigation.navigate("Menu", {module: "GlobalBoard"});
  };

  render (){
    this.getScores();
    switch(this.props.navigation.getParam('level')) {
        case "Level 1":
            last = "TMenu";
            next = "Level 2";
            break;
        case "Level 2":
            last = "Level 1";
            next = "Level 3";
            break;
        case "Level 3":
            last = "Level 2";
            next = "Level 3";
            break;
        default:
            break;
    };

    return (
    <ImageBackground source={global.bg} style={CoreStyle.image}>

    <View style={CoreStyle.topnavbuttons}>
        <BackButton
            text="<"
            txtColor={global.text}
            onPress={this.handleBackNav}
        ></BackButton>
        <TopicButton
              text="Back to Topics"
              onPress={this.goMenu}
              txtColor={global.text}
        ></TopicButton>
        <BackButton
            text=">"
            txtColor={global.text}
            onPress={this.handleNextNav}
        ></BackButton>
    </View>

    <Text allowFontScaling={true} style={CoreStyle.title}>{this.props.navigation.getParam("level") + " Times"}: </Text>

    <SafeAreaView>
        <FlatList style={CoreStyle.leaderboard}
            data={this.state.scores}
            renderItem={this.ItemView}
            ItemSeparatorComponent={this.ItemSeparatorView}
            keyExtractor={(item) => item}
        />
    </SafeAreaView>

    <View style={CoreStyle.center}>
        <MainButton
              text={"Go to Game"}
              onPress={() => this.props.navigation.navigate("Home")}
              txtColor={global.text}
        ></MainButton>
    </View>

    <View style = {CoreStyle.pushdown}>
    <Navbar navigation={this.props.navigation}/>
    </View>

    </ImageBackground>
    );
  };
}