import * as React from 'react';
import { View, Text } from 'react-native';

export default function ImageGalleryScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Text style={{ fontSize: 16, fontWeight: '700' }}> Image Gallery Screen </Text>
        </View>
    );
}