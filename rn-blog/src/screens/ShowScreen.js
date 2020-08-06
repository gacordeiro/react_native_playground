import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Context} from '../context/BlogContext';

export default function ShowScreen({route}) {
  const {state} = useContext(Context);
  const blogPost = state.find((post) => post.id === route.params.id);
  return (
      <View>
        <Text>{blogPost.title}</Text>
      </View>
  );
};

const styles = StyleSheet.create({});
