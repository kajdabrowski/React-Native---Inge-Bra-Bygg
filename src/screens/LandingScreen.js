import React from 'react';
import { View, SafeAreaView, Text, Button } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';

const LandingScreen = (props) => {
    const pressHandler = () => {
        props.navigation.navigate('Home')
    }
    return (
        <SafeAreaView>
            <View>
                <Text>AZEB ÄR BÄST</Text>
                <Button onPress={pressHandler} title="Go home" />
            </View>
        </SafeAreaView>
    )
}

export default LandingScreen;