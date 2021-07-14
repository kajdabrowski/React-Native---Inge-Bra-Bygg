import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from "react-native";

const s = require("../style/style");
import authContext, { useAuth } from "../store/Auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo-linear-gradient";

const SignInScreen = (props) => {
  console.log("*** in SignInScreen");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useContext(authContext);
  const signIn = async () => {
    const credentials = { email: email?.email, password: password?.password };
    console.log("*** SignInScreen credentials: ", credentials);
    await auth.signIn(credentials);

    props.navigation.navigate("Home");
  };

  return (
    <LinearGradient colors={["#4A148C", "#880E4F"]} style={s.container}>
      <SafeAreaView>
        <KeyboardAwareScrollView>
          <View>
            <Text style={s.textHeader}>Inga Bra Byyg</Text>

            <Text style={s.text}>Write Your email</Text>

            <TextInput
              value={email}
              icon="mail"
              onChangeText={(email) => setEmail({ email })}
              placeholder={"E-mail"}
              placeholderTextColor="#0e0515"
              style={s.input}
            />
            <Text style={s.text}>Enter Your Password</Text>
            <TextInput
              value={password}
              onChangeText={(password) => setPassword({ password })}
              placeholder={"Password"}
              placeholderTextColor="#0e0515"
              style={s.input}
              secureTextEntry={true}
            />
            <TouchableOpacity style={s.loginButton}>
              <Button onPress={signIn} title="Login" />
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SignInScreen;
