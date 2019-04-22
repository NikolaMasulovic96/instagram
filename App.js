import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import InstaApp from "./src/InstaApp";
import {
  createStackNavigator,
  createAppContainer,
  TabNavigator,
  createBottomTabNavigator
} from "react-navigation";
import FeedScreen from "./src/components/Screens/FeedScreen";
import CameraScreen from "./src/components/Screens/CameraScreen";
import ProfileScreen from "./src/components/Screens/ProfileScreen";
import RegisterScreen from "./src/components/Screens/RegisterScreen";
import ChatScreen from "./src/components/Screens/ChatScreen";
import OneSinglePhoto from "./src/components/profile/OneSinglePhoto";

class App extends Component {
  static navigationOptions = {
    title: "App",
    headerMode: "screen",
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <InstaApp />
      </View>
    );
  }
}

// const Tabs = createBottomTabNavigator({
//   feed: FeedScreen,
//   camera: CameraScreen,
//   profile: ProfileScreen
// });

const AppNavigator = createStackNavigator(
  {
    Home: { screen: App },
    feed: { screen: FeedScreen },
    register: { screen: RegisterScreen },
    camera: { screen: CameraScreen },
    profile: { screen: ProfileScreen },
    chat: { screen: ChatScreen },
    oneSinglePhoto: { screen: OneSinglePhoto }
  },
  {
    mode: "modal",
    headerMode: "screen"
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  }
});

export default createAppContainer(AppNavigator);
