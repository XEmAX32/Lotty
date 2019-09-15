import React from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import ExitIcon from '../components/ExitIcon';
import Ticket from '../components/Ticket';

export default function FlightInformation({navigation}) {
    return (
        <ScrollView style={styles.container} contentContainerStyle={{paddingTop:50}}>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ExitIcon />
                </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal: 20}}>
                <Text style={{marginBottom:20,fontSize: 25, color: '#fff',fontWeight: 'bold',width:160}}>Your flight informations.</Text>
                <Ticket 
                    name={'CAROLYN BAKER'} 
                    arrival={{hour:'21:00', date: '30 Jul 2019', airport: 'GDN',city:'Gdańsk'}}
                    departure={{hour: '20:00', date: '30 Jul 2019', airport: 'WAW',city:'Warsaw'}}
                    flight={{id:"LO285", class: 'Y',boarding: '19:30', seat: '4D'}}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#123C69'
    }
})