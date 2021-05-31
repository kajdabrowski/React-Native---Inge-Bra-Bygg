import React from "react";
import { View, Button, StyleSheet } from "react-native";

//Note: You can't style buttons with a normal stylesheet.

const RoundedButton = (props) => {
  return (
    <View>
      <Button color="peachpuff" title={props.title} />
    </View>
  );
};

export default RoundedButton;
