import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './src/screens/Main';
import { createAppContainer } from 'react-navigation';
import * as Font from 'expo-font';	//pietro ringrazia
import { AppLoading } from 'expo';

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
    },
  },
  {
    headerMode: 'none',
  }
)

const AppNav = createAppContainer(AppNavigator);

class App extends React.Component {
	
	state = {
		isLoadingComplete: false
	}
	
	setLoadingComplete(){
		this.setState({isLoadingComplete: true})
	}
	
// 	const [isLoadingComplete, setLoadingComplete] = useState(false);
	
	render(){
		
		if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
			return (
				<AppLoading
					startAsync={loadResourcesAsync}
					onError={(e) => console.warn(e)}
					onFinish={() => handleFinishLoading(this.setLoadingComplete)}
				/>
			);
		} else {
			return (
				<View style={styles.container}>
					{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
					<AppNav/>
				</View>
			);
		}
	}
}

/**/
async function loadResourcesAsync() {
	await Promise.all([
		/*Asset.loadAsync([
			require('./assets/images/robot-dev.png'),
			require('./assets/images/robot-prod.png'),
		]),*/
		Font.loadAsync({
			'Cera Pro':		require('./assets/fonts/Cera_Pro_Medium.otf'),
			'Cera Pro Bold':	require('./assets/fonts/Cera_Pro_Bold.otf'),
			'TiemposHeadline':	require('./assets/fonts/TiemposHeadline-Bold.otf')
		})
	]);
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
