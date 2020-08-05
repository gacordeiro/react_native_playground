import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    console.log(`search for: ${searchTerm}`);
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
      setErrorMessage('');
    } catch (err) {
      console.log(err);
      setErrorMessage('Something went wrong :(');
    }
  };

  useEffect(() => { searchApi('jumanji'); }, []);

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
