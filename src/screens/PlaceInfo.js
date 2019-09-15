import React from 'react'
import {View, StyleSheet, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import Ticket from '../components/Ticket'

const places = require('../../assets/Places.json')

class PlaceInfo extends React.Component {
	
	render () {
		
		
// 		console.log(this.props.navigation.state.params)
		
		var city = this.props.navigation.state.params.city
		var price = this.props.navigation.state.params.price
		var img = this.props.navigation.state.params.img
		
		
		//look for city in json
		
		for ( i in places.cities ) {
			if (places.cities[i].cityname === city) {
				var cityId = i
				break
			}
		}
		var cityInfo = places.cities[cityId]
		
		return (
			<ScrollView style={styles.container} vertical  showsVerticalScrollIndicator={false}>
				<Image source={img} style={styles.image}/>
				<View style={styles.info}>
					<Text style={styles.place}>{city}</Text>
					<View style={styles.price}><Text style={styles.pricetx}>From {price} PLN</Text></View>
				</View>
				<TouchableOpacity style={styles.ticket} onPress={() => this.props.navigation.navigate("ChatBot", {dest:city})}>
					<View style={styles.pinL}/>
					<Text style={styles.tickettx}>Get your ticket now</Text>
					<View style={styles.pinR}/>
				</TouchableOpacity>
				<Text style={styles.info}>{cityInfo.text}</Text>
			</ScrollView>
		)
	}
}
/**/
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	place: {
		color:"#123C69",
		fontWeight:'bold',
		letterSpacing:3,
		fontSize:30,
		top:30
	},
	image: {
		height:315,
		width:375
	},
	price: {
		marginTop:45,
		width:180,
		height:32,
		borderRadius:16,
		backgroundColor:"#ebebeb",
		paddingHorizontal:10
	},
	pricetx: {
		top:3,
		fontSize:18,
		fontWeight:'bold',
		color:"#dd7962"
	},
	ticket: {
		marginTop:25,
		backgroundColor: '#123C69',
		width:315,
		height:87,
		left:30,
		borderRadius:5
	},
	pinL: {
		height:35,
		width:35,
		top:25,
		left:-17.5,
		borderRadius:17.5,
		backgroundColor:'#fff'
	},
	pinR: {
		height:35,
		width:35,
		top:-30,
		left:297.5,
		borderRadius:17.5,
		backgroundColor:'#fff'
	},
	tickettx: {
		top:-5,
		left:40,
		fontSize:18,
		fontWeight:'bold',
		color:"white"
	},
	info: {
		marginTop:25,
		paddingHorizontal:30
	}
})


export default PlaceInfo