import React from "react";
import SignInScreen from "../screens/SignInScreen";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignInScreen">
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
};
export default AuthStack;
