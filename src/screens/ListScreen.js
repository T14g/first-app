import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';

const items = [
    { name: 'Item #1' },
    { name: 'Item #2' },
    { name: 'Item #3' },
    { name: 'Item #4' },
    { name: 'Item #5' },
    { name: 'Item #6' },
    { name: 'Item #7' },
    { name: 'Item #8' },
    { name: 'Item #9' },
];

const ListScreen = () => {
    return (
        <FlatList
            data={items}
            renderItem={({ item, index }) => {
                return <Text key={index}>{item.name}</Text>;
            }}
        />
    )
};

const styles = StyleSheet.create({});

export default ListScreen;