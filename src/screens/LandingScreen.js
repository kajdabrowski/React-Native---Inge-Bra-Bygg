import React from "react";
import { View, SafeAreaView, Text, Button } from "react-native";
const s = require("../style/style");

const LandingScreen = (props) => {
  const pressHandler = () => {
    props.navigation.navigate("Home");
  };
  return (
    <SafeAreaView>
      <View style={s.container}>
        <Text>AZEB ÄR BÄST</Text>
        <Button onPress={pressHandler} title="Go home" />
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen;
