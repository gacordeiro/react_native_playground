import React, {useContext, useLayoutEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';

export default function IndexScreen({navigation}) {
  const {state, deleteBlogPost} = useContext(Context);

  const createClicked = () => {
    console.log('createClicked');
    navigation.navigate('Create');
  };

  const deleteClicked = (item) => {
    console.log('deleteClicked: ', item.id);
    deleteBlogPost(item.id);
  };

  const showClicked = (item) => {
    console.log('showClicked: ', item);
    navigation.navigate('Show', {id: item.id, title: item.title});
  };

  const buildIndexPost = (item) => {
    return (
        <TouchableOpacity onPress={() => showClicked(item)}>
          <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={() => deleteClicked(item)}>
              <Feather style={styles.icon} name="trash"/>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
          <TouchableOpacity onPress={createClicked}>
            <Feather name="plus" style={styles.icon}/>
          </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
      <>
        <FlatList
            data={state}
            keyExtractor={(post) => `${post.id}`}
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
    borderBottomWidth: 1,
    borderColor: 'gray',
  },

  title: {
    fontSize: 18,
    paddingHorizontal: 16,
  },

  icon: {
    fontSize: 24,
    paddingHorizontal: 16,
  },
});
