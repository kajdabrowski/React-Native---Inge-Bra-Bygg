import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState, useContext } from "react";
import { FlatList, SafeAreaView, View, Text } from "react-native";
import taskContext from "../store/taskContext";

const styles = require("../style/style");

export default function TaskListScreen() {
  const tasks = useContext(taskContext);
  console.log(tasks);
  const tasksArray = tasks.task;

  const Item = ({ title, done }) => {
    return (
      <View style={styles.listItems}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{done}</Text>
      </View>
    );
  };

  const renderTasks = ({ item }) => (
    <Item title={item.title} done={"Done: " + item.done} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#4A148C", "#880E4F"]} style={styles.container}>
        <View>
          <FlatList
            data={tasksArray}
            renderItem={renderTasks}
            keyExtractor={(item) => item.id}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
