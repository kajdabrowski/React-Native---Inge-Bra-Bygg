import React from 'react';
import { View, SafeAreaView, Text, Button } from 'react-native';
import InputForm from '../components/InputForm';
const s = require("../style/style");


const LandingScreen = (props) => {
    const pressHandler = () => {
        props.navigation.navigate('Home')
    }
    return (
        <SafeAreaView>
            <View style={s.container}>
                <Text style={s.heading}>Inge Bra Bygg</Text>
                <InputForm placeholderTop="E-mail" placeholderBottom="Password"/>
                <Button onPress={pressHandler} title="Login" />
            </View>
        </SafeAreaView>
    )
}

export default LandingScreen;
