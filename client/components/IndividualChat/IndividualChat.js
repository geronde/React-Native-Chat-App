import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";

import Icon from "react-native-vector-icons/dist/Ionicons";

import CustomHeader from "../Elements/CustomHeader";

class IndividualChat extends Component {
  static navigationOptions = {
    tabBarVisible: false
  };
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  render() {
    return (
      <View style={styles.chat}>
        <View style={styles.chatMessage} />
        <View style={styles.chatReplyBox}>
          <Icon name="ios-happy-outline" size={32} />
          <TextInput
            style={styles.inputBox}
            placeholder="Type A Message"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <Icon
            name="ios-mic-outline"
            size={32}
            color="#fff"
            style={styles.micStyle}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  chat: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#eee"
  },
  chatReplyBox: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: "5px",
    position: "absolute",
    bottom: "0",
    zIndex: 1000
  },
  inputBox: {
    width: "80%",
    padding: "5px",
    borderWidth: "1px",
    borderColor: "tomato",
    borderRadius: "5px",
    marginLeft: "5px",
    marginRight: "5px"
  },
  micStyle: {
    backgroundColor: "green",
    paddingLeft: "10px",
    paddingRight: "10px",
    borderRadius: "100%"
  }
});
export default IndividualChat;
