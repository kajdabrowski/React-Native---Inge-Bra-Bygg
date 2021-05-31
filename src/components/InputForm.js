import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const InputForm = (props) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={props.placeholderTop}
            />
            <TextInput
                style={styles.input}
                placeholder={props.placeholderBottom}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        margin: 20

    }
})

export default InputForm;