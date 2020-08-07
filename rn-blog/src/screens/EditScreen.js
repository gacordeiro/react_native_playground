import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

export default function EditScreen({navigation, route}) {
  const {state} = useContext(Context);
  const blogPost = state.find((post) => post.id === route.params.id);
  const {editBlogPost} = useContext(Context);

  const returnToIndex = () => navigation.goBack();

  const saveClicked = (title, content) => {
    console.log('saveClicked');
    console.log('title: ', title);
    console.log('content: ', content);
    editBlogPost(blogPost.id, title, content, returnToIndex);
  };

  return (
      <BlogPostForm
          initialTitle={blogPost.title}
          initialContent={blogPost.content}
          buttonTitle='Save Blog Post'
          saveAction={saveClicked}
      />
  );
};

const styles = StyleSheet.create({});
