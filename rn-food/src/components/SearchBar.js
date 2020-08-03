import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = () => {
  return (
      <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle}/>
        <TextInput style={styles.inputStyle}/>
      </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: 48,
    borderRadius: 5,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#E0DDDD',
    flexDirection: 'row',
  },

  iconStyle: {
    fontSize: 32,
    alignSelf: 'center',
    marginHorizontal: 8,
  },

  inputStyle: {
    fontSize: 18,
    flex: 1,
  },
});

export default SearchBar;
