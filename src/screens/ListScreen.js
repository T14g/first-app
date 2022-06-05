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
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.name}
            data={items}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name}</Text>;
            }}
        />
    )
};

const styles = StyleSheet.create({
    textStyle: {
        marginHorizontal: 50
    }
});

export default ListScreen;