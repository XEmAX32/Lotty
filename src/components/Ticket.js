<<<<<<< HEAD
import React from 'react'
import Svg, { G, Path, Text, TSpan } from 'react-native-svg'

const Ticket = props => (
	<Svg width={315} height={87} {...props}>
	<G data-name="Group 19">
	<Path
	data-name="Path 12"
	d="M300 43a15 15 0 0115-15V5a5 5 0 00-5-5H5a5 5 0 00-5 5v23a15 15 0 010 30v24a5 5 0 005 5h305a5 5 0 005-5V58a15 15 0 01-15-15z"
	fill="#123c69"
	/>
	<Text
	data-name="Get your ticket now"
	transform="translate(158 50)"
	fill="#fff"
	fontSize={20}
	fontFamily="CeraPro-Bold, Cera Pro"
	fontWeight={700}
	>
	<TSpan x={-94.79} y={0}>
	{'Get your ticket now'}
	</TSpan>
	</Text>
	</G>
	</Svg>
)

export default Ticket
=======
import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import AirplaneIcon from '../components/AirplaneIcon';
import LotLogo from '../components/LotLogo';
import FlipCard from 'react-native-flip-card'

export default function Ticket({name,arrival,departure,flight}) {
    return (
        <FlipCard 
            flipVertical={false}
            flipHorizontal={true}
            clickable={true}
            friction={6}
            style={styles.container}
            alignHeight={true}
            alignWidth={true}

        >  
            <View>
                <View style={styles.top}>
                    <View style={{top:-10,backgroundColor: '#123C69',width: 20,height:20,borderBottomEndRadius:20,borderBottomStartRadius:20}}/>
                    <Text style={styles.name}>{name}</Text>
                </View>
                <View style={styles.middle}>
                    <View style={styles.middleInnerContainer}>
                        <View>
                            <Text>{arrival.hour}</Text>
                            <Text>{arrival.date}</Text>
                        </View>
                        <View style={{alignItems:'flex-end'}}>
                            <Text>{departure.hour}</Text>
                            <Text>{departure.date}</Text>
                        </View>
                        
                    </View>
                    <View style={styles.middleInnerContainer}>
                        <View style={styles.arrivalLocation}>
                            <Text style={styles.airport}>{arrival.airport}</Text>
                            <Text>{arrival.city}</Text>
                        </View>
                        <AirplaneIcon />
                        <View style={styles.arrivalLocation}>
                            <Text style={styles.airport}>{departure.airport}</Text>
                            <Text>{departure.city}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.bottomHorizontal}>
                        <View style={{alignItems:'center'}}>
                            <Text style={styles.bottomTitle}>Flight</Text>
                            <Text>{flight.id}</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Text style={styles.bottomTitle}>Boarding</Text>
                            <Text>{flight.boarding}</Text>
                        </View>
                    </View>
                    <View style={styles.bottomHorizontal}>
                        <View style={{alignItems:'center'}}>
                            <Text style={styles.bottomTitle}>Seat</Text>
                            <Text>{flight.seat}</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Text style={styles.bottomTitle}>Class</Text>
                            <Text>{flight.class}</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor: '#123C69',width:90,height:90,justifyContent:'center',alignItems:'center'}}>
                        <LotLogo />
                    </View>
                </View>
            </View>
            <View style={[styles.container,{backgroundColor: '#fff',borderRadius:10,alignItems:'center'}]}>
                <View style={{top:-10,backgroundColor: '#123C69',width: 20,height:20,borderBottomEndRadius:20,borderBottomStartRadius:20}}/>
                <Image style={{width:250,height:250}} source={{uri: 'https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png'}} />
            </View>
        </FlipCard>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height:350,
    },
    top: {
        height: 50,
        backgroundColor: '#FFF',
        alignItems: 'center',
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
    },
    middle: {
        backgroundColor: '#E8E8E8',
        flexDirection:'column',
        padding: 20
    },
    bottom: {
        backgroundColor: '#FFF',
        padding: 20,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    name: {
        color: '#DD7962'
    },
    airport: {
        color: '#123C69',
        fontSize: 30
    },
    middleInnerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    arrivalLocation: {
        flexDirection: 'column',
        alignItems:'center'
    },
    bottomHorizontal: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    bottomTitle: {
        fontSize: 20,
        color: '#123C69'
    }
})
>>>>>>> 659e170b6fc55605704df3a4be4046b42ba2d834
