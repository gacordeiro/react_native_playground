import React, {useContext, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Context} from '../context/BlogContext';

export default function CreateScreen({navigation}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {addBlogPost} = useContext(Context);

  const returnToIndex = () => navigation.goBack();

  const addClicked = () => {
    console.log('addClicked');
    console.log('title: ', title);
    console.log('content: ', content);
    addBlogPost(title, content, returnToIndex);
  };

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
        <Button title='Add Blog Post' onPress={addClicked}/>
      </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    marginVertical: 8,
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
