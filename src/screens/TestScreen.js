import React, { useEffect, useState, useCallback } from "react";
import ContextComponent from "../store/MyConsumer";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { ThemeProvider } from "../store/MyProvider";
import { getUsers } from "../api/user";

const TestScreen = () => {
  // const [users, setUsers] = useState([]);
  // const handleUsers = useCallback(async () => {
  //   const response = await fetch(
  //     "https://mocki.io/v1/07e78fd4-2587-4480-8e84-efab14a153de"
  //   );
  //   if (response.ok) {
  //     const users = await response.json();
  //     console.log("***users:", users);
  //     console.log("***users[0]:", users["users"]);
  //     setUsers(users["users"]);
  //   } else {
  //     console.log("Response not ok");
  //   }
  // }, []);
  // useEffect(() => {
  //   handleUsers();
  // }, []);

 const [items, setItems] = useState([]);
  const handleItems = useCallback(async () => {
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
      </View>
    </SafeAreaView>
  );
};

export default TestScreen;
