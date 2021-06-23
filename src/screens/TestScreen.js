import React, { useEffect, useState, useCallback } from "react";
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from "react-native";




import { getClientTask } from "../api/authService";


export default function TestScreen() {

  
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const initTasks = async () => {
      const res = await getClientTask();
      console.log(res);
      setTasks([...res.task]);
    };
    initTasks();
  }, []);



  const Item = ({ title, done }) => {
    return (
      <View style={styles.tasks}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{done}</Text>
      </View>
    );
  };



  const renderItem = ({ item }) => (
    <Item title={item.title} done={"Done: " + item.done} />
  );



  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
    textAlign: "center",
  },
});
