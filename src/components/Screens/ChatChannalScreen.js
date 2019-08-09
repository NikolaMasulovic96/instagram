import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { withNavigation } from "react-navigation";
import { GiftedChat } from "react-native-gifted-chat";
import { Input } from "react-native-elements";

class ChatChannelScreen extends Component {
  sendMessage = () => {
    this.setState({
      message: GiftedChat.append(
        this.state.messages,
        this.state.incomingMessage
      )
    });
  };

  state = {
    messages: [
      {
        _id: 1,
        text: "My message",
        createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://facebook.github.io/react/img/logo_og.png"
        }
      },
      {
        _id: 2,
        text: "My message",
        createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://facebook.github.io/react/img/logo_og.png"
        }
      }
    ],
    username: "",
    incomingMessage: {
      _id: 3,
      text: "Send you",
      createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
      user: {
        _id: 2,
        name: "Amber Heard",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXGGuS_PrRhQt73sGzdZvnkQrPXvtA-9cjcPxJLhLo8rW-sVA"
      }
    }
  };

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={() => this.sendMessage()}
        user={this.user}
      />
      //   <View style={{ width: 100 + "%", height: 100 + "%" }}>
      //     <TextInput
      //       style={styles.newInput}
      //       value={this.state.newMessage}
      //       onSubmitEditing={this.sendMessage}
      //       placeholder="Message..."
      //       returnKeyType="send"
      //       ref="newMessage"
      //       onChangeText={this.updateMessageState}
      //     />
      //   </View>
    );
  }
}
const styles = StyleSheet.create({
  inputContainer: {
    width: 80 + "%",
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6,
    position: "absolute",
    bottom: 0
  },
  newInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
    padding: 10,
    height: 50
  }
});

export default withNavigation(ChatChannelScreen);
