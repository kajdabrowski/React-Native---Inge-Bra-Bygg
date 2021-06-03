import React from 'react'; 
import {TextInput, Text, SafeAreaView, View} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const CreateTask = () => {
    return (
        <SafeAreaView>
            <LinearGradient colors={["#4A148C", "#880E4F"]} style={s.container}>
                <View>
                    <TextInput placeholder={"Task title"}></TextInput>
                    <TextInput placeholder={"Client E-mail address"}></TextInput>
                    <TextInput placeholder={"Task description"}></TextInput>
                    <Image source={"../"} />
                </View>
            </LinearGradient>

        </SafeAreaView>
    )
}