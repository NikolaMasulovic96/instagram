import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import HomePostTitle from "./HomePostTitleComponent";
import CommandLine from "./CommandLineComponent";
import CommentComponent from "./CommentComponent";

class PostComponent extends Component {
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

export default PostComponent;
