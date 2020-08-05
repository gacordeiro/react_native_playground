import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text} from 'react-native';
import yelp from '../api/yelp';

const ShowResultScreen = ({navigation}) => {
  const id = navigation.getParam('id');
  const [result, setResult] = useState(null);

  console.log(result);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {getResult(id);}, []);

  if (!result) return null;

  const renderItem = (item) => {
    return <Image style={styles.image} source={{uri: item}}/>;
  };

  return (
      <>
        <Text style={styles.title}>{result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) => renderItem(item)}
            contentContainerStyle={styles.listView}
        />
      </>
  );
};

const styles = StyleSheet.create({
  listView: {
    alignItems: 'center',
  },

  title: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  image: {
    width: 320,
    height: 240,
    borderRadius: 4,
    marginVertical: 8,
  },
});

export default ShowResultScreen;
