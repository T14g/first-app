import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';

const items = [
    { name: 'Item #1', id : '01' },
    { name: 'Item #2', id : '02' },
    { name: 'Item #3', id : '03' },
    { name: 'Item #4', id : '04' },
    { name: 'Item #5', id : '05' },
    { name: 'Item #6', id : '06' },
    { name: 'Item #7', id : '07' },
    { name: 'Item #8', id : '08' },
    { name: 'Item #9', id : '09' },
];

const ListScreen = () => {
    return (
        <FlatList
            keyExtractor={item => item.name}
            data={items}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>({item.id}){item.name}</Text>;
            }}
        />
    )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;