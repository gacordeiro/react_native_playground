import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput} from 'react-native';

const BlogPostForm = ({
  initialTitle,
  initialContent,
  buttonTitle,
  saveAction,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  return (
      <>
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
        <Button title={buttonTitle} onPress={() => saveAction(title, content)}/>
      </>
  );
};

BlogPostForm.defaultProps = {
  initialTitle: '',
  initialContent: '',
}

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

export default BlogPostForm;
