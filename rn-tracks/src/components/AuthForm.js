import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Spacer from './Spacer';
import {Button, Input, Text} from 'react-native-elements';
import NavLink from './NavLink';

export default ({
  title,
  errorMessage,
  buttonTitle,
  buttonAction,
  linkTitle,
  linkAction,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
      <View style={styles.container}>
        <Spacer>
          <Text h3>{title}</Text>
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
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        <Spacer>
          <Button
              title={buttonTitle}
              onPress={() => buttonAction({email, password})}/>
        </Spacer>
        <NavLink linkTitle={linkTitle} linkAction={linkAction}/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 256,
    justifyContent: 'center',
    flex: 1,
  },

  error: {
    marginHorizontal: 16,
    fontSize: 16,
    color: 'red',
  },
});
