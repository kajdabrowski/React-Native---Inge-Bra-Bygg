import React from "react";
import { View, SafeAreaView, Text, Button, TextInput } from "react-native";
import InputForm from "../components/InputForm";
import RoundedButton from "../components/ButtonComponent";
const s = require("../style/style");

const HomeScreen = (props) => {
  const pressHandler = () => {
    props.navigation.navigate("TaskList");
  };
  return (
    <SafeAreaView>
      <View style={s.container}>
        <Text style={s.heading}>Welcome --UserRole --</Text>
        <InputForm
          placeholderTop="Update E-mail"
          placeholderBottom="Change password"
        />
        <RoundedButton title="Update profile" />
        <Button onPress={pressHandler} title="Go To Task" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
