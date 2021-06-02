import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LandingScreen from "../screens/LandingScreen";
import TaskListScreen from "../screens/TaskListScreen";
import MessageListScreen from "../screens/MessageListScreen";
import React from "react";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TaskList" component={TaskListScreen} />
      <Stack.Screen name="MessageList" component={MessageListScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
