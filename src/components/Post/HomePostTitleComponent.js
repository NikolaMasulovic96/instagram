import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class HomePostTitle extends Component {
  render() {
    const profilImgUrl =
      "https://static01.nyt.com/images/2012/08/19/t-magazine/19well-amber/19well-amber-blog480.jpg";
    const moreImgUrl =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Maya_3.svg/600px-Maya_3.svg.png";
    return (
      <View style={styles.leftSubContainer}>
        <View style={styles.rightContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("profile")}
          >
            <Image
              style={styles.profilImage}
              source={{
                uri: profilImgUrl
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("profile")}
          >
            <Text style={styles.postText}>{"Amber Heard"}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
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
    height: 30,
    width: 30
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
    textAlign: "left",
    marginLeft: 10
  },
  leftSubContainer: {
    flexDirection: "row",
    width: 100 + "%",
    height: 50,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    backgroundColor: "white"
  }
});

export default HomePostTitle;
