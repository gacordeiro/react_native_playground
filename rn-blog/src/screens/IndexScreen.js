import React, {useContext} from 'react';
import {Button, FlatList, StyleSheet, Text} from 'react-native';
import {Context} from '../context/BlogContext';

export default function IndexScreen() {
  const {state, addBlogPost} = useContext(Context);

  return (
      <>
        <Button title="Add Post" onPress={addBlogPost}/>
        <FlatList
            data={state}
            keyExtractor={(post) => post.title}
            renderItem={({item}) => {
              return <Text>{item.title}</Text>;
            }}
        />
      </>
  );
};

const styles = StyleSheet.create({});
