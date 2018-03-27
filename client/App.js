import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Elements/Header";
import Main from "./components/Main";

class App extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Header />
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "#eee"
  }
});

export default App;
