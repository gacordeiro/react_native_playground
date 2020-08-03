import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';

// Client ID
// CjsEGN6PghCQyoYviDDsHw
//
// API Key
// g28ntXbEfpypw9s-vHz9_E3ywiHuphODFxSlWzRx6UHfdxGF0OD_M7bJkihif_A6Busmljz84Zm0SOruf62oyAgVvXuWl76rVIBI5aJgnTPHbq42fbtuj5I9KH0oX3Yx

const SearchScreen = () => {
  return (
      <View>
        <SearchBar/>
        <Text>Search Screen</Text>
      </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
