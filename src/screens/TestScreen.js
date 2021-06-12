import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, SafeAreaView, View, Text, Button, Image } from "react-native";
import ImageComponent from "../components/ImageComponent" 
import {getClientTask} from "../api/authService"
export default function TestScreen(){
  return(

    <SafeAreaView>
      <ImageComponent/>
      <Button title="task" onPress={getClientTask}/>

    </SafeAreaView>

  )


}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "peachpuff"
  },

  box: {
    width: 300,
    height: 300,
    margin: 20
  }


})