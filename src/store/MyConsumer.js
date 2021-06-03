import React from "react";
import { View, Text, Button } from "react-native";
import { useTheme, useThemeUpdate } from "./MyProvider";

export default function ContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: 2,
    margin: 2,
    width: 200,
    height: 200,
  };
  return (
    <>
      <Button title="change" onPress={toggleTheme}></Button>
      <Text style={themeStyles}></Text>
    </>
  );
}
