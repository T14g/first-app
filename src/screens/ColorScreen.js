import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    const randomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        return `rgb(${red}, ${green}, ${blue})`;
    };

    return (
        <View>
            <Button title='Add a Color' onPress={() => {
                setColors([...colors, randomColor()]);
            }} />

            <FlatList
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({ item }) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item }} />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorScreen;