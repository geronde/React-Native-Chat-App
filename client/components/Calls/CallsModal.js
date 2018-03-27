import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Icon from "react-native-vector-icons/dist/Ionicons";

class CallsModal extends Component {
  static navigationOptions = {
    tabBarVisible: false,
    header: null
  };
  render() {
    return (
      <View style={styles.modalWrapper}>
        <View style={styles.callHeader}>
          <Text
            style={{ color: "#fff", paddingBottom: "10px", fontSize: "1.25em" }}
          >
            {this.props.navigation.state.params.userName}
          </Text>
          <Text style={{ color: "#fff", paddingTop: "10px", fontSize: "1em" }}>
            Calling
          </Text>
        </View>
        <View style={styles.call}>
          <Image
            source={this.props.navigation.state.params.userImg}
            style={styles.userImg}
          />
          <View style={styles.iconContainer}>
            <Icon.Button
              name="ios-call"
              size={40}
              borderRadius={100}
              backgroundColor="red"
              color="#fff"
              style={styles.callButton}
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
        </View>
        <View style={styles.callBar}>
          <Icon.Button
            name="ios-volume-up"
            size={40}
            borderRadius={100}
            color="#fff"
            backgroundColor="transparent"
          />
          <Icon.Button
            name="ios-chatboxes"
            size={40}
            borderRadius={100}
            color="#fff"
            backgroundColor="transparent"
          />
          <Icon.Button
            name="ios-mic-off"
            size={40}
            borderRadius={100}
            color="#fff"
            backgroundColor="transparent"
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  callHeader: {
    backgroundColor: "green",
    padding: "10px"
  },
  call: {
    flex: 1,
    width: "100%",
    position: "relative"
  },
  userImg: {
    flex: 1,
    resizeMode: "contain",
    backgroundColor: "#eee"
  },
  iconContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
    height: "100px",
    bottom: "10px",
    left: "50%",
    marginLeft: "-50px",
    zIndex: 100,
    position: "absolute"
  },
  callBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "30px",
    paddingBottom: "30px",
    backgroundColor: "green"
  }
});
export default CallsModal;
