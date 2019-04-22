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
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class LoginScreen extends Component {
  // static navigationOptions = {
  //   title: "Home"
  // };

  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlvQBCMmuA_2id2MewNBzhy2eafP2b8ByIpXsaB3aOOgxYA3D"
        }}
        style={styles.backgroundImage}
      >
        <View style={styles.loginContainer}>
          <Input
            containerStyle={styles.inputContainer}
            placeholder="USERNAME"
            leftIcon={<Icon active name="user" size={24} color="black" />}
          />
          <Input
            containerStyle={styles.inputContainer}
            placeholder="PASSWORD"
            leftIcon={<Icon active name="lock" size={24} color="black" />}
          />
          <Button
            onPress={() => this.props.navigation.navigate("feed")}
            title="Login"
            color="#FAEBD7"
          />
          <Text
            style={styles.registerText}
            onPress={() => this.props.navigation.navigate("register")}
          >
            register
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    width: 100 + "%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage: {
    width: 100 + "%",
    height: 100 + "%",
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: 80 + "%",
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6
  },
  registerText: {
    color: "#6495ED",
    textDecorationLine: "underline"
  }
});

export default withNavigation(LoginScreen);
