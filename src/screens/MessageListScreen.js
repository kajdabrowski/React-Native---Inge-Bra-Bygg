import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState} from "react";
import {
  FlatList,
  View, 
  SafeAreaView, 
  Text, 
  Button
} from "react-native";


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


  const Item = ({title, content}) => {
    return(
      <View>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{content}</Text>

      </View>


    )
  }

  const renderMessages = ({item}) =>(

    <Item title={`Title: ${item.title}`} content={`Content: ${item.content}`} />

  )





  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#4A148C", "#880E4F"]} style={styles.container}>
        <View>
          <Text style={styles.text}>Here are your Messages!</Text>
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










