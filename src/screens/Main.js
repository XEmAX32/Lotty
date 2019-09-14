import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import BarCodeScanner from '../components/BarCodeScanner';

export default function Main(){

    return (
        <View style={styles.container}>
            <BarCodeScanner/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})