import React from "react";
import { View, SafeAreaView, Text, Button, StyleSheet } from "react-native";
import FlatList from "../components/FlatListComponent";
const s = require("../style/style");
import { LinearGradient } from "expo-linear-gradient";

const TaskListScreen = (props) => {
  const pressHandler = () => {
    props.navigation.navigate("TestScreen");
  };
  return (
    <SafeAreaView>
      <LinearGradient colors={["#4A148C", "#880E4F"]} style={s.container}>
        <View>
          <Text style={s.heading}>Here are Lists of your previous Tasks</Text>
          <FlatList />
          <Button onPress={pressHandler} title="Go to Testscreen" />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default TaskListScreen;
