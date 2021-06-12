import TaskListScreen from "../screens/TaskListScreen";
import TestScreen from "../screens/TestScreen";
import MySwipable from "../screens/Swipable";
import HomeScreen from "../screens/HomeScreen";
import React from "react";
import drawer from "../navigators/drawer";


import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const ClientStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Drawer" component={drawer} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TaskList" component={TaskListScreen} />
      <Stack.Screen name="TestScreen" component={TestScreen} />
      <Stack.Screen name="MySwipable" component={MySwipable} />
    </Stack.Navigator>
  );
};

export default ClientStack;
