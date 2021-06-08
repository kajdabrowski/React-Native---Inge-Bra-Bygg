import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LandingScreen from "../screens/LandingScreen";
import TaskListScreen from "../screens/TaskListScreen";
import MessageListScreen from "../screens/MessageListScreen";
import TestScreen from "../screens/TestScreen";
import MySwipable from "../screens/Swipable";
import React from "react";
import drawer from "../navigators/drawer";
import { StyleSheet } from "react-native";
import Login from "../screens/Login";


const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Home" component={drawer} />
      <Stack.Screen name="TaskList" component={TaskListScreen} />
      <Stack.Screen name="TestScreen" component={TestScreen} />
      <Stack.Screen name="MySwipable" component={MySwipable} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default MainStack;
