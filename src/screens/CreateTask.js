import React from 'react';
import { TextInput, Text, SafeAreaView, View, Image, Button, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import InputForm from "../components/InputForm"
import CustomButton from "../components/CustomButtonComponent"

const s = require("../style/style");

const CreateTask = () => {
    return (
        <SafeAreaView>
            <LinearGradient colors={["#4A148C", "#880E4F"]} style={s.container}>
                <View>
                    <InputForm
                        placeholderTop="New task title"
                        placeholderBottom="Client E-mail address"
                    />
                    <TextInput style={s.input} placeholder={"Task description"}></TextInput>
                    <Image style={s.image} source={require("../assets/construction-site-1-2.jpg")} />
                    <CustomButton>{"CREATE NEW TASK"}</CustomButton>
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default CreateTask;