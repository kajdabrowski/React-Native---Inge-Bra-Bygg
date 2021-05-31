import React from 'react';
import { View, SafeAreaView, Text, Button, TextInput } from 'react-native';
import InputForm from '../components/InputForm'
import RoundedButton from '../components/ButtonComponent'
 

const HomeScreen = (props) => {

    return (
        <SafeAreaView>
            <View>
                <Text>Welcome --UserRole --</Text>
                <InputForm placeholderTop="Update E-mail" placeholderBottom="Change password"/>
                <RoundedButton title="Update profile"/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;