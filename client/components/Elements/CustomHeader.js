import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";

import Icon from "react-native-vector-icons/dist/Ionicons";

class CustomHeader extends Component {
  render() {
    console.log(this.props)
    return (
      <View style={styles.chatHeader}>
        <TouchableOpacity
          style={styles.goBackStyle}
          onPress={() =>
            this.props.navigation.dispatch(NavigationActions.back())
          }
        >
          <Icon
            name="ios-arrow-back"
            size={45}
            color="#fff"
            styles={styles.arrow}
          />
          <View style={styles.imageContainer}>
            <Image
              source={require(`../../data/${this.props.imgUri}`)}
              style={styles.image}
            />
          </View>
          <Text style={styles.name}>{this.props.name}</Text>
        </TouchableOpacity>
        <View style={styles.call}>
          <Icon.Button
            name="ios-call"
            size={32}
            style={{ marginRight: "0px" }}
            onPress={() =>
              this.props.navigation.navigate("CallModal", {
                userName: this.props.name,
                userImg: this.props.imgUri
              })
            }
            backgroundColor="transparent"
          />
          <Icon.Button
            name="ios-videocam"
            size={32}
            style={{ marginRight: "15px" }}
            onPress={() =>
              this.props.navigation.navigate("CallModal", {
                userName: this.props.name,
                userImg: this.props.imgUri
              })
            }
            backgroundColor="transparent"
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  chatHeader: {
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  arrow: {
    padding: "10px"
  },
  image: {
    borderRadius: "100%",
    width: "55px",
    height: "55px",
    padding: "10px",
    marginLeft: "15px"
  },
  goBackStyle: {
    flexDirection: "row",
    alignItems: "center",
    padding: "10px",
    width: "65%"
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#fff",
    paddingLeft: "20px"
  },
  call: {
    flexDirection: "row",
  }
});

export default CustomHeader;
