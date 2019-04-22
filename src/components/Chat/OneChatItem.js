import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";

class OneChatItem extends Component {
  render() {
    const profilImgUrl =
      "https://static01.nyt.com/images/2012/08/19/t-magazine/19well-amber/19well-amber-blog480.jpg";
    const moreImgUrl =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Maya_3.svg/600px-Maya_3.svg.png";
    return (
      <View style={styles.container}>
        <View style={styles.rightContainer}>
          <Image
            style={styles.profilImage}
            source={{
              uri: profilImgUrl
            }}
          />
          <View style={styles.messageContainer}>
            <Text style={styles.postText}>{"Amber Heard"}</Text>
            <Text>Last sent message</Text>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={styles.iconImage}
            source={{
              uri: moreImgUrl
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profilImage: {
    borderRadius: 50,
    height: 40,
    width: 40
  },
  iconImage: {
    marginTop: 5,
    height: 35,
    width: 35
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white"
  },
  postText: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "left"
  },
  messageContainer: {
    flexDirection: "column",
    marginLeft: 5
  },
  container: {
    flexDirection: "row",
    width: 100 + "%",
    height: 70,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderColor: "#DCDCDC",
    borderRadius: 15,
    marginTop: 5,
    marginLeft: 1,
    marginRight: 1
  }
});

export default withNavigation(OneChatItem);
