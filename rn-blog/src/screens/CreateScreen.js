import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Context} from '../context/BlogContext';
import Button from 'react-native-web';

export default function CreateScreen() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
      <View>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
        />
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput
            style={styles.input}
            value={content}
            onChangeText={(text) => setContent(text)}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    marginTop: 8,
    marginHorizontal: 16,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },

  label: {
    fontSize: 20,
    marginTop: 8,
    marginHorizontal: 16,
  },
});
