import React from 'react';
import {StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ShowResultScreen from './src/screens/ShowResultScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ShowResult: {
    screen: ShowResultScreen,
    navigationOptions: {
      title: "Details"
    }
  },
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Search',
  },
});

const styles = StyleSheet.create({});

export default createAppContainer(navigator);
