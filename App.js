import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './src/screens/Main';
import { createAppContainer } from 'react-navigation';

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

const App = createAppContainer(AppNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
