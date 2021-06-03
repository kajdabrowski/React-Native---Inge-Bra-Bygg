import React from 'react';
import { View, SafeAreaView, Image, Text } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";


const s = require("../style/style");

const TaskSingle = () => {
    return (
        <SafeAreaView>
            <LinearGradient colors={["#4A148C", "#880E4F"]} style={s.container}>
                <View>
                    <Text style={s.heading}>Task title and ID</Text>
                    <Image style={s.image} source={require("../assets/construction-site-1-2.jpg")} />
                    <Text style={s.text}>Task body</Text>
                </View>
            </LinearGradient>

        </SafeAreaView>
    )
}

export default TaskSingle;