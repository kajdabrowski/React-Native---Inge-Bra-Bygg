import React from "react";
import SignInScreen from "../screens/SignInScreen";

import HomeScreen from "../screens/HomeScreen";
import drawer from "./drawer"

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignInScreen">
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="Home" component={drawer} />
    </Stack.Navigator>
  );
};
export default AuthStack;
