import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from "./components/Dashboard"
import HomeScreen from './components/HomeScreen';

const AppNavigator = createStackNavigator(
  {
    home: HomeScreen,
    dashboard: Dashboard,
  },
  {
    initialRouteName: 'home',
  }
);

export default createAppContainer(AppNavigator)