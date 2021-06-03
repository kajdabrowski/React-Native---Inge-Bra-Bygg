import React from "react";
import ContextComponent from "../store/MyConsumer";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { ThemeProvider } from "../store/MyProvider";

const TestScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <ThemeProvider>
          <ContextComponent />
        </ThemeProvider>
      </View>
    </SafeAreaView>
  );
};
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",

//   },
// });
export default TestScreen;
