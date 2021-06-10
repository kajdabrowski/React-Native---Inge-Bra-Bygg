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
      "https://swapi.dev/api/people/1"
    );
    if (response.ok) {
      const items = await response.json();
      // console.log("***items:", items);
      // console.log("***items[0]:", items["items"]);
      setItems(items["items"]);
      console.log(items.films)
    } else {
      console.log("Response not ok");
    }
  }, []);

  useEffect(() => {
    handleItems();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <View>
        <Text>
       
       {/* {items.map(
              (items) => items.films
            )} */}
        </Text>
          {/* <Text>
            {users.map(
              (users) => users.name + " " + users.email + " " + users.role + " "
            )}
          </Text> */}
        </View>
        <Button onPress={pressHandler} title="Go to LOgin" />
      </View>
    </SafeAreaView>
  );
};

export default TestScreen;
