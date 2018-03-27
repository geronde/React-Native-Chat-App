import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Icon from "react-native-vector-icons/dist/Ionicons";

class Calls extends Component {
  render() {
    return (
      <View style={styles.calls}>
        <View style={styles.profileImg}>
          <Image
            source={require(`../../data/${this.props.image}`)}
            style={styles.images}
          />
        </View>
        <View style={styles.callsDetail}>
          <View>
            <Text style={styles.name}> {this.props.name} </Text>
            <Text>
              {" "}
              {this.props.time}, {this.props.date}{" "}
            </Text>
          </View>
          <View>
            <Text>
              {this.props.call === "call" ? (
                <Icon.Button
                  backgroundColor="transparent"
                  name="ios-call"
                  onPress={() =>
                    this.props.navigation.navigate("CallModal", {
                      userName: this.props.name,
                      userImg: this.props.image
                    })
                  }
                  size={36}
                  color="#000"
                />
              ) : (
                <Icon.Button
                  backgroundColor="transparent"
                  name="ios-videocam"
                  size={36}
                  color="#000"
                  onPress={() =>
                    this.props.navigation.navigate("CallModal", {
                      userName: this.props.name,
                      userImg: this.props.image
                    })
                  }
                />
              )}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  calls: {
    flexDirection: "row",
    padding: "20px",
    alignItems: "center"
  },
  callsDetail: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px"
  },
  images: {
    borderRadius: "100%",
    width: "70px",
    height: "70px",
    padding: "10px"
  }
});
export default Calls;

