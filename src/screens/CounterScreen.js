import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            console.log('1');
            return { count: state.count + 1 };

        case 'decrease':
            return { count: state.count - 1 };

        default:
            console.log('def');
            return state;
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    const { count } = state;

    return (
        <View>
            <Button
                title="Increase"
                onPress={() => {
                    dispatch({ action: 'increase' });
                }}
            />
            <Button
                title="Decrease"
                onPress={() => {
                    dispatch({ action: 'decrease' });
                }}
            />
            <Text>Counter : {count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;