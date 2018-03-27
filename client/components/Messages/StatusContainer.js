import React, { Component } from "react";
import { StyleSheet, Text, View, ListView } from "react-native";

import Messages from "./Messages";
import data from "../../data/data";
import Status from "./Status";

class StatusContainer extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1.name !== row2.name
    });
    this.state = { status: this.ds.cloneWithRows(data.status) };
  }
  renderRow(rowData, ...rest) {
    const index = parseInt(rest[1], 10);
    return <Status index={index} {...rowData} />;
  }
  render() {
    return (
      <View style={styles.statusWrapper}>
        <ListView dataSource={this.state.status} renderRow={this.renderRow} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  statusWrapper: {
    backgroundColor: "#eee",
    flex: 1
  }
});
export default StatusContainer;
