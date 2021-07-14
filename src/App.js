import React, {useContext} from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import WorkerStack from "./navigators/WorkerStack";
import ClientStack from "./navigators/ClientStack";
import AuthStack from "./navigators/AuthStack";
import authContext,{ AuthProvider} from "./store/Auth";
import { TaskProvider} from "./store/taskContext";

export default function App() {
  const { authData, loading } = useContext(authContext);
  console.log("*** In App - authData", authData);

  // const CurrentStack = authData?.role === "worker" ? (
  //   <WorkerStack />
  // ) : (
  //   <ClientStack />
  // );

  return (
    <AuthProvider >
      <TaskProvider>

      <NavigationContainer >
        {authData?.token ? (
          authData?.role == "worker" ? (
            <WorkerStack />
          ) : (
            <ClientStack />
          )
        ) : (
          <AuthStack />
        )}

      </NavigationContainer>
      </TaskProvider>
    </AuthProvider>

  );
  
}
