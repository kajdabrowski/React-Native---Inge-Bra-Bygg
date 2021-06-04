import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const s = require("../style/style");
 
const InputForm = (props) => {
    return (
        <View>
            <TextInput
                style={s.input}
                placeholder={props.placeholderTop}
            />
            <TextInput
                style={s.input}
                placeholder={props.placeholderBottom}
            />
        </View>
    )
}



export default InputForm;