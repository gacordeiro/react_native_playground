import React, {useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthContext} from '../context/AuthContext';

export default () => {
  const {signout} = useContext(AuthContext);
  return (
      <SafeAreaView>
        <Text style={styles.title}>AccountScreen</Text>
        <Button
            title="Sign Out"
            onPress={() => signout()}/>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
});
