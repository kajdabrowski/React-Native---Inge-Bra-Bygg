import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const CustomButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ ...styles.button, ...props.style }}>
                <Text style={{ ...styles.buttonText, ...props.textStyling }}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "peachpuff",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'normal',
        fontSize: 18,
        textAlign: 'center',
    }
})

export default CustomButton;

