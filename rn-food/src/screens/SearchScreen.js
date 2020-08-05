import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  return (
      <View>
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
        />
        {errorMessage
            ? <Text style={styles.error}>{errorMessage}</Text>
            : <Text style={styles.result}>Found {results.length} results</Text>}
      </View>
  );
};

const styles = StyleSheet.create({
  result: {
    color: 'gray',
    fontSize: 14,
    marginTop: 8,
    marginHorizontal: 16,
  },

  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 8,
    marginHorizontal: 16,
  },
});

export default SearchScreen;
