import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import Map from '../components/Map';

export default () => {
  return (
      <SafeAreaView forceInset={{top: 'always'}}>
        <Text h2>TrackCreateScreen</Text>
        <Map/>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
});
