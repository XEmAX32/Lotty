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
            <Text>hello world!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
        fontFamily: 'cera-medium',
        flex:1
	}
});
