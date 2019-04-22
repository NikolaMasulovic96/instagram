import React, { Component } from "react";
import { View, FlatList, Button, Text, Image, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Header from "../Post/HeaderComponent";
import PostComponent from "../Post/PostComponent";
import { HeaderBackButton, NavigationActions } from "react-navigation";
import { withNavigation } from "react-navigation";
import navigation from "react-navigation";

class FeedScreen extends Component {
  static navigationOptions = {
    title: "feed",
    headerMode: "screen",
    header: <Header />
  };

  onPressLearnMore() {
    navigate("home");
    //this.props.navigation.navigate("Home");
  }
  _renderPost({ item }) {
    return <PostComponent />;
  }
  _returnKey(item) {
    return item.toString();
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Header /> */}
        <FlatList
          data={[
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20
          ]}
          keyExtractor={this._returnKey}
          renderItem={this._renderPost}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    height: 100 + "%",
    width: 100 + "%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default withNavigation(FeedScreen);
