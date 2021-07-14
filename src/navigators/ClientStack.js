import TaskListScreen from "../screens/TaskListScreen";


import HomeScreen from "../screens/HomeScreen";
import React from "react";
import {clientDrawerStack} from "../navigators/clientDrawer";


import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const ClientStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Drawer" component={clientDrawerStack} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TaskList" component={TaskListScreen} />
     
      
    </Stack.Navigator>
  );
};

export default ClientStack;
