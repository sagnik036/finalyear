import * as React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen() {
    return (
        <View style= {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>Profile Screen</Text>
        </View>
    );
}