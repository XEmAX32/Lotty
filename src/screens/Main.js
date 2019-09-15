import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import BarCodeScanner from '../components/BarCodeScanner';
import SearchIco from '../components/SearchIco'
import * as Font from 'expo-font';

const places = require('../../assets/Places.json')


const Card = ({city, img, price, ...props}) => {
// 	console.log(props.navigate)
	return (
		<TouchableOpacity style={styles.cardSelf} {...props} onPress={()=>props.navigate({city:city,price:price,img:img})}>
			<View style={[styles.pin, styles.pind]}/>
			<Image style={styles.image} source={img}></Image>
			<View style={styles.info}>
				<Text style={styles.place}>{city}</Text>
				<View style={styles.price}><Text style={styles.pricetx}>From {price} PLN</Text></View>
			</View>
		</TouchableOpacity>
	)
}


export default class Main extends React.Component{
	
	/*async componentDidMount() {
		await Font.loadAsync({
			'Cera-Pro': require('../../assets/fonts/Cera_Pro_Bold.otf'),
		});
		
		this.setState({ fontLoaded: true });
	}*/
	
	render() {
		
			return (
				
				<View style={styles.container}>
					<Text style={styles.header} >Welcome Back Carolyn.</Text>
					<View style={styles.SectionStyle}>
						<SearchIco style={styles.ImageStyle} />
						<TextInput style={styles.input} placeholder="Let's fly somewhere..." />
					</View>
					
					<Text style={styles.title}>Do you need some inspiration?</Text>
					<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
						<Card city="Warsaw" price={882} img={require("../../assets/SH/WAW.jpg")} navigate={(obj) => this.props.navigation.navigate('PlaceInfo', obj)}/>
						<Card city="Milan" price={882} img={require("../../assets/SH/MXP.jpg")} navigate={(obj) => this.props.navigation.navigate('PlaceInfo', obj)}/>
						<Card city="Bucharest" price={882} img={require("../../assets/SH/OTP.jpg")} navigate={(obj) => this.props.navigation.navigate('PlaceInfo', obj)}/>
						<Card city="Budapest" price={882} img={require("../../assets/SH/BUD.jpg")} navigate={(obj) => this.props.navigation.navigate('PlaceInfo', obj)}/>
					</ScrollView>
					
					<TouchableOpacity style={styles.flights} onPress={() => this.props.navigation.navigate('MyFlights')}>
						<View style={[styles.pin, styles.pinf]}/>
						<Text style={styles.label}>My flights</Text>
					</TouchableOpacity>
					
				</View>
			)
	}
}

/**/
const styles = StyleSheet.create({
	
	container: {
		flex: 1,
		backgroundColor: "#123C69",
		paddingTop:80,
	},
	header: {
		color:"#fff",
		fontWeight:'bold',
		fontSize:25,
		lineHeight:42,
		paddingHorizontal:30,
		letterSpacing:3,
		fontFamily: 'Cera-Pro'
	},
	SectionStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		height: 50,
		borderRadius: 25 ,
		margin: 30,
		//FIXME shadow doesnt show up in android
		shadowOffset:{  width: 0,  height: 0,  },
		shadowRadius:20,
		shadowColor: 'black',
		shadowOpacity: .5,
	},
	ImageStyle: {
		padding: 10,
		margin: 5,
		height: 30,
		width: 25,
		resizeMode : 'stretch',
		alignItems: 'center'
	},
	input: {
		flex:1,
		fontSize:20,
		paddingLeft:10,
		height: 50,
		color:"#707070"
	},
	title: {
		color:"#fff",
		fontSize:15,
		top:20,
		left:30,
		marginBottom:15
	},
	scroll: {
		paddingTop:20
	},
	cardSelf: {
		width:250,
		height:315,
		marginLeft:30,
		backgroundColor:"white",
		borderRadius:5,
	},
	image: {
		width:250,
		height:215,
		borderTopRightRadius:5,
		borderTopLeftRadius:5,
	},
	info: {
		width:250,
		height:100,
		borderBottomRightRadius:5,
		borderBottomLeftRadius:5,
	},
	place: {
		color: "#123C69",
		fontSize:20,
		fontWeight:'bold',
		left:15,
		top:10
		
	},
	price: {
		width:180,
		height:32,
		borderRadius:16,
		left:15,
		top:20,
		backgroundColor:"#ebebeb",
		paddingHorizontal:10
	},
	pricetx: {
		top:3,
		fontSize:18,
		fontWeight:'bold',
		color:"#dd7962"
	},
	flights: {
		backgroundColor:"#fff",
		height:87,
		width:315,
		left:30,
		borderRadius:5,
	},
	label: {
		top:30,
		left:90,
		color:"#123C69",
		fontSize:18,
		fontWeight:'bold',
	},
	pin: {
		zIndex:50,
		position:'absolute',
		height:35,
		width:35,
		top:-17.5,
		borderRadius:17.5,
		backgroundColor:"#123C69"
	},
	pinf: {
		left:140,
	},
	pind: {
		left:107.5,
	}
});
