import React, { Component, useState } from "react";
import axios from 'axios'
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const s = require("../style/style");


const Login =({ navigation}) => {
  const [hidePassword, setHidePassword] = useState(true)
  const handleLogin = (credentials) => {
    const url ='https'

    axios
    post(url, credentials)
    .then((response) => {
      const result  = response.data
       const{message,status,data} =result
      
      })
      .catch(error =>{
        console.log(error.Json)
      })

    
  }

}
class LandingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    const { name } = this.state;
    const { password } = this.state;
    return (
      <SafeAreaView>
        <LinearGradient colors={["#4A148C", "#880E4F"]} style={s.container}>
          <View>
            <Text style={s.heading}>Inga Bra Byyg</Text>
            <Text style={s.text}>Write Your Name</Text>
            <TextInput
              value={name}
              icon='mail'
              onChangeText={(email) => this.setState({ email: email })}
              placeholder={"E-mail"}
              style={s.input}
            />
            <Text style={{ color: "blue" }}>{name}</Text>

            <Text style={s.text}>Enter Your Password</Text>
            <TextInput
              value={password}
              onChangeText={(password) => this.setState({ password: password })}
              placeholder={"*  *  *  *  *  *  *  *  *"}
              placeholderTextColor='gray'
              style={s.input}
              secureTextEntry={true}
            />
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

export default LandingScreen;
