import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ScrollView} from 'react-native';
import ExitIcon from '../components/ExitIcon';
import Ticket from '../components/Ticket';

export default class MyFlights extends React.Component {
	
	render() {
		return (
			<ScrollView style={{backgroundColor:'#123c69', flex:1, paddingTop:50}}>
				<View style={{alignItems:'center'}}>
					<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
						<ExitIcon />
					</TouchableOpacity>
				</View>
				
				
				<View style={{alignItems:'center'}}>
					<Text style={{color:'#fff', fontWeight:'bold'}}>My flights.</Text>
					<View style={{height:450}}><Ticket 
						name={'CAROLYN BAKER'} 
						arrival={{hour:'21:00', date: '30 Jul 2019', airport: 'GDN',city:'Gdańsk'}}
						departure={{hour: '20:00', date: '30 Jul 2019', airport: 'WAW',city:'Warsaw'}}
						flight={{id:"LO285", class: 'Y',boarding: '19:30', seat: '4D'}}
						
						onPress={() => this.props.navigation.navigate("FlightInformation")}
					/></View>
					<View style={{height:450}}><Ticket 
						name={'CAROLYN BAKER'} 
						arrival={{hour:'21:00', date: '30 Jul 2019', airport: 'GDN',city:'Gdańsk'}}
						departure={{hour: '20:00', date: '30 Jul 2019', airport: 'WAW',city:'Warsaw'}}
						flight={{id:"LO285", class: 'Y',boarding: '19:30', seat: '4D'}}
						
						onPress={() => this.props.navigation.navigate("FlightInformation")}
					/></View>
					<View style={{height:450}}><Ticket 
						name={'CAROLYN BAKER'} 
						arrival={{hour:'21:00', date: '30 Jul 2019', airport: 'GDN',city:'Gdańsk'}}
						departure={{hour: '20:00', date: '30 Jul 2019', airport: 'WAW',city:'Warsaw'}}
						flight={{id:"LO285", class: 'Y',boarding: '19:30', seat: '4D'}}
						
						onPress={() => this.props.navigation.navigate("FlightInformation")}
					/></View>
					<View style={{height:450}}><Ticket 
						name={'CAROLYN BAKER'} 
						arrival={{hour:'21:00', date: '30 Jul 2019', airport: 'GDN',city:'Gdańsk'}}
						departure={{hour: '20:00', date: '30 Jul 2019', airport: 'WAW',city:'Warsaw'}}
						flight={{id:"LO285", class: 'Y',boarding: '19:30', seat: '4D'}}
						
						onPress={() => this.props.navigation.navigate("FlightInformation")}
					/></View>
				</View>
				
			</ScrollView>
		)
	}
}
