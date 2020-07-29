import React from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: 'Friend #1', age: '20'},
    {name: 'Friend #2', age: '12'},
    {name: 'Friend #3', age: '14'},
    {name: 'Friend #4', age: '45'},
    {name: 'Friend #5', age: '22'},
    {name: 'Friend #6', age: '12'},
    {name: 'Friend #7', age: '35'},
    {name: 'Friend #8', age: '21'},
    {name: 'Friend #9', age: '67'},
  ];

  return (
      <FlatList
          data={friends}
          keyExtractor={friend => friend.name}
          renderItem={({item}) => {
            return (
                <Text style={styles.textStyle}>
                  {item.name} - Age {item.age}
                </Text>);
          }}
      />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;