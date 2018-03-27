import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class Contacts extends Component {
  render() {
    return (
      <View style={styles.contact}>
        <View style={styles.profileImg}>
          <Image
            source={require(`../../data/${this.props.image}`)}
            style={styles.images}
          />
        </View>
        <View style={styles.contactDetail}>
          <Text style={styles.name}> {this.props.name} </Text>
          <Text> {this.props.status}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  contact: {
    flexDirection: "row",
    padding: "20px",
    alignItems: "center"
  },
  contactDetail: {
    padding: "10px"
  },
  images: {
    borderRadius: "100%",
    width: "70px",
    height: "70px",
    padding: "10px"
  }
});
export default Contacts;
