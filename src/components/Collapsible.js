import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import Collapsible from "react-native-collapsible";
import { Entypo } from '@expo/vector-icons'; 

export default class Collapsible extends Component{
    constructor(props){
        super(props);
        this.state = {
            collapsed: true
        }
    }


    toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
      };

    renderArrow = () => {
        if (this.state.collapsed == true) {
            return <Entypo name="chevron-left" size={24} color="black" />;
        }
        else {
            return <Entypo name="chevron-down" size={24} color="black" />; 
        }
    }

    render() {
    return (
        <View>
            <TouchableOpacity onPress={this.toggleExpanded}>
                <View style={styles.header}>
                    <Text style={this.props.headerstyle}>{this.props.header}</Text>
                    {this.renderArrow()}
                </View>

            </TouchableOpacity>



            <Collapsible collapsed={this.state.collapsed}>
                {this.props.children}
            </Collapsible>
        </View>
    );}
}

  const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row"
        
    },
    content: {
        
    }
  });