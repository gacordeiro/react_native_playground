import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
      <View>
        <Text style={styles.text}>Hi there!</Text>
        <Button
            title="Go to Components Demo"
            onPress={() => navigation.navigate('Components')}
        />
        <Button
            title="Go to List Demo"
            onPress={() => navigation.navigate('List')}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
