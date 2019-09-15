import React from 'react';
import { StyleSheet, Platform, StatusBar, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './src/screens/Main';
import { createAppContainer } from 'react-navigation';
import ChatBot from './src/screens/ChatBot'
import PlaceInfo from './src/screens/PlaceInfo'
import FlightInformation from './src/screens/FlightInformation'
import MyFlights from './src/screens/MyFlights'
import Confirmation from './src/screens/Confirmation'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import { Asset } from 'expo-asset';

function cacheImages(images) {
	return images.map(image => {
		if (typeof image === 'string') {
			return Image.prefetch(image);
		} else {
			return Asset.fromModule(image).downloadAsync();
		}
	});
}

function cacheFonts(fonts) {
	return fonts.map(font => Font.loadAsync(font));
}

const AppRouter = createStackNavigator({
	Main: {
		screen: Main,
	},
	ChatBot: {
		screen: ChatBot
	},
	Confirmation: {
		screen: Confirmation
	},
	FlightInformation: {
		screen: FlightInformation
	},
	PlaceInfo: {
		screen: PlaceInfo
	},
	FlightInformation: {
		screen: FlightInformation
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
	
	state = {
		loading: true
	}

	async _loadAssetsAsync() {
		const imageAssets = cacheImages([
		  require('./assets/Lotty.png'),
		  require("./assets/SH/WAW.jpg"),
		  require("./assets/SH/MXP.jpg"),
		  require("./assets/SH/OTP.jpg"),
		  require("./assets/SH/BUD.jpg"),
		  require('./assets/logoLOT.png')
		]);
	
		const fontAssets = cacheFonts([{
			'Cera-Pro-Bold': require('./assets/fonts/Cera_Pro_Bold.otf'),
			'Cera-Pro-Medium': require('./assets/fonts/Cera_Pro_Medium.otf'),
			'Tiempos': require('./assets/fonts/TiemposHeadline-Bold.otf')
		}]);
	
		await Promise.all([...imageAssets, ...fontAssets]);
	}

	render(){
		if(this.state.loading) {
			return (
				<AppLoading
					startAsync={this._loadAssetsAsync}
					onFinish={() => this.setState({ loading: false })}
					onError={console.warn}
				/>
			)
		} else {
			return (
				<AppRouterContainer />
			);
		}
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
