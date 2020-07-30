import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BoxScreen = () => {
  return (
      <View style={styles.view}>
        <Text style={styles.text1}>Child #1</Text>
        <Text style={styles.text2}>Child #2</Text>
        <Text style={styles.text3}>Child #3</Text>
        <Text style={styles.text4}>Child #4</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'space-around',
    //flexDirection: 'row',

    height: 200,
    borderWidth: 3,
    borderColor: 'black',
  },

  text1: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'red',
  },

  text2: {
    flex: 2,
    borderWidth: 3,
    borderColor: 'green',
    position: 'absolute',
    fontSize: 18,
    alignSelf: 'flex-end',
    top: 10,
    right: 10,
  },

  text3: {
    flex: 3,
    borderWidth: 3,
    borderColor: 'blue',
    alignSelf: 'flex-start',
  },

  text4: {
    borderWidth: 3,
    borderColor: 'yellow',
    ...StyleSheet.absoluteFill,
  },
});

export default BoxScreen;