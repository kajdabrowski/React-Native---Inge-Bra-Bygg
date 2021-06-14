import React, { useEffect, useState, useCallback } from "react";
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Button,
} from "react-native";
import ImageComponent from "../components/ImageComponent";
import { getClientTask } from "../api/authService";
import { useTask, TaskProvider, TaskContext } from "../store/taskContext";
export default function TestScreen() {

  const tasks = getClientTask()

  const Tasks = (props) => {
    return (
      <View style={styles.tasks}>
        <Text style={styles.text}>{props.data}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
  
      <FlatList
        data={tasks}
        keyExtractor={(item) => item}
        renderItems={({ item }) => <Tasks data={item} />}
      />

      <ImageComponent />
      <Button title="task" onPress={getClientTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "peachpuff",
  },

  box: {
    width: 300,
    height: 300,
    margin: 20,
  },
  tasks: {
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#d1d1d1",
    marginBottom: 10,
  },
  text: {
    color: "black",
    fontWeight: "bold",
  },
});
