import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const PasswordScreen = () => {
  const [password, setPassword] = useState('');
  return (
      <View>
        <Text style={styles.text}>Enter Password:</Text>
        <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(newText) => setPassword(newText)}
        />
        {
          password.length > 0 && password.length < 6
              ? <Text style={styles.hint}>Must have at least 6 characters</Text>
              : null
        }
      </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 16,
    padding: 8,
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
  },

  text: {
    marginStart: 16,
    marginTop: 16,
    fontSize: 20,
    color: 'black',
  },

  hint: {
    marginStart: 16,
    fontSize: 14,
    color: 'red',
  },
});

export default PasswordScreen;