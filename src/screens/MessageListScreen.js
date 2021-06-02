import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, SafeAreaView, Text, Button, StyleSheet } from "react-native";
import FlatList from "../components/FlatListComponent";


const s = require("../style/style");

const MessageListScreen = (props) => {
  return (
    <SafeAreaView>
      <LinearGradient colors={['#4A148C', '#880E4F']}
          style={s.container}>
      <View >
        <Text style={s.heading}>Here are Lists of your Messages!</Text>
        <FlatList />
      </View>
 </LinearGradient>
    </SafeAreaView>
  );
};


export default MessageListScreen;
