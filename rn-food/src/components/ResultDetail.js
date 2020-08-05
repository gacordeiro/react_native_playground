import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ResultDetail = ({result}) => {
  return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: result.image_url}}/>
        <Text style={styles.name}>{result.name}</Text>
        <Text style={styles.reviews}>
          {result.rating} Stars, {result.review_count} Reviews
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
  },

  image: {
    width: 240,
    height: 120,
    borderRadius: 4,
    marginBottom: 8,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  reviews: {
    color: 'gray',
    fontSize: 14,
    marginBottom: 8,
  },
});

export default ResultDetail;
