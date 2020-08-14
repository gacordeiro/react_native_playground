import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default ({navigation}) => {
  return (
      <View>
        <Text style={styles.title}>TrackListScreen</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('TrackDetail')}/>
      </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
});
