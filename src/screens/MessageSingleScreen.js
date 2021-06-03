import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const s = require("../style/style");


const MessageSingle = () => {
    return (
        <SafeAreaView>
            <LinearGradient colors={["#4A148C", "#880E4F"]} style={s.container}>
                <View>
                    <Text style={s.heading}>Message title and ID</Text>
                    <Text style={s.text}>Message body</Text>
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default MessageSingle;



