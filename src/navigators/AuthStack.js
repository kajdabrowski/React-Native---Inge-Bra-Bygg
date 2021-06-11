import React from "react";
import SignInScreen from "../screens/SignInScreen";
import TestScreen from "../screens/TestScreen";
import HomeScreen from "../screens/HomeScreen";


import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignInScreen">
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
export default AuthStack;
