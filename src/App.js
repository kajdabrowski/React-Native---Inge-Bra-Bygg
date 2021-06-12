import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import WorkerStack from "./navigators/WorkerStack";
import ClientStack from "./navigators/ClientStack";
import AuthStack from "./navigators/AuthStack";
import { AuthProvider, useAuth } from "./store/Auth";

export default function App() {
  const { authData, loading } = useAuth();
  console.log("*** In App - authData", authData);
  return (
    <AuthProvider >
      <NavigationContainer >
        {authData?.token ? (
          authData?.role === "worker" ? (
            <WorkerStack />
          ) : (
            <ClientStack />
          )
        ) : (
          <AuthStack />
        )}
      </NavigationContainer>
    </AuthProvider>

  );
  
}
