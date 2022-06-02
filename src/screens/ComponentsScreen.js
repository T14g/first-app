import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Fulano';

    return (
        <View>
            <Text style={styles.headingTextStyle}>This a great start</Text>
            <Text style={styles.textStyle}>Welcome, {name}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    headingTextStyle: {
        fontSize: 45
    },
    textStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;