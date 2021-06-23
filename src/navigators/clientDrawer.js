import React from 'react'; 
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from "../screens/HomeScreen"
import TaskListScreen from "../screens/TaskListScreen"
import MessageListScreen from "../screens/MessageListScreen"
import MessageSingle from "../screens/MessageSingleScreen"
import SingleTask from "../screens/SingleTaskScreen"




const Drawer = createDrawerNavigator(); 

const clientDrawerStack = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="My Tasks" component={TaskListScreen} />
            <Drawer.Screen name="My Messages" component={MessageListScreen} />
            <Drawer.Screen name="Single message" component={MessageSingle} />
            <Drawer.Screen name="Single task" component={SingleTask} />
            
           
        </Drawer.Navigator> 
    );

}

export { clientDrawerStack}; 


