import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import ViewMoreText from "react-native-view-more-text";
import { Input } from "react-native-elements";

class CommentComponent extends Component {
  renderViewMore(onPress) {
    return (
      <Text onPress={onPress} style={{ color: "#0000FF" }}>
        ...more
      </Text>
    );
  }
  renderViewLess(onPress) {
    return (
      <Text onPress={onPress} style={{ color: "#0000FF" }}>
        hide
      </Text>
    );
  }

  showCommentInput() {
    this.setState({ showInput: false });
  }

  constructor() {
    super();
    this.state = {
      longText:
        "An actress who first fell into her screen niche playing beautiful and voluptuous teenage girlfriends, Amber Heard was blessed with a visage that seemed tailor-made for modeling, and indeed she began her ascent to fame on that route. The Austin, TX, native reportedly dropped out of high school a year early and made a beeline for Los Angeles, her eyes fixed on glossies and catwalks. ",
      showInput: true
    };
  }
  render() {
    return (
      <View style={styles.commentContainer}>
        <Text style={styles.profileName}>Amber Heard</Text>
        <ViewMoreText
          numberOfLines={3}
          renderViewMore={this.renderViewMore}
          renderViewLess={this.renderViewLess}
        >
          <Text>{this.state.longText}</Text>
        </ViewMoreText>
        <View style={styles.addCommentContainer}>
          <Image
            style={styles.commandImg}
            source={{
              uri:
                "https://scontent.fbeg7-1.fna.fbcdn.net/v/t1.0-9/38485160_2365473490160100_2218457780702937088_n.jpg?_nc_cat=100&_nc_ht=scontent.fbeg7-1.fna&oh=f52dd2d967bb133e6534076ca6026863&oe=5D46AC00"
            }}
          />
          {this.state.showInput && (
            <TouchableOpacity onPress={() => this.showCommentInput()}>
              <Text style={styles.addCommentText}>Add a comment...</Text>
            </TouchableOpacity>
          )}
          {!this.state.showInput && (
            <Input
              containerStyle={styles.inputContainer}
              placeholder="Write a comment..."
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profileName: {
    fontWeight: "bold",
    fontSize: 15
  },
  commentContainer: {
    paddingLeft: 8,
    backgroundColor: "white",
    paddingBottom: 5,
    marginBottom: 2
  },
  commandImg: {
    height: 20,
    width: 20,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 1
  },
  addCommentContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 30,
    width: 100 + "%"
  },
  addCommentText: {
    marginLeft: 5,
    color: "grey"
  },
  inputContainer: {
    marginLeft: 5,
    width: 90 + "%",
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
    borderRadius: 20,
    borderColor: "white"
  }
});

export default CommentComponent;
