import React from 'react';
import {
	ScrollView,
	View,
	StyleSheet,
	TouchableOpacity,
	Text,
	Image
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
			
			<View style={{alignItems:'center'}}>
				<Text style={styles.title}>Your flight informations.</Text>
				<Ticket 
					name={'CAROLYN BAKER'} 
					arrival={{hour:'21:00', date: '30 Jul 2019', airport: 'GDN',city:'GdaÅ„sk'}}
					departure={{hour: '20:00', date: '30 Jul 2019', airport: 'WAW',city:'Warsaw'}}
					flight={{id:"LO285", class: 'Y',boarding: '19:30', seat: '4D'}}
				/>
			</View>
			
			<View>
				<View style={{flex:1, flexDirection:'row', alignItems: 'center'}}>
					<View style={styles.number}><Text style={styles.numbertx}>1</Text></View>
					<Text style={[styles.header, {width:100}]}>About your baggage</Text> 
				</View>
				<View style={{flexDirection:'row'}}>
					<View>
						<Text style={styles.plaintx}>On domestic flight you can bring with you 1 baggage.</Text>
						<Text style={styles.redtx}>1 HAND BAGGAGE</Text>
						<Text style={styles.plaintx}>190 x 60 cm</Text>
					</View>
					<Image source={require("../../assets/Baggage.png")}/>
				</View>
			</View>
			
			<View style={{marginBottom:100, marginTop:40}}>
				<View style={{flex:1, flexDirection:'row', width:410, justifyContent:'center', alignItems: 'center'}}>
					<Text style={[styles.header, {width:160, textAlign:'right'}]}>About the service on board</Text> 
					<View style={styles.number}><Text style={styles.numbertx}>2</Text></View>
				</View>
				<View style={{flexDirection:'row', justifyContent:'flex-end', alignItems: 'center'}}>
					<Image source={require("../../assets/FoodIco.png")} style={{marginRight:15}}/>
					<View >
						<Text style={[styles.plaintx, {textAlign:'right'}]}>There are no meals included in this flight, but you can choos to buy food and beverages from our menù.</Text>
						<Text style={[styles.plaintx, {textAlign:'right'}]}>Simply ask our crew</Text>
					</View>
				</View>
			</View>
			
			
		</ScrollView>
	)
	
					/*<View style={styles.serices}>
					 < View><T*ext>YES</Text></View>
					 <View><Text>NO</Text></View>
					 <View><Text>NO</Text></View>
					 </View>*/
}

/**/
const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: '#123C69',
		padding:30
	},
	title: {
		marginTop:30,
		fontSize: 25, 
		color: '#fff',
		fontWeight: 'bold',
		width:250
	},
	number: {
		backgroundColor:'#dd7962',
		alignItems:'center',
		borderRadius:5,
		width:30,
		height:50,
		justifyContent:'center'
	},
	numbertx: {
		color:"#fff",
		fontWeight:'bold'
	},
	header: {
		color:"#fff",
		fontWeight:'bold',
		marginHorizontal:15
	},
	plaintx: {
		color:'#fff',
		fontWeight: 'bold',
		width:130,
		marginTop:15
	},
	redtx: {
		color:'#dd7962',
		fontWeight: 'bold',
		width:160,
		marginTop:15
	},
	services: {
		width:'100%',
		height:50,
		backgroundColor:'#fff',
		flexDirection:'row',
		alignItems:'center',
		justifyContent:"center"
	}
})