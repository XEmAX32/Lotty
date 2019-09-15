import React from 'react';
import { StyleSheet, Platform, StatusBar, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './src/screens/Main';
import { createAppContainer } from 'react-navigation';
import ChatBot from './src/screens/ChatBot';

const AppRouter = createStackNavigator(
  {
    Main: {
      screen: Main,
    },
    ChatBot: {
      screen: ChatBot
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'ChatBot'
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
