import React, { useEffect, useState, useCallback } from "react";
import { View,  Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker"


const ImageComponent = (props) => {

  const [image,setImage] = React.useState(null)
  
  React.useEffect(() => {
    ImagePicker.requestMediaLibraryPermissionsAsync()
    .then(response => {
      console.log(response)
      // if(response.status === granted)
    })
  },[])

const pickImage = async ()=> {
    const result = await ImagePicker.launchImageLibraryAsync({})

    setImage(result)
}

const openCamera = async ()=> {
    const result = await ImagePicker.launchCameraAsync()
}


  return (
    
      <View >
        
        <Button onPress={pickImage} title="Open media library"/>
        <Button onPress={openCamera} title="Open camera"/>
        {image && <Image source={{uri: image.uri}} style={{height: 200, width: 200}}/>}
      </View>
    
  );
};



export default ImageComponent;
