import React, { Component } from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { TouchableOpacity, Text } from "react-native";

import MessagesContainer from "../Messages/MessagesContainer";
import StatusContainer from "../Messages/StatusContainer";
import CallsContainer from "../Calls/CallsContainer";
import ContactsContainer from "../Contacts/ContactsContainer";
import IndividualChat from "../IndividualChat/IndividualChat";
import CallsModal from "../Calls/CallsModal";

import CustomHeader from "./CustomHeader";

export const ModalStack = StackNavigator(
  {
    Calls: {
      screen: CallsContainer,
      navigationOptions: ({ navigate }) => ({
        title: "Calls"
      })
    },
    CallModal: {
      screen: CallsModal
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export const MessagesStack = StackNavigator(
  {
    Messages: {
      screen: MessagesContainer,
      navigationOptions: {
        title: "Messages"
      }
    },
    Chats: {
      screen: IndividualChat,
      navigationOptions: ({ navigation }) => ({
        title: "Chats",
        header: props => (
          <CustomHeader
            {...props}
            name={navigation.state.params.Name}
            imgUri={navigation.state.params.image}
          />
        )
      })
    }
  },
  {
    headerMode: "none"
  }
);
//defining routes
export const ContactsStack = StackNavigator(
  {
    Messages: {
      screen: MessagesStack
    },
    Contacts: {
      screen: ContactsContainer,
      navigationOptions: navigation => ({
        title: "Contacts",
        headerStyle: {
          paddingRight: "10px",
          paddingLeft: "10px",
          backgroundColor: "green",
          color: "#fff"
        },
        headerTitleStyle: {
          color: "#fff"
        },
        headerTintColor: "#fff"
      })
    }
  },
  {
    headerMode: "screen"
  }
);

export const RootTab = TabNavigator(
  {
    Messages: {
      screen: ContactsStack
    },
    Status: {
      screen: StatusContainer
    },
    Calls: {
      screen: ModalStack
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "green"
      },
      indicatorStyle: {
        backgroundColor: "#f8f8f8"
      }
    }
  }
);
