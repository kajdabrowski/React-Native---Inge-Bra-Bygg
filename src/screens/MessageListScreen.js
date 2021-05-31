import React from "react";
import { View, SafeAreaView, Text, Button, StyleSheet } from "react-native";
import FlatList from "../components/FlatListComponent";
const s = require("../style/style");

const MessageListScreen = (props) => {
  return (
    <SafeAreaView>
      <View style={s.container}>
        <Text style={s.heading}>Here are Lists of your Messages!</Text>
        <FlatList />
      </View>
    </SafeAreaView>
  );
};


export default MessageListScreen;
