import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  Image,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/dist/Ionicons";

import Messages from "./Messages";
import data from "../../data/data";

class MessagesContainer extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1.name !== row2.name
    });
    this.state = {
      messages: this.ds.cloneWithRows(data.chats)
    };
  }
  renderRow(rowData, ...rest) {
    const index = parseInt(rest[1], 10);
    return <Messages index={index} {...rowData} {...this.props} />;
  }
  render() {
    return (
      <View style={styles.messagesWrapper}>
        <ScrollView>
          <ListView
            dataSource={this.state.messages}
            renderRow={this.renderRow.bind(this)}
          />
        </ScrollView>
        <View style={styles.messageAContact}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("Contacts")}
            style={styles.messageAContact}
          >
            <Icon
              name="ios-add-circle"
              size={64}
              color="green"
              style={styles.floatingButtonStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  messagesWrapper: {
    flex: 1,
    backgroundColor: "#eee"
  },
  messageAContact: {
    position: "absolute",
    bottom: "0",
    right: "0",
    padding: "15px",
    paddingRight: "10px"
  }
});

export default MessagesContainer;
