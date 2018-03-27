import React, { Component } from "react";
import { StyleSheet, View, ListView, ScrollView } from "react-native";

import data from "../../data/data";
import Calls from "./Calls";

class CallsContainer extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1.name !== row2.name
    });
    this.state = { calls: this.ds.cloneWithRows(data.calls) };
  }
  renderRow(rowData, ...rest) {
    const index = parseInt(rest[1], 10);
    return <Calls index={index} {...rowData} {...this.props} />;
  }
  render() {
    return (
      <View style={styles.callsWrapper}>
        <ScrollView>
          <ListView
            dataSource={this.state.calls}
            renderRow={this.renderRow.bind(this)}
          />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  callsWrapper: { flex: 1, backgroundColor: "#eee" }
});
export default CallsContainer;
