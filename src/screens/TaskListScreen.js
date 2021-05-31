import React from "react";
import { View, SafeAreaView, Text, Button, StyleSheet } from "react-native";
import FlatList from "../components/FlatListComponent";
const s = require("../style/style");

const TaskListScreen = (props) => {
  const pressHandler = () => {
    props.navigation.navigate("MessageList");
  };
  return (
    <SafeAreaView>
      <View style={s.container}>
        <Text style={s.heading}>Here are Lists of your previous Tasks</Text>
        <FlatList />
        <Button onPress={pressHandler} title="Go to Message" />
      </View>
    </SafeAreaView>
  );
};

export default TaskListScreen;
