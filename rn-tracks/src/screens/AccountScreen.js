import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default () => {
  return (
      <View>
        <Text style={styles.title}>AccountScreen</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
});
