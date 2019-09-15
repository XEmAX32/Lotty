import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';
import BarCodeScanner from '../components/BarCodeScanner';
import SearchIco from '../components/SearchIco'
import * as Font from 'expo-font';

//TEST
const AMS = require("../../assets/SH/AMS.jpg")

export default class Main extends React.Component{
	
	/*async componentDidMount() {
		await Font.loadAsync({
			'Cera-Pro': require('../../assets/fonts/Cera_Pro_Bold.otf'),
		});
		
		this.setState({ fontLoaded: true });
	}*/
	
	render() {
		
		//TODO in scrollview read peter's json and map
		//TODO my flights button?
		
		
			return (
				
				<View style={styles.container}>
					<Text style={styles.header} >Welcome Back Carolyn.</Text>
					<View style={styles.SectionStyle}>
						<SearchIco style={styles.ImageStyle} />
						<TextInput style={styles.input} placeholder="Let's fly somewhere..." />
					</View>
					
					<Text style={styles.title}>Do you need some inspiration?</Text>
					<ScrollView horizontal showsVerticalScrollIndicator={false} style={styles.scroll}>
						<View style={styles.cardSelf}>
							<Image style={styles.image} source={AMS}></Image>
							<View style={styles.info}>
								<Text style={styles.place}>Gdańsk</Text>
								<View style={styles.price}><Text style={styles.pricetx}>From 882 PLN</Text></View>
							</View>
						</View>
						
						<View style={styles.cardSelf}>
							<Image style={styles.image} source={AMS}></Image>
							<View style={styles.info}>
								<Text style={styles.place}>Gdańsk</Text>
								<View style={styles.price}><Text style={styles.pricetx}>From 882 PLN</Text></View>
							</View>
						</View>
					</ScrollView>
					
				</View>
			)
	}
}

/**/
const styles = StyleSheet.create({
	
	container: {
		flex: 1,
		backgroundColor: "#123C69",
		paddingTop:30
	},
	header: {
		left:15,
		color:"#fff",
		fontWeight:'bold',
		fontSize:30,
		lineHeight:42,
		letterSpacing:3,
// 		fontFamily: 'Cera-Pro'
	},
	SectionStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		height: 50,
		borderRadius: 25 ,
		marginVertical: 30,
		marginHorizontal: 15,
		//FIXME shadow doesnt show up
		shadowOffset:{  width: 0,  height: 0,  },
		shadowRadius:20,
		shadowColor: 'black',
		shadowOpacity: 1,
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
		paddingLeft:10
	},
	title: {
		color:"#fff",
		fontSize:15,
		left:15,
		marginBottom:15
	},
	cardSelf: {
		width:250,
		height:315,
		marginHorizontal:15
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
		backgroundColor:"white",
		borderBottomRightRadius:5,
		borderBottomLeftRadius:5,
	},
	place: {
		color: "#123C69",
		left:15,
		top:10
		
	},
	price: {
		width:120,
		height:20,
		borderRadius:10,
		left:15,
		top:10,
		backgroundColor:"grey",
		paddingHorizontal:10
	},
	pricetx: {
		color:"orange"
	}
});
