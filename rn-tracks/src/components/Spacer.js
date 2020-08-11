import React from 'react';
import {StyleSheet, View} from 'react-native';

export default ({children}) => {
  return <View style={styles.spacer}>{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    margin: 16
  }
});
