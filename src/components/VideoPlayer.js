import React, { Component } from "react";

import {View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default class VideoPlayer extends Component {
            
  render() {
         return (
                <View>
                  <YoutubePlayer
                    videoId={this.props.videoID}
                    height={300}
                    play={false}
                    
                  />
                </View>
              );

  };

};