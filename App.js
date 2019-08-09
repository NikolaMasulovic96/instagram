import React from "react";
import { Button, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import FeedScreen from "./src/components/Screens/FeedScreen";
import CameraScreen from "./src/components/Screens/CameraScreen";
import ProfileScreen from "./src/components/Screens/ProfileScreen";
import RegisterScreen from "./src/components/Screens/RegisterScreen";
import ChatScreen from "./src/components/Screens/ChatScreen";
import OneSinglePhoto from "./src/components/profile/OneSinglePhoto";

const HomeStack = createStackNavigator(
  {
    Home: { screen: FeedScreen },
    profile: { screen: ProfileScreen },
    chat: { screen: ChatScreen }
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: "#42f44b"
      },
      headerTintColor: "#FFFFFF",
      title: "Home"
      //Header title
    },
    tabBarOptions: {
      style: {
        backgroundColor: "blue"
      }
    }
  }
);
const SettingsStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Settings: { screen: CameraScreen }
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: "#42f44b"
      },
      headerTintColor: "#FFFFFF",
      title: "Settings"
      //Header title
    }
  }
);

const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Settings") {
          iconName = `ios-checkmark-circle${focused ? "" : "-outline"}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#42f44b",
      inactiveTintColor: "black",
      style: {
        backgroundColor: "red"
      }
    }
  }
);
export default createAppContainer(App);
// const styles = StyleSheet.create({
//   tab: {
//     backgroundColor: 'linear-gradient(to top, #003300 46%, #669999 100%)';
// });
