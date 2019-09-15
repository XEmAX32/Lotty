import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Dimensions,
    KeyboardAvoidingView,
    TextInput,
    Text,
} from 'react-native';
import ChatText from '../components/ChatText'
import ChatDate from '../components/ChatDate';
import ChatPicker from '../components/ChatPicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Amplify, { Interactions } from 'aws-amplify';
import awsconfig from '../../aws-exports';

Amplify.configure(awsconfig);



async function test() {
    let userInput = "book";


    const response = await Interactions.send("lot_lot", userInput);
    console.log(response)
}

test();

const { height,width } = Dimensions.get('window');

const interactionList = [
    {   
        id:1,
        type: 'text',
        content: "Hi my name is Lotty and I'm your booking assistant!",
        relation: 0
    },
    {   
        id:2,
        type: 'text',
        content: 'Where do you want to fly from?',
        relation: 0
    },
    {
        id: 3,
        type: 'picker',
        relation: 1,
        selected: null,
        options: [{label:'ciao',value:'ciao'},{label:'hello',value:'hello'}]
    },
    {   
        id:4,
        type: 'text',
        content: 'How many passengers will be flying?',
        relation: 0
    },
    {
        id: 5,
        type: 'textinput',
        relation: 1
    },
    {
        id:6,
        type: 'text',
        content: "When do you want to fly?",
        relation: 0
    },
    {
        id:7,
        type: 'datepicker',
        date: new Date(),
        relation: 1
    },
    {
        id:8,
        type: 'text',
        content: "Which class do you want?",
        relation: 0
    },
    {
        id:9,
        type:'picker',
        relation: 1,
        selected: null,
        options: [{label:'ciao',value:'ciao'},{label:'hello',value:'hello'}]    
    },
    {
        id:10,
        type: 'text',
        content: "Which place do you prefere?",
        relation: 0
    },
    {
        id:11,
        type:'picker',
        relation: 1,
        selected: null,
        options: [{label:'ciao',value:'ciao'},{label:'hello',value:'hello'}]    
    },
    {
        id:12,
        type: 'text',
        content: "Do you have any extra lagguage?",
        relation: 0
    },
    {
        id:13,
        type:'picker',
        relation: 1,
        selected: null,
        options: [{label:'ciao',value:'ciao'},{label:'hello',value:'hello'}]    
    }
]

const hints = ["malpensa"]

export default class ChatBot extends React.Component{

    componentDidMount() {
        setTimeout(() => this.callChatBot(),2000);
    }

    constructor(props){
        super(props);
        setTimeout(() => this.next(),0)
        setTimeout(() => this.next(),0)
        setTimeout(() => this.next(),0)
        setTimeout(() => this.next(),0)
        setTimeout(() => this.next(),0)
        setTimeout(() => this.next(),0)
        setTimeout(() => this.next(),0)
        setTimeout(() => this.next(),0)
        setTimeout(() => this.next(),0)
        setTimeout(() => this.next(),0)
        setTimeout(() => this.next(),0)
        setTimeout(() => this.next(),0)
        setTimeout(() => this.next(),0)


    }

    callChatBot = async () => {
        const response = await Interactions.send("lot_lot", this.state.response == '' ? 'book' : this.state.response);
        
        this.setState({question: response.message})
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
        interactions: [],
        question: "",
        response: '',
    }

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
    }

    render() {
        this.getAirports();
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}><Text>hey</Text></TouchableOpacity>
                <Text style={styles.title}>Let’s find your perfect flight.</Text>
                <KeyboardAvoidingView style={styles.bottomContainer} behavior="padding" enabled>                    
                    <View style={styles.questionContainer}>
                        <View style={styles.square}/>
                        <Text style={styles.questionText}>{this.state.question}</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        {hints.map((hint,i) => <TouchableOpacity onPress={() => this.setState({response: hint})} key={i} style={styles.hintView}><Text>{hint}</Text></TouchableOpacity>)}
                        <View style={styles.inputInnerContainer}>
                            <TextInput 
                                value={this.state.response} 
                                style={styles.input} 
                                onChangeText={(text) => this.setState({response:text})} 
                            />
                            <TouchableOpacity 
                                style={styles.square}
                                onPress={() => {
                                    this.callChatBot();
                                    this.setState({response: ''})
                                }}
                            ><Text style={{color: '#FFF',}}>C</Text></TouchableOpacity>
                        </View>
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
        justifyContent:'flex-end',
        paddingTop:30,
        backgroundColor: '#123C69'
    },
    input: {
        borderWidth:2,
        borderColor: '#000',
        width: width/1.5,
        height: 50,
        borderRadius: 25,
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
        paddingHorizontal: 20
    },
    questionText: {
        fontSize:20,
        color: '#707070'
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
        fontSize: 25
    },
    inputContainer: {
        marginBottom: 40
    }
})