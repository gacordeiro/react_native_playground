import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ResultDetail from './ResultDetail';

const ResultsList = ({title, results}) => {
  console.log(` - Found ${results.length} results for ${title}`);
  return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(results) => results.id}
            renderItem={({item}) => <ResultDetail result={item}/>}
        />

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  results: {
    color: 'gray',
    fontSize: 14,
    marginHorizontal: 16,
    marginVertical: 16,
  },
});

export default ResultsList;
