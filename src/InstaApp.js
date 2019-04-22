import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import PostComponent from "../src/components/Post/PostComponent";
import Header from "./components/Post/HeaderComponent";
import FeedScreen from "../src/components/Screens/FeedScreen";
import LoginScreen from "../src/components/Screens/LoginScreen";

class InstaApp extends Component {
  _renderPost({ item }) {
    return <PostComponent />;
  }
  _returnKey(item) {
    return item.toString();
  }
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100 + "%",
    width: 100 + "%"
  }
});

export default InstaApp;
