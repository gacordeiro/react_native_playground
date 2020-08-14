import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import React from 'react';

export default ({linkTitle, linkAction}) => {
  return (
      <TouchableOpacity onPress={linkAction}>
        <Text style={styles.link}>{linkTitle}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    paddingVertical: 16,
    marginHorizontal: 16,
    textAlign: 'center',
    fontSize: 16,
    color: 'dodgerblue',
  },
});
