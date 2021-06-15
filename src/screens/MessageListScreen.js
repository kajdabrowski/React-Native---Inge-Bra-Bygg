import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, SafeAreaView, Text, Button, StyleSheet } from "react-native";
import FlatList from "../components/FlatListComponent";
import { getMessage } from "../api/authService";

const s = require("../style/style");

export default function MessageListScreen() {
 

  
  
  return (
    <SafeAreaView>
      <LinearGradient colors={['#4A148C', '#880E4F']}
          style={s.container}>
      <View >
        <Text style={s.text}>Here are Lists of your Messages!</Text>
        <FlatList />
        <Button title="Press me" onPress={getMessage}></Button>
      </View>
  </LinearGradient>
    </SafeAreaView>
  );
}


// const MessageListScreen = (props) => {
//   const pressHandler = () => {
//     props.navigation.navigate("TestScreen");
//   };
// };



