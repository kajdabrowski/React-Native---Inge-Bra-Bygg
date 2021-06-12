import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import WorkerStack from "./navigators/WorkerStack";
import ClientStack from "./navigators/ClientStack";
import AuthStack from "./navigators/AuthStack";
import { AuthProvider, useAuth } from "./store/Auth";

export default function App() {
  const { authData, loading } = useAuth();
  console.log("*** In App - authData", authData);

  const CurrentStack = authData?.role === "worker" ? (
    <WorkerStack />
  ) : (
    <ClientStack />
  );

  return (
    <AuthProvider>
      <NavigationContainer color={"#a4ac86"}>
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
    </AuthProvider>
  );
}
