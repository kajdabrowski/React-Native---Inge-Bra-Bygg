import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const s = require("../style/style");
import { useAuth } from "../store/Auth";

const SignInScreen = (props) => {
  console.log("*** in SignInScreen");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const signIn = async () => {
    const credentials = { email: email?.email, password: password?.password };
    console.log("*** SignInScreen credentials: ", credentials);
    await auth.signIn(credentials);
    props.navigation.navigate('Home')
  };

  return (
    <SafeAreaView>
      <LinearGradient colors={["#4A148C", "#880E4F"]} style={s.container}>
        <View>
          <Text style={s.heading}>Inga Bra Byyg</Text>
          <Text style={s.text}>Write Your email</Text>
          <TextInput
            value={email}
            icon="mail"
            onChangeText={(email) => setEmail({ email })}
            placeholder={"E-mail"}
            style={s.input}
          />

          <Text style={s.text}>Enter Your Password</Text>
          <TextInput
            value={password}
            onChangeText={(password) => setPassword({ password })}
            placeholder={"*  *  *  *  *  *  *  *  *"}
            placeholderTextColor="gray"
            style={s.input}
            secureTextEntry={true}
          />
          <Button onPress={signIn} title="Go To Task" />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SignInScreen;
