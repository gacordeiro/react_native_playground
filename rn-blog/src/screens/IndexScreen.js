import React, {useContext} from 'react';
import {
  Button, FlatList, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';

export default function IndexScreen() {
  const {state, addBlogPost, deleteBlogPost} = useContext(Context);

  const buildIndexPost = (item) => {
    return (
        <View style={styles.row}>
          <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
            <Feather style={styles.icon} name="trash"/>
          </TouchableOpacity>
        </View>
    );
  };

  return (
      <>
        <Button title="Add Post" onPress={addBlogPost}/>
        <FlatList
            data={state}
            keyExtractor={(post) => post.title}
            renderItem={({item}) => buildIndexPost(item)}
        />
      </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },

  title: {
    fontSize: 18,
  },

  icon: {
    fontSize: 24,
  },
});
