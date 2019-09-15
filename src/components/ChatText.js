import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

export default function ChatText({text, type}) {
    return (
        <View style={{alignSelf: type == 0 ? 'flex-start' : 'flex-end', width: 200}}>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})