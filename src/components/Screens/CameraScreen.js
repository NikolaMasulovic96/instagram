import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  Image,
  ImageBackground,
  StyleSheet
} from "react-native";
import { withNavigation } from "react-navigation";

class CameraScreen extends Component {
  render() {
    return (
      <View>
        <Text>camera screen</Text>
      </View>
    );
  }
}

export default withNavigation(CameraScreen);
