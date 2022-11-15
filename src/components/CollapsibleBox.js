import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Collapsible from "react-native-collapsible";
import { Entypo } from '@expo/vector-icons'; 

export default class CollapsibleBox extends Component{
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
        if (this.state.collapsed) {
            return <Entypo name="chevron-down" size={24} color={global.text} />;
        }
        else {
            return <Entypo name="chevron-up" size={24} color={global.text} />;
        }
    }

    render() {
    return (
        <View>
            <TouchableOpacity onPress={this.toggleExpanded}
                accessibilityLabel={"Dropdown"} accessibilityRole={"text"} accessibilityHint={"Collapsible Box"}>
                <View style={{display: "flex", flexDirection: "row", marginBottom: 15, marginRight: 10}}>
                    <View style={{flex: 6}}>
                        <Text style={this.props.headerstyle}>{this.props.header}</Text>
                        </View>
                    {this.renderArrow()}
                </View>

            </TouchableOpacity>



            <Collapsible collapsed={this.state.collapsed}>
                {this.props.children}
            </Collapsible>
        </View>
    );}
}