import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.headerBar}>
          <Text style={styles.title}>ChatApp</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "green",
    flexDirection: "column"
  },
  headerBar: {
    padding: "20px",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    color: "#f8f8f8",
    fontSize: "1.25em",
    fontWeight: "bold"
  }
});

export default Header;
