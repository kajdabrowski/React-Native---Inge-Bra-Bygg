import React from "react";
import { Text, View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Tasks from "../store/taskContext"
const TaskItem = (props) => {
  return (
    <View style={styles.items}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
};



const App = () => {
  return (
    <SafeAreaView>
      <FlatList
        style={{ padding: 20 }}
        data={Tasks}
        keyExtractor={(task) => task}
        renderItem={({ task }) => <Tasks name={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  items: {
    justifyContent: "center",
    padding: 10,
    backgroundColor: '#d1d1d1',
    marginBottom: 10,
  },
  text: {
    color: "black",
    fontWeight: "bold",
    
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default App;
