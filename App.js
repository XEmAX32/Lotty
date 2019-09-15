import React from 'react';
import { StyleSheet, Platform, StatusBar, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './src/screens/Main';
import { createAppContainer } from 'react-navigation';
import ChatBot from './src/screens/ChatBot'
// import PlaceInfo from './src/screens/PlaceInfo'


const AppRouter = createStackNavigator(
	{
		Main: {
			screen: Main,
		},
		ChatBot: {
			screen: ChatBot
		}
		/*PlaceInfo: {
			screen: PlaceInfo
		}*/
	},
	{
		headerMode: 'none',
		initialRouteName: 'Main'
	}
)

const AppRouterContainer = createAppContainer(AppRouter);

class App extends React.Component {
	
	render(){
<<<<<<< HEAD
    
    return (
      <AppRouterContainer />
    );
  }
=======
		
		return (
			<AppRouterContainer />
		);
	}
>>>>>>> 4a5fee8767d0679f4511a4cc13d2486610d64581
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
