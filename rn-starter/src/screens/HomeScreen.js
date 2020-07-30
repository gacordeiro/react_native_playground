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
        <Button
            title="Go to Image Demo"
            onPress={() => navigation.navigate('Image')}
        />
        <Button
            title="Go to Counter Demo"
            onPress={() => navigation.navigate('Counter')}
        />
        <Button
            title="Go to Colors Demo"
            onPress={() => navigation.navigate('Colors')}
        />
        <Button
            title="Go to Chameleon Demo"
            onPress={() => navigation.navigate('Chameleon')}
        />
        <Button
            title="Go to Chameleon Reducer Demo"
            onPress={() => navigation.navigate('ChameleonReducer')}
        />

        <Button
            title="Go to Password Demo"
            onPress={() => navigation.navigate('Password')}
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
