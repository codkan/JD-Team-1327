import React, {Component} from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle.js";
import Crayon from "../components/Crayon";
import check from "../assets/badges/checkmarkBadge.png";

let data = [];
let _s1 = [];
let _s2 = [];
let _s3 = [];
let colors = [];
let r = 0;
let g = 0;
let b = 0;
let hdr = "";

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    goTopic = (_topic) => {
        this.props.navigation.navigate(this.props.navigation.getParam('module'), {topic: _topic});
    }

    goBoard(_level){
        this.props.navigation.navigate("GlobalBoard", {level: _level, s1: _s1, s2: _s2, s3: _s3});
    }

  render () {
    colors = [];
    let _r;
    let _g;
    let _b;
    switch(this.props.navigation.getParam('module')) {
        case "Information":
            hdr = "Informative Content";
            r = 255;
            g = 0;
            b = 10;
            for (let i = 0; i < 6; i++) {
                _r = r;
                _g = (255/6)*i;
                _b = (245/6)*i;
                colors.push("rgb("+_r/2+","+_g/2+","+_b/2+")");
                colors.push("rgb("+_r+","+_g+","+_b+")");
            }
            break;
        case "Media":
            hdr = "Multimedia Module";
            r = 255;
            g = 104;
            b = 0;
            for (let i = 0; i < 6; i++) {
                _r = r;
                _g = 104+((151/6)*i);
                _b = (255/6)*i;
                colors.push("rgb("+_r/2+","+_g/2+","+_b/2+")");
                colors.push("rgb("+_r+","+_g+","+_b+")");
            }
            break;
        case "Quiz":
            hdr = "Review Quizzes";
            r = 0;
            g = 255;
            b = 72;
            for (let i = 0; i < 6; i++) {
                _r = (255/6)*i;
                _g = g;
                _b = (183/6)*i;
                colors.push("rgb("+_r/2+","+_g/2+","+_b/2+")");
                colors.push("rgb("+_r+","+_g+","+_b+")");
            }
            break;
        case "Resources":
            hdr = "Referenced Sources";
            r = 0;
            g = 27;
            b = 255;
            for (let i = 0; i < 6; i++) {
                _r = (108/6)*i;
                _g = (255/6)*i;
                _b = b;
                colors.push("rgb("+_r/2+","+_g/2+","+_b/2+")");
                colors.push("rgb("+_r+","+_g+","+_b+")");
            }
            break;
        case "LocalBoard":
            hdr = "Local Quiz Scores";
            r = 147;
            g = 0;
            b = 255;
            for (let i = 0; i < 6; i++) {
                _r = 147+((108/6)*i);
                _g = (255/6)*i;
                _b = b;
                colors.push("rgb("+_r/2+","+_g/2+","+_b/2+")");
                colors.push("rgb("+_r+","+_g+","+_b+")");
            }
            break;
        default:
            r = 255;
            g = 242;
            b = 0;
            for (let i = 0; i < 3; i++) {
                _r = 255;
                _g = 242+(i*4);
                _b = (255/3)*i;
                colors.push("rgb("+_r/2+","+_g/2+","+_b/2+")");
                colors.push("rgb("+_r+","+_g+","+_b+")");
            }

            let axios = require("axios").default;

            let options = {
              method: 'GET',
              url: 'https://childsafe.us.auth0.com/api/v2/users',
              params: {q: 'email:*', search_engine: 'v3'},
              headers: {authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InhsR0ZUWTZ5a283eHNMWVFnUVdxSSJ9.eyJpc3MiOiJodHRwczovL2NoaWxkc2FmZS51cy5hdXRoMC5jb20vIiwic3ViIjoiTU9hZENodU1LMTFocHBWWG5ibXNMQlJaVEdsVE9mWmhAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vY2hpbGRzYWZlLnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjY4NTQ0NzYxLCJleHAiOjE2NzExMzY3NjEsImF6cCI6Ik1PYWRDaHVNSzExaHBwVlhuYm1zTEJSWlRHbFRPZlpoIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSByZWFkOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl9jdXN0b21fYmxvY2tzIGRlbGV0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZTpjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cmVzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3JlZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGRhdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmhvb2tzIHVwZGF0ZTpob29rcyBkZWxldGU6aG9va3MgY3JlYXRlOmhvb2tzIHJlYWQ6YWN0aW9ucyB1cGRhdGU6YWN0aW9ucyBkZWxldGU6YWN0aW9ucyBjcmVhdGU6YWN0aW9ucyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXRlOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOmluc2lnaHRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6bG9nc191c2VycyByZWFkOnNoaWVsZHMgY3JlYXRlOnNoaWVsZHMgdXBkYXRlOnNoaWVsZHMgZGVsZXRlOnNoaWVsZHMgcmVhZDphbm9tYWx5X2Jsb2NrcyBkZWxldGU6YW5vbWFseV9ibG9ja3MgdXBkYXRlOnRyaWdnZXJzIHJlYWQ6dHJpZ2dlcnMgcmVhZDpncmFudHMgZGVsZXRlOmdyYW50cyByZWFkOmd1YXJkaWFuX2ZhY3RvcnMgdXBkYXRlOmd1YXJkaWFuX2ZhY3RvcnMgcmVhZDpndWFyZGlhbl9lbnJvbGxtZW50cyBkZWxldGU6Z3VhcmRpYW5fZW5yb2xsbWVudHMgY3JlYXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRfdGlja2V0cyByZWFkOnVzZXJfaWRwX3Rva2VucyBjcmVhdGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiBkZWxldGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiByZWFkOmN1c3RvbV9kb21haW5zIGRlbGV0ZTpjdXN0b21fZG9tYWlucyBjcmVhdGU6Y3VzdG9tX2RvbWFpbnMgdXBkYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMgcmVhZDpwcm9tcHRzIHVwZGF0ZTpwcm9tcHRzIHJlYWQ6YnJhbmRpbmcgdXBkYXRlOmJyYW5kaW5nIGRlbGV0ZTpicmFuZGluZyByZWFkOmxvZ19zdHJlYW1zIGNyZWF0ZTpsb2dfc3RyZWFtcyBkZWxldGU6bG9nX3N0cmVhbXMgdXBkYXRlOmxvZ19zdHJlYW1zIGNyZWF0ZTpzaWduaW5nX2tleXMgcmVhZDpzaWduaW5nX2tleXMgdXBkYXRlOnNpZ25pbmdfa2V5cyByZWFkOmxpbWl0cyB1cGRhdGU6bGltaXRzIGNyZWF0ZTpyb2xlX21lbWJlcnMgcmVhZDpyb2xlX21lbWJlcnMgZGVsZXRlOnJvbGVfbWVtYmVycyByZWFkOmVudGl0bGVtZW50cyByZWFkOmF0dGFja19wcm90ZWN0aW9uIHVwZGF0ZTphdHRhY2tfcHJvdGVjdGlvbiByZWFkOm9yZ2FuaXphdGlvbnNfc3VtbWFyeSBjcmVhdGU6YWN0aW9uc19sb2dfc2Vzc2lvbnMgcmVhZDpvcmdhbml6YXRpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVycyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGRlbGV0ZTpvcmdhbml6YXRpb25fbWVtYmVycyBjcmVhdGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgY3JlYXRlOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.AhJB3Z5DEO_rjTIJgr4CHcSpRXZ5hGNd6ug-fr2l5LgfgVZ1Go1Fj_Cdl2hXN6EZS3D8O5k5D4XMPPZfFGB1BOcBBPBwdPmSd67N84fsKHD4vppb0UvonYUtwEvonGM1hnQSU2rlVKH522Whp-Aj2fTUQYNjd5DmH0pQXpzB3xqEL6j9nRCSdgqS4oUOzuhUknC9sEdkobBG7RZ88CX2OV9AmJDesUow2eOcxKH5D0KVHaRwRNIHerAsQvotSIPfK0T7b1VPFZNYLK8hvRvbcU4Luzxp-jrjj4GEex9eVN86mc3zgaqSUyvDzYVUo7ckEOFr2a9kOJHieGN8mBJZUw'}
            };

            axios.request(options).then(function (response) {
              data = response.data.sort((a,b)=> b.last_login < a.last_login);
              for (let value of data) {
                  if (value.user_metadata.score1 != "0") {
                      _s1.push([value.nickname, value.user_metadata.score1]);
                  }
                  if (value.user_metadata.score2 != "0") {
                      _s2.push([value.nickname, value.user_metadata.score2]);
                  }
                  if (value.user_metadata.score3 != "0") {
                      _s3.push([value.nickname, value.user_metadata.score3]);
                  }
              }
            }).catch(function (error) {
              console.error(error);
            });

              return (
                <ImageBackground source={global.bg} style={CoreStyle.image}>

                <View style={CoreStyle.tmenuContainer}>
                <Text style={CoreStyle.title}>Global Game Leaderboard</Text>

                    <Crayon text={"Living Room"} onPress={() => this.goBoard("Level 1")} color1={colors[4]} color2={colors[5]}/>
                    <Crayon text={"Kitchen"} onPress={() => this.goBoard("Level 2")} color1={colors[2]} color2={colors[3]}/>
                    <Crayon text={"Backyard"} onPress={() => this.goBoard("Level 3")} color1={colors[0]} color2={colors[1]}/>

                <Image style={CoreStyle.headimg} source={check}/>
                </View>

                <Navbar navigation={this.props.navigation}/>

              </ImageBackground>
              );
    }
      return (
        <ImageBackground source={global.bg} style={CoreStyle.image}>

        <Text style={CoreStyle.title3}>{hdr}</Text>

        <View style={CoreStyle.menuContainer}>

            <Crayon text={"Falls"} onPress={() => this.goTopic("Falls")} color1={colors[10]} color2={colors[11]}/>
            <Crayon text={"Burns"} onPress={() => this.goTopic("Burns")} color1={colors[8]} color2={colors[9]}/>
            <Crayon text={"Poisons"} onPress={() => this.goTopic("Poisonings")} color1={colors[6]} color2={colors[7]}/>
            <Crayon text={"Drownings"} onPress={() => this.goTopic("Drownings")} color1={colors[4]} color2={colors[5]}/>
            <Crayon text={"Vehicles"} onPress={() => this.goTopic("Car Safety")} color1={colors[2]} color2={colors[3]}/>
            <Crayon text={"Parents"} onPress={() => this.goTopic("Parental Health")} color1={colors[0]} color2={colors[1]}/>

        </View>

        <Navbar navigation={this.props.navigation}/>

      </ImageBackground>
      );
  }
}


