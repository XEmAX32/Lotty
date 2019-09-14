import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    SafeAreaView,
    Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

export default function ChatBot(){

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.bottomContainer}>
                <TextInput style={styles.input} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent:'flex-end'
    },
    input: {
        borderWidth:2,
        borderColor: '#000',
        width: width/2,
        height: 50,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})