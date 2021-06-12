import React, { useState } from "react";
import { View, SafeAreaView, Text, Button, TextInput,TouchableOpacity } from "react-native";
import InputForm from "../components/InputForm";
import RoundedButton from "../components/ButtonComponent";
const s = require("../style/style");
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = (props) => {
  const pressHandler = () => {
    props.navigation.navigate("TaskListScreen");
  };

  return (
    <SafeAreaView>
      <LinearGradient colors={["#4A148C", "#880E4F"]} style={s.container}>
        <View>
          <Text style={s.textHeader}>Welcome!</Text>
          <InputForm
            placeholderTop="Update E-mail"
            placeholderBottom="Change password"
          />
          <RoundedButton title="Update profile" />
          <TouchableOpacity style={s.loginButton}>
            <Button onPress={pressHandler} title="Go To Task" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;
