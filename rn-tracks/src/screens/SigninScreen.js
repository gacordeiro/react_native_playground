import React, {useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text, Input} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {AuthContext} from '../context/AuthContext';

export default ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {state, signin} = useContext(AuthContext);

  console.log('Sign In Screen: ', state);
  return (
      <View style={styles.container}>
        <Spacer>
          <Text h3>Sign In for Tracker</Text>
        </Spacer>
        <Spacer>
          <Input
              label="Email"
              autoCorrect={false}
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
          />
        </Spacer>
        <Spacer>
          <Input
              label="Password"
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
          />
        </Spacer>
        <Spacer>
          <Button
              title="Sign In"
              onPress={() => signin(email, password)}/>
        </Spacer>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 256,
    justifyContent: 'center',
    flex: 1,
  }
});
