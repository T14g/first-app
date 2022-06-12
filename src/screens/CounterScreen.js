import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            console.log('1');
            return { ...state, count: state.count + 1 };

        case 'decrease':
            return { ...state, count: state.count - 1 };

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
                    dispatch({ type: 'increase' });
                }}
            />
            <Button
                title="Decrease"
                onPress={() => {
                    dispatch({ type: 'decrease' });
                }}
            />
            <Text>Counter : {count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;