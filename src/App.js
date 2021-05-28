import React from 'react'; 
import {NavigationContainer} from "@react-navigation/native";
import MainStack from "./navigators/stack";

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}