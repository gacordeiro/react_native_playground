import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultByPrice = (price) => {
    return results.filter(result => {
      return price === result.price;
    });
  };

  const buildBody = () => {
    return (
        <ScrollView contentInset={{bottom: 80}}>
          <ResultsList
              title="Dirty Cheap ($)"
              results={filterResultByPrice('$')}/>
          <ResultsList
              title="Cost Effective ($$)"
              results={filterResultByPrice('$$')}/>
          <ResultsList
              title="Decent Meal ($$$)"
              results={filterResultByPrice('$$$')}/>
          <ResultsList
              title="Big Spender ($$$$)"
              results={filterResultByPrice('$$$$')}/>
        </ScrollView>
    );
  };

  return (
      <>
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}/>
        {errorMessage
            ? <Text style={styles.error}>{errorMessage}</Text>
            : buildBody()}
      </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 14,
    marginHorizontal: 16,
    marginTop: 8,
  },
});

export default SearchScreen;
