import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// full width = 10 units
const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.text1Style}>Box 1 Screen</Text>
            <Text style={styles.text2Style}>Box 2 Screen</Text>
            <Text style={styles.text3Style}>Box 3 Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle : {
        borderWidth: 3,
        borderColor: 'black',
        justifyContent: 'center',
        height: 200
    },
    text1Style: {
        borderWidth: 2,
        borderColor: 'red',
        padding: 10,
        alignSelf: 'center'
    },
    text2Style: {
        borderWidth: 2,
        borderColor: 'red',
        padding: 10,
        position: 'absolute',
        backgroundColor: 'green',
        ...StyleSheet.absoluteFillObject
    },
    text3Style: {
        borderWidth: 2,
        borderColor: 'red',
        padding: 10,
        position: 'absolute',
        top: 20,
        left: 50
    }
});

export default BoxScreen;