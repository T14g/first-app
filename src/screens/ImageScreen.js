import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <Text>Image Screen</Text>
            <ImageDetail
                title={'Image 1'}
                imageScore={10}
                imageSource={require('../../assets/beach.jpg')}
            />
            <ImageDetail
                title={'Image 2'}
                imageScore={5}
                imageSource={require('../../assets/forest.jpg')}
            />
            <ImageDetail
                title={'Image 3'}
                imageScore={6}
                imageSource={require('../../assets/mountain.jpg')}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;