import React from 'react';
import { StyleSheet, Platform, StatusBar, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './src/screens/Main';
import { createAppContainer } from 'react-navigation';
import ChatBot from './src/screens/ChatBot'
import PlaceInfo from './src/screens/PlaceInfo'
import FlighInformation from './src/screens/FlighInformation'
import MyFlights from './src/screens/MyFlights'

const AppRouter = createStackNavigator(
	{
		Main: {
			screen: Main,
		},
		ChatBot: {
			screen: ChatBot
		},
		PlaceInfo: {
			screen: PlaceInfo
		},
		FlighInformation: {
			screen: FlighInformation
		},
		MyFlights: {
			screen: MyFlights
		}
	},
	{
		headerMode: 'none',
		initialRouteName: 'Main'
	}
)

const AppRouterContainer = createAppContainer(AppRouter);

class App extends React.Component {
	
	render(){
		
		return (
			<AppRouterContainer />
		);
	}
}

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
