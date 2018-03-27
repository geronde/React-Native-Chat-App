import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class Messages extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.message}
        onPress={() =>
          this.props.navigation.navigate("Chats", {
            Name: this.props.name,
            image: this.props.image
          })
        }
      >
        <View style={styles.profileImg}>
          <Image
            source={require(`../../data/${this.props.image}`)}
            style={styles.images}
          />
        </View>
        <View style={styles.messageDetail}>
          <View style={styles.text}>
            <Text style={styles.name}> {this.props.name} </Text>
            <Text> {this.props.message} </Text>
          </View>
          <View>
            <Text> {this.props.time} </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  message: {
    flexDirection: "row",
    padding: "20px"
  },
  messageDetail: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    paddingLeft: "10px"
  },
  name: {
    paddingBottom: "5px"
  },
  images: {
    borderRadius: "100%",
    width: "70px",
    height: "70px",
    padding: "10px"
  }
});
export default Messages;
