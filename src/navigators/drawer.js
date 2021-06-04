import React from 'react'; 
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from "../screens/HomeScreen"
import TaskListScreen from "../screens/TaskListScreen"
import MessageListScreen from "../screens/MessageListScreen"
import TestScreen from "../screens/TestScreen"
import MessageSingle from "../screens/MessageSingleScreen"
import SingleTask from "../screens/SingleTaskScreen"
import CreateTask from "../screens/CreateTask"


const Drawer = createDrawerNavigator(); 

const DrawerStack = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="My Tasks" component={TaskListScreen} />
            <Drawer.Screen name="My Messages" component={MessageListScreen} />
            <Drawer.Screen name="Single message" component={MessageSingle} />
            <Drawer.Screen name="Single task" component={SingleTask} />
            <Drawer.Screen name="Create new task" component={CreateTask} />
            <Drawer.Screen name="Test" component={TestScreen} />
        </Drawer.Navigator> 
    );

}

export default DrawerStack; 


