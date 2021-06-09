import TaskListScreen from "../screens/TaskListScreen";
import TestScreen from "../screens/TestScreen";
import MySwipable from "../screens/Swipable";
import React from "react";
import drawer from "../navigators/drawer";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const WorkerStack = () => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Home" component={drawer} />
      <Stack.Screen name="TaskList" component={TaskListScreen} />
      <Stack.Screen name="TestScreen" component={TestScreen} />
      <Stack.Screen name="MySwipable" component={MySwipable} />
    </Stack.Navigator>
  );
};

export default WorkerStack;
