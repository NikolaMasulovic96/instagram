import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

class CommandLine extends Component {
  constructor() {
    super();
    this.state = {
      heartImg:
        "https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/heart-outline-512.png",
      commentImg:
        "https://cdn4.iconfinder.com/data/icons/vectory-basic/40/comment_2-512.png",
      shareImg:
        "https://cdn1.iconfinder.com/data/icons/media-icons-23/100/share-512.png",
      saveImg:
        "https://cdn4.iconfinder.com/data/icons/finite-application/16/bookmark-512.png"
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.commandContainer}>
          <View style={styles.leftSubCommandContainer}>
            <Image
              style={styles.commandImg}
              source={{
                uri: this.state.heartImg
              }}
            />
            <Image
              style={styles.commandImg}
              source={{
                uri: this.state.commentImg
              }}
            />
            <Image
              style={styles.commandImg}
              source={{
                uri: this.state.shareImg
              }}
            />
          </View>
          <View>
            <Image
              style={styles.saveImgStyle}
              source={{
                uri: this.state.saveImg
              }}
            />
          </View>
        </View>
        <Text style={styles.likes}>8,645 likes</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  commandContainer: {
    flexDirection: "row",
    height: 30,
    width: 100 + "%",
    justifyContent: "space-between",
    backgroundColor: "white"
    // borderBottomColor: "black",
    // borderBottomWidth: 1,
    // borderBottomColor: "#DCDCDC"
  },
  mainContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderBottomColor: "#DCDCDC",
    backgroundColor: "white"
  },
  commandImg: {
    height: 30,
    width: 30
  },
  saveImgStyle: {
    height: 30,
    width: 30,
    paddingRight: 5
  },
  leftSubCommandContainer: {
    flexDirection: "row",
    height: 30,
    width: 30 + "%",
    paddingLeft: 10,
    justifyContent: "space-between",
    paddingBottom: 5,
    backgroundColor: "white"
  },
  likes: {
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 13,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "white"
  }
});

export default CommandLine;
