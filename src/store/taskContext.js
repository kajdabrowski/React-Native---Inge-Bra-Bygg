import React from "react";
import { createContext, useState, useContext, useEffect } from "react";
import * as API from "../api/authService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TaskContext = React.createContext({});

export const TaskProvider = ({ children }) => {
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    (async () => {
      const tasks = await AsyncStorage.getItem("@Tasks");
      if (!tasks) {
        const response = await API.getClientTask();
        console.log(response);
        setTaskData(response);
        await AsyncStorage.setItem("@Tasks", JSON.stringify(response));
      } else {
        setTaskData(JSON.parse(tasks));
      }
    })();
  }, []);

  return (
    <TaskContext.Provider value={taskData}>{children}</TaskContext.Provider>
  );
};

export default TaskContext;
