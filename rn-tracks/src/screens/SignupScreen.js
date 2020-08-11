import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text, Input} from 'react-native-elements';
import Spacer from '../components/Spacer';

export default ({navigation}) => {
  return (
      <View style={styles.container}>
        <Spacer>
          <Text h3>Sign Up for Tracker</Text>
        </Spacer>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 256,
    justifyContent: 'center',
    flex: 1,
  }
});
