import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

export default function CreateScreen({navigation}) {
  const {addBlogPost} = useContext(Context);

  const returnToIndex = () => navigation.goBack();

  const addClicked = (title, content) => {
    console.log('addClicked');
    console.log('title: ', title);
    console.log('content: ', content);
    addBlogPost(title, content, returnToIndex);
  };

  return (
      <BlogPostForm
          buttonTitle='Add Blog Post'
          saveAction={addClicked}
      />
  );
};

const styles = StyleSheet.create({});
