import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import HomePostTitle from "../Post/HomePostTitleComponent";
import CommandLine from "../Post/CommandLineComponent";
import CommentComponent from "../Post/CommentComponent";
import ProfileServie from "../services/ProfileService";

class OneSingleComponent extends Component {
  state = {
    url: ""
  };

  componentWillMount() {
    var url = ProfileServie.getCurrentImage();
    console.warn(url);
    this.setState({ url: url });
  }

  render() {
    return (
      <View>
        <HomePostTitle />
        <Image
          style={{ width: 100 + "%", height: 350 }}
          source={{
            uri:
              "https://cdn1.thr.com/sites/default/files/imagecache/NFE_portrait/2017/05/aquaman_mera.jpg"
          }}
        />
        <CommandLine />
        <CommentComponent />
      </View>
    );
  }
}

export default OneSingleComponent;
