import React, { useState } from "react";
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
import { useAuth } from "../store/Auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo-linear-gradient";

const SignInScreen = (props) => {
  console.log("*** in SignInScreen");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const signIn = async () => {
    const credentials = { email: email?.email, password: password?.password };
    console.log("*** SignInScreen credentials: ", credentials);
    await auth.signIn(credentials); // You'll get either succesful data or fail

    props.navigation.navigate("Home");
  };

  return (
<<<<<<< HEAD
    <SafeAreaView>
      <LinearGradient colors={["#4A148C", "#880E4F"]} style={s.container}>
        <View>
          <Text style={s.heading}>Inge Bra Bygg</Text>
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
          <Button onPress={signIn} title="Sign In" />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
=======
    <LinearGradient colors={["#4A148C", "#880E4F"]} style={s.container}>
      <SafeAreaView>
        <KeyboardAwareScrollView>
          <View>
            <Text style={s.textHeader}>Inga Bra Byyg</Text>
            <Image
              blurRadius={2}
              style={s.image}
              source={require("../assets/construction-site-1-2.jpg")}
            />

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
    )

    
}
>>>>>>> 55ebe6af939be6c2f7d30d24674be2e5ecbd4b2d

export default SignInScreen;
