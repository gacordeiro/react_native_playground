import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {AuthContext} from '../context/AuthContext';

export default () => {
  const {signout} = useContext(AuthContext);
  return (
      <View>
        <Text style={styles.title}>AccountScreen</Text>
        <Button
            title="Sign Out"
            onPress={() => signout()}/>
      </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
});
