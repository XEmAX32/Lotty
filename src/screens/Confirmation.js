import React from 'react';
import { 
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'
import Ticket from '../components/Ticket';

export default function Confirmation({navigation}) {
    return (
        <View style={styles.container}>
            <Ticket 
                name={navigation.state.params.name} 
                arrival={{hour:'21:00', date: '30 Jul 2019', airport: 'GDN',city:'Gdańsk'}}
                departure={{hour: '20:00', date: '30 Jul 2019', airport: 'WAW',city:'Warsaw'}}
                flight={{id:"LO285", class: 'Y',boarding: '19:30', seat: '4D'}}
            />
            <View style={{position: 'absolute', zIndex:9999,top:500, alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Main')} style={{marginBottom:20,backgroundColor:'#DD7962',width:300,borderRadius:20,padding:10,justifyContent:'center',alignItems:'center'}}><Text style={{color: '#FFF',fontSize:20,fontWeight:'bold'}}>YES</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ChatBot', {dest:navigation.state.params.arrivalCity})}><Text style={{color: '#FFF',fontSize:20,fontWeight:'bold'}}>NO</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#123C69',
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        paddingTop:100
    }
})