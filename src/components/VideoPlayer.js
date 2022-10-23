import React, { Component } from "react";
import {View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default class VideoPlayer extends Component {
  render() {
   return (
          <View accessibilityLabel={"Video"} accessibilityRole={"image"} accessibilityHint={"Youtube Player"}>
            <YoutubePlayer
              videoId={this.props.videoID}
              height={300}
              play={false}
              webViewStyle={{opacity: 0.99}}
            />
          </View>
        );
  }
}