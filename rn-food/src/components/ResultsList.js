import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ResultDetail from './ResultDetail';
import {withNavigation} from 'react-navigation';

const ResultsList = ({title, results, navigation}) => {
  console.log(` - Found ${results.length} results for ${title}`);

  const onPress = (item) => {
    console.log(`onPress: `, item.name);
    navigation.navigate('ShowResult');
  };

  const renderItem = (item) => {
    return (
        <TouchableOpacity onPress={() => onPress(item)}>
          <ResultDetail result={item}/>
        </TouchableOpacity>
    );
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(results) => results.id}
            renderItem={({item}) => renderItem(item)}
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

export default withNavigation(ResultsList);
