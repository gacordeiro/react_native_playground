import React, {useContext} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {Context} from '../context/BlogContext';

export default function ShowScreen({route}) {
  const {state} = useContext(Context);
  const blogPost = state.find((post) => post.id === route.params.id);
  return (
      <ScrollView>
        <Text style={styles.content}>{blogPost.content}</Text>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    fontSize: 18,
    padding: 16,
  },
});
