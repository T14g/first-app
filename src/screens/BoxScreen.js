import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// full width = 10 units
const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.text1Style}>Box Screen</Text>
            <Text style={styles.text2Style}>Box Screen</Text>
            <Text style={styles.text3Style}>Box Screen</Text>
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
    text1Style: {
        borderWidth: 2,
        borderColor: 'red',
        padding: 10,
        flex: 4
    },
    text2Style: {
        borderWidth: 2,
        borderColor: 'red',
        padding: 10
    },
    text3Style: {
        borderWidth: 2,
        borderColor: 'red',
        padding: 10,
        flex: 1
    }
});

export default BoxScreen;