import React from "react";

import drawer from "../navigators/drawer";
import TaskListScreen from "../screens/TaskListScreen";
import MessageListScreen from "../screens/MessageListScreen";
import HomeScreen from "../screens/HomeScreen";
import MessageSingle from "../screens/MessageSingleScreen";
import TaskSingle from "../screens/SingleTaskScreen";
import CreateTask from "../screens/CreateTask";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Menu" component={drawer} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TaskListScreen" component={TaskListScreen} />
      <Stack.Screen name="TaskSingle" component={TaskSingle} />
      <Stack.Screen name="CreateTask" component={CreateTask} />
      <Stack.Screen name="CreateMessage" component={MessageSingle} />
      <Stack.Screen name="MessageList" component={MessageListScreen} />

    </Stack.Navigator>
  );
};

export default UserStack;
