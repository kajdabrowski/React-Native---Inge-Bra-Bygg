import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState} from "react";
import {
  FlatList,
  View, 
  SafeAreaView, 
  Text, 
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable"



import { getMessage } from "../api/authService";

const styles = require("../style/style");

export default function MessageListScreen() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    const initMessages = async () =>{
      const response = await getMessage();
      console.log(response)
      setMessages([...response.messages])
    }
    initMessages()
  },[])

  const LeftActions = () => {

    return(
      <View style={styles.rightAction}>
        <Text style={styles.actionText}>Delete Message</Text>
      </View>
    )
  }

  

  const Item = ({title, content, onSwipe, onRightPress}) => {
    return(
      <Swipeable 
      renderLeftActions={LeftActions}
      >
     

      <View>

        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{content}</Text>

      </View>


      </Swipeable>


    )
  }

  const renderMessages = ({item}) =>(

    <Item title={`Title: ${item.title}`} content={`Content: ${item.content}`} />

  )





  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#4A148C", "#880E4F"]} style={styles.container}>
        <View>
          <Text style={styles.text}>Here are your Messages !</Text>
          <FlatList
          data={messages}
          renderItem={renderMessages}
          keyExtractor={(item) => item.id}
          
          />
          {/* <Button title="Press me" onPress={initMessages}></Button> */}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}










