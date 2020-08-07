import React, {useContext, useEffect, useLayoutEffect} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {EvilIcons} from '@expo/vector-icons';

export default function ShowScreen({navigation, route}) {
  const {state} = useContext(Context);
  const blogPost = state.find((post) => post.id === route.params.id);

  const editClicked = () => {
    console.log('editClicked');
    navigation.navigate('Edit', {id: blogPost.id});
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
          <TouchableOpacity onPress={editClicked}>
            <EvilIcons name="pencil" style={styles.icon}/>
          </TouchableOpacity>
      ),
    });
    return navigation.addListener('focus', () => {
      navigation.setOptions({title: blogPost.title});
    });
  }, [navigation]);

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

  icon: {
    fontSize: 32,
    paddingHorizontal: 16,
  },
});
