import React from 'react';
import { View, SafeAreaView, Text, Button } from 'react-native';
import InputForm from '../components/InputForm';


const LandingScreen = (props) => {
    const pressHandler = () => {
        props.navigation.navigate('Home')
    }
    return (
        <SafeAreaView>
            <View>
                <Text>Inge Bra Bygg</Text>
                <InputForm placeholderTop="E-mail" placeholderBottom="Password"/>
                <Button onPress={pressHandler} title="Login" />
            </View>
        </SafeAreaView>
    )
}

export default LandingScreen;
