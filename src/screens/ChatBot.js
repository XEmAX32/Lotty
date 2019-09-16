import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Dimensions,
    KeyboardAvoidingView,
    TextInput,
    Text,
    Image
} from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Amplify, { Interactions } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import ExitIcon from '../components/ExitIcon';

const { height,width } = Dimensions.get('window');

export default class ChatBot extends React.Component{

    constructor() {
        super();
    }

    componentDidMount() {
        this.callChatBot()
    }


    componentWillMount() {
        Amplify.configure(awsconfig);
        console.log('working component')
        this._getLocationAsync();
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);

        let location = await Location.getCurrentPositionAsync({});

        const reverseGeocode = await Location.reverseGeocodeAsync({latitude: location.coords.latitude, longitude: location.coords.longitude})

        this.setState({hints: [reverseGeocode[0].city+' '+reverseGeocode[0].country]})
      };
    

    callChatBot = async () => {

        const response = await Interactions.send("lot_lot", this.state.response == '' ? 'book' : this.state.response);

        this.setState({response: '',question: response.message})

        switch(response.slotToElicit) {
            case 'GetCity': 
                
            break;
            case 'GetFlightClass': 
                this.setState({hints: ['first', 'business', 'premium economy','economy']})
            break;
            case 'FlightPlace':
                this.setState({hints: ['window', 'corridor']})
                break
            case 'AdditionalLagguage':
                this.setState({hints: ['yes','no']})
                break;
            case null: 
                setTimeout(() => {
                    this.props.navigation.navigate('Confirmation', {name: response.slots.GetClientNames, departureCity: response.slots.GetCity,date:response.slots.GetDate, arrivalCity:this.props.navigation.state.params.dest})
                },1000)
            default: 
                if(this.state.hints.length > 0)
                    this.setState({hints: ["..."]})
            break;
        }
    }

    next = () => {
        this.setState(prevState => {
            let newState = Object.assign({}, prevState);

            newState.interactions.push(interactionList[this.state.interactions.length])
            return {
                interactions: newState.interactions
            }
        })
    }

    state = {
        question: "",
        response: '',
        hints: ["..."]
    }
/*
    _renderItem = ({item}) => {
        switch(item.type) {
            case 'text':
                return <ChatText text={item.content} type={item.relation} />
            case 'datepicker':
                return (
                    <ChatDate 
                        item={item} 
                        date={this.state.interactions[item.id-1].date} 
                        onCloseModal={(item) => {    
                            this.setState(prevState => {
                                let newState = Object.assign({}, prevState);
                                newState.interactions[item.id-1] = {
                                    ...prevState.interactions[item.id-1],
                                    disabled:true
                                }
    
                                return {
                                    interactions: newState.interactions
                                }})
                        }}
                        onDateChange={(date,item) => {
                            this.setState(prevState => {
                                let newState = Object.assign({}, prevState);
                                newState.interactions[item.id-1] = {
                                    ...prevState.interactions[item.id-1],
                                    date: new Date(date)
                                }
    
                                return {
                                    interactions: newState.interactions
                                }
                            })
                        }}
                        disabled={this.state.interactions[item.id-1].disabled}
                    />
                )
            case 'textinput':
                return <TextInput style={{alignSelf: item.relation == 1 ? 'flex-end' : 'flex-start', backgroundColor: '#FFF', height:30,width:width/2}}/>
            case 'picker':
                return (
                        <ChatPicker  
                            item={item} 
                            selectedValue={this.state.interactions[item.id-1].selected}
                            options={this.state.interactions[item.id-1].options}
                            onValueChange={(selected, item) => {
                                this.setState(prevState => {
                                    let newState = Object.assign({}, prevState);
                                    newState.interactions[item.id-1] = {
                                        ...prevState.interactions[item.id-1],
                                        selected: selected
                                    }

                                    console.log(newState)
        
                                    return {
                                        interactions: newState.interactions
                                    }
                                })
                            }}
                        />
                    )
        }
    }

    _keyExtractor = (item) => ""+item.id

    getAirports = () => {
        fetch('https://api.lot.com/flights-dev/v2/airports/get')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }*/

    onPressCallback = () => {
        this.callChatBot();
    }

    render() {

        return (
            <View style={styles.container}>
                    <Image source={require('../../assets/Lotty.png')} style={{position:'absolute',right: -10,top:200,zIndex:-1}}/>
                    <View style={{alignItems:'center'}}>
                        <View style={{marginBottom:20}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}><ExitIcon /></TouchableOpacity>
                        </View>
                        <View style={styles.questionContainer}>
                            <Text style={styles.questionText}>{this.state.question}</Text>
                        </View>
                    </View>
                    
                    <KeyboardAvoidingView behavior={'position'} contentContainerStyle={styles.inputContainer} enabled>
                        <Text style={{color:'#FFF',fontWeight:'bold',textAlign:'left'}}>Hints</Text>
                        <View style={{height:50,alignSelf:'flex-start',paddingLeft:20}}>
                        <ScrollView horizontal>
                            {this.state.hints.map((hint,i) => <TouchableOpacity style={{marginHorizontal: 10, height:20,paddingHorizontal:10,paddingVertical:5}} onPress={() => this.setState({response:hint})} key={i} style={styles.hintView}><Text>{hint}</Text></TouchableOpacity>)}
                        </ScrollView>
                        </View>
                        <View style={styles.inputInnerContainer}>
                            <TextInput 
                                value={this.state.response} 
                                style={styles.input} 
                                onSubmitEditing={this.onPressCallback}
                                returnKeyType="send"
                                onChangeText={(text) => this.setState({response:text})} 
                            />
                        </View>
                    </KeyboardAvoidingView>
            </View>
        )
    }
}

/*
<FlatList 
                    extraData={this.state.interactions.length}
                    style={{backgroundColor:'red'}}
                    contentContainerStyle={{paddingHorizontal:20,paddingBottom:20,flex:1,backgroundColor:'green',justifyContent:'flex-end'}}
                    data={this.state.interactions}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
*/

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent:'space-between',
        paddingTop:100,
        backgroundColor: '#123C69',
    },
    input: {
        backgroundColor: '#FFF',
        width: width/1.5,
        height: 50,
        borderRadius: 25,
        padding:5,
        marginTop:20,
    },
    bottomContainer: {
        paddingVertical:100,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        height: height/2,
        borderTopEndRadius: 20,
        borderTopStartRadius:20,
    },
    square: {
        width: 20,
        height:20,
        backgroundColor: '#123C69',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal: 10
    },
    inputInnerContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop: 10
    },
    questionContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignSelf: 'flex-start'
    },
    questionText: {
        fontSize:20,
        fontWeight: 'bold',
        color: '#FFF'
    },
    hintView: {
        backgroundColor: '#E8E8E8',
        borderRadius: 15,
        padding: 10,
        height: 40,
        width: 100,
        alignItems:'center'
    },
    hintScrollView: {
        height: 40

    },
    title: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 25,
        width: 200,
        marginBottom:20,
        marginLeft:20,
        marginTop: 20
    },
    inputContainer: {
        marginBottom: 40,
        alignItems: 'center'
    }
})