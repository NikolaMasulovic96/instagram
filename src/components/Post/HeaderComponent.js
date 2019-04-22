import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { withNavigation } from "react-navigation";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      cameraImg:
        "https://cdn3.iconfinder.com/data/icons/gradient-general-pack/512/camera-01-512.png",
      messageImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJQ3bCcoSp9CCdjHt80O8qNVYSPFsKTOdWD3X3OFwQguWYsE0"
    };
  }

  render() {
    return (
      <View>
        <View style={styles.NavHeader}>
          <View style={styles.titleCameraImage}>
            <Icon
              active
              name="camera-retro"
              onPress={() => this.props.navigation.navigate("camera")}
              size={29}
              color="black"
            />
          </View>
          <Text style={styles.title}>Insta</Text>
          <View style={styles.titleCameraImage}>
            <Icon
              active
              name="comment"
              onPress={() => this.props.navigation.navigate("chat")}
              size={29}
              color="black"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  NavHeader: {
    //flex: 1,
    width: 100 + "%",
    height: 40,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderBottomColor: "#DCDCDC",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "white"
  },
  title: {
    // fontFamily: "vincHand", dodati posle fontfamily
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center"
  },
  titleCameraImage: {
    height: 39,
    width: 40,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default withNavigation(Header);
