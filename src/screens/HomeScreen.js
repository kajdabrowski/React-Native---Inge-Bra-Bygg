import React from 'react';
import { View, SafeAreaView, Text, Button, TextInput } from 'react-native';
const s = require("../style/style");

const HomeScreen = (props) => {
    const pressHandler = () => {
        props.navigation.navigate("TaskList");
      };
    return (
        <SafeAreaView>
            <View style={s.container}>
                <Text>KAJ ÄR BÄST</Text>
                <Button onPress={pressHandler} title="Go to Task" />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;