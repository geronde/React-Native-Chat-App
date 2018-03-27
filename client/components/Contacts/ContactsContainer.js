import React, { Component } from "react";
import { StyleSheet, Text, View, ListView, ScrollView } from "react-native";

import data from "../../data/data";
import Contacts from "./Contacts";

class ContactsContainer extends Component {
  static navigationOptions = {
    tabBarVisible: false
  };
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1.name !== row2.name
    });
    this.state = { contacts: this.ds.cloneWithRows(data.contacts) };
  }
  renderRow(rowData, ...rest) {
    const index = parseInt(rest[1], 10);
    return <Contacts index={index} {...rowData} />;
  }
  render() {
    return (
      <View style={styles.contactWrapper}>
        <ScrollView>
          <ListView
            dataSource={this.state.contacts}
            renderRow={this.renderRow}
          />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  contactWrapper: { flex: 1 }
});
export default ContactsContainer;
