import React from "react";
import { createContext, useState, useContext, useEffect } from "react";
import { authService } from "../api/authService";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Här ska vi importera async getTask funktionen från filen i api-mappen

const TaskContext = createContext({});

const TaskProvider = ({ children }) => {
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    async function getTasks() {
      const taskStorage = await AsyncStorage.getItem("@tasks");
      if (taskStorage) {
        setTaskData(Json.parse(taskStorage));
      }
    }
    getTasks();
  },[]);

  return (
    <TaskContext.Provider value={{ taskData }}>
        {children}
    </TaskContext.Provider>
  );
};

function useTask(){
    const context = useContext(TaskContext)
    if(!context){
        throw new Error("use task must be used within an task provider!!")
    }
    return context
}

export {useTask, TaskProvider, TaskContext}
