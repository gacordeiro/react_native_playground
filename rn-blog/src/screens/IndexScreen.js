import React, {useContext} from 'react';
import {Button, FlatList, StyleSheet, Text} from 'react-native';
import BlogContext from '../context/BlogContext';

export default function IndexScreen() {
  const {data, addBlogPost} = useContext(BlogContext);

  return (
      <>
        <Button title="Add Post" onPress={addBlogPost}/>
        <FlatList
            data={data}
            keyExtractor={(post) => post.title}
            renderItem={({item}) => {
              return <Text>{item.title}</Text>;
            }}
        />
      </>
  );
};

const styles = StyleSheet.create({});
