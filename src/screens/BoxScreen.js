import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box Screen</Text>
            <Text style={styles.textStyle}>Box Screen</Text>
            <Text style={styles.textStyle}>Box Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle : {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 200
    },
    textStyle: {
        borderWidth: 2,
        borderColor: 'red',
        padding: 10
    }
});

export default BoxScreen;