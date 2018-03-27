import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class Status extends Component {
  render() {
    return (
      <View style={styles.status}>
        <View style={styles.profileImg}>
          <Image
            source={require(`../../data/${this.props.image}`)}
            style={styles.images}
          />
        </View>
        <View style={styles.statusDetail}>
          <Text style={styles.name}> {this.props.name} </Text>
          <Text>
            {" "}
            {this.props.lastUploaded}, {this.props.time}{" "}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  status: {
    flexDirection: "row",
    padding: "20px",
    alignItems: "center"
  },
  statusDetail: {
    padding: "10px"
  },
  images: {
    borderRadius: "100%",
    width: "70px",
    height: "70px",
    padding: "10px"
  }
});
export default Status;
