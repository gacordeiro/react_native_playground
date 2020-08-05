import React from 'react';
import {StyleSheet, Text} from 'react-native';

const ShowResultScreen = ({navigation}) => {
  const id = navigation.getParam('id');
  return (
      <>
        <Text>ShowResultScreen for ${id}</Text>
      </>
  );
};

const styles = StyleSheet.create({
});

export default ShowResultScreen;
