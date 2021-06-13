import React from 'react'; 
import { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

//Här ska vi importera async getTask funktionen från filen i api-mappen

const taskContext = createContext({}); 

const TaskProvider = ({children}) => {
    const [taskData, setTaskData] = useState(); 
}



