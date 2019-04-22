import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from "react-native";
import { withNavigation } from "react-navigation";

class ProfileScreen extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [
        "https://scontent.fbeg7-1.fna.fbcdn.net/v/t1.0-9/12235018_10205971126773567_4411619393943830957_n.jpg?_nc_cat=103&_nc_ht=scontent.fbeg7-1.fna&oh=40c3370ad7f2822d31fde4fec6a86827&oe=5D2C6879",

        "https://scontent.fbeg7-1.fna.fbcdn.net/v/t1.0-9/14695411_10211170800776000_7536260575407011797_n.jpg?_nc_cat=105&_nc_ht=scontent.fbeg7-1.fna&oh=335a81da2b8a1e85672a32b12f26a84e&oe=5D30FF2D",

        "https://scontent.fbeg7-1.fna.fbcdn.net/v/t31.0-8/13308171_10209715063783485_6545424520582553826_o.jpg?_nc_cat=105&_nc_ht=scontent.fbeg7-1.fna&oh=db7a0ab8b81d682a2270ee9c26da817e&oe=5D34E70D",

        "https://scontent.fbeg7-1.fna.fbcdn.net/v/t1.0-9/13315250_10209715059823386_7007455420400893105_n.jpg?_nc_cat=100&_nc_ht=scontent.fbeg7-1.fna&oh=f779a4b2d46fd9edb4531a9fd23a3a44&oe=5D2C5E81",

        "https://scontent.fbeg7-1.fna.fbcdn.net/v/t1.0-9/11205178_10206649285500944_1389800762145967119_n.jpg?_nc_cat=110&_nc_ht=scontent.fbeg7-1.fna&oh=beed0f57ca307c1f81b56239e565e51c&oe=5D379F31",

        "https://scontent.fbeg7-1.fna.fbcdn.net/v/t31.0-8/13308171_10209715063783485_6545424520582553826_o.jpg?_nc_cat=105&_nc_ht=scontent.fbeg7-1.fna&oh=db7a0ab8b81d682a2270ee9c26da817e&oe=5D34E70D",
        "https://scontent.fbeg7-1.fna.fbcdn.net/v/t1.0-9/12235018_10205971126773567_4411619393943830957_n.jpg?_nc_cat=103&_nc_ht=scontent.fbeg7-1.fna&oh=40c3370ad7f2822d31fde4fec6a86827&oe=5D2C6879",

        "https://scontent.fbeg7-1.fna.fbcdn.net/v/t31.0-8/24254703_10213712315535999_5921539623003000510_o.jpg?_nc_cat=100&_nc_ht=scontent.fbeg7-1.fna&oh=f470207b2d8a2e9dfc3206865defe562&oe=5D01FDA7",

        "https://scontent.fbeg7-1.fna.fbcdn.net/v/t31.0-8/13308171_10209715063783485_6545424520582553826_o.jpg?_nc_cat=105&_nc_ht=scontent.fbeg7-1.fna&oh=db7a0ab8b81d682a2270ee9c26da817e&oe=5D34E70D",
        "https://scontent.fbeg7-1.fna.fbcdn.net/v/t1.0-9/12235018_10205971126773567_4411619393943830957_n.jpg?_nc_cat=103&_nc_ht=scontent.fbeg7-1.fna&oh=40c3370ad7f2822d31fde4fec6a86827&oe=5D2C6879",

        "https://scontent.fbeg7-1.fna.fbcdn.net/v/t31.0-8/24254703_10213712315535999_5921539623003000510_o.jpg?_nc_cat=100&_nc_ht=scontent.fbeg7-1.fna&oh=f470207b2d8a2e9dfc3206865defe562&oe=5D01FDA7",

        "https://scontent.fbeg7-1.fna.fbcdn.net/v/t31.0-8/13308171_10209715063783485_6545424520582553826_o.jpg?_nc_cat=105&_nc_ht=scontent.fbeg7-1.fna&oh=db7a0ab8b81d682a2270ee9c26da817e&oe=5D34E70D"
      ]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileFollowContainer}>
          <Image
            style={styles.profileImage}
            source={{
              uri:
                "https://scontent.fbeg7-1.fna.fbcdn.net/v/t1.0-9/39404725_10213562716118556_8571192647505412096_n.jpg?_nc_cat=108&_nc_ht=scontent.fbeg7-1.fna&oh=20df4224d59f81cac8cd24e27d42b597&oe=5D437488"
            }}
          />
          <View style={{ flexDirection: "column", width: 70 + "%", flex: 1 }}>
            <View style={styles.followInfoContainer}>
              <View style={styles.followNumberContainer}>
                <Text style={styles.boldText}>355</Text>
                <Text style={{ color: "blue" }}>posts</Text>
              </View>
              <View style={styles.followNumberContainer}>
                <Text style={styles.boldText}>234</Text>
                <Text style={{ color: "blue" }}>followers</Text>
              </View>
              <View style={styles.followNumberContainer}>
                <Text style={styles.boldText}>609</Text>
                <Text style={{ color: "blue" }}>following</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bioContainer}>
          <Text style={styles.boldText}>Igor Icelic</Text>
          <Text>
            Cao ja sam Igor,najbolji programer na svetu. Inace nemam instagram
            samo ovaj fejk. Volim javu i znam sve o njoj. ps. Zenim se ako
            dobijam nemacko drzavljanstvo.
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "grey",
            marginBottom: 2,
            marginTop: 2
          }}
        />
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: "column", margin: 1 }}>
              <Image
                style={styles.imageThumbnail}
                source={{
                  uri: item
                }}
              />
            </View>
          )}
          //Setting the number of column
          numColumns={3}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 100 + "%",
    height: 100 + "%"
  },
  profileFollowContainer: {
    flexDirection: "row",
    width: 100 + "%"
  },
  profileImage: {
    marginTop: 10,
    marginLeft: 10,
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 1
  },
  followNumberContainer: {
    flexDirection: "column",
    alignItems: "center"
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 15
  },
  followInfoContainer: {
    height: 40,
    marginLeft: 10,
    marginTop: 15,
    flexDirection: "row",
    flex: 1,
    width: 80 + "%",
    justifyContent: "space-between",
    alignSelf: "center"
  },
  followButton: {
    backgroundColor: "black",
    width: 90 + "%"
  },
  bioContainer: {
    marginTop: 10,
    marginLeft: 10,
    flexDirection: "column"
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 110
  }
});

export default withNavigation(ProfileScreen);
