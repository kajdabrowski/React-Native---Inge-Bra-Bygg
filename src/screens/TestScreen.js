import React, { useEffect, useState, useCallback } from "react";
import ContextComponent from "../store/MyConsumer";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { ThemeProvider } from "../store/MyProvider";
import { getUsers } from "../api/user";

const TestScreen = (props) => {
  const [users, setUsers] = useState([]);
  const pressHandler = () => {
    props.navigation.navigate("Login");
  };
  const handleUsers = useCallback(async () => {
    const response = await fetch(
      "https://mocki.io/v1/07e78fd4-2587-4480-8e84-efab14a153de"
    );
    if (response.ok) {
      const users = await response.json();
      console.log("***users:", users);
      console.log("***users[0]:", users["users"]);
      setUsers(users["users"]);
    } else {
      console.log("Response not ok");
    }
  }, []);
  useEffect(() => {
    handleUsers();
  }, []);
  return (
    <SafeAreaView>
      <View>
        <View>
          <Text>
            {users.map(
              (users) => users.name + " " + users.email + " " + users.role + " "
            )}
          </Text>
        </View>
        <Button onPress={pressHandler} title="Go to LOgin" />
      </View>
    </SafeAreaView>
  );
};

export default TestScreen;
