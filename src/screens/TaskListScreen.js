import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState} from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  Text,
} from "react-native";


const styles = require("../style/style");

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
      <View style={styles.listItems}>
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
      <LinearGradient colors={["#4A148C", "#880E4F"]} style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      </LinearGradient>
    </SafeAreaView>
  );
}



