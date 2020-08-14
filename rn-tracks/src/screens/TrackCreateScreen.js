import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default () => {
  return (
      <SafeAreaView>
        <Text style={styles.title}>TrackCreateScreen</Text>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
});
