import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

// True constant
const COLOR_INCREMENT = 10;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    return (
        <View>
            <ColorCounter color={'Red'} onIncrease={() => setRed(red + COLOR_INCREMENT)} onDecrease={() => setRed(red - COLOR_INCREMENT)} />
            <ColorCounter color={'Blue'} onIncrease={() => setBlue(blue + COLOR_INCREMENT)} onDecrease={() => setBlue(blue - COLOR_INCREMENT)} />
            <ColorCounter color={'Green'} onIncrease={() => setGreen(green + COLOR_INCREMENT)} onDecrease={() => setGreen(green - COLOR_INCREMENT)} />

            <Text>Red : {red}</Text>
            <Text>Blue : {blue}</Text>
            <Text>Green : {green}</Text>

            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red},${green},${blue})`
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;