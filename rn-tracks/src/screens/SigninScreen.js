import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

export default ({navigation}) => {
  const {state, clearErrors, signin} = useContext(AuthContext);

  const goToSignUp = () => {
    console.log('goToSignUp');
    navigation.navigate('Signup');
  };

  return AuthForm({
    title: 'Sign In for Tracker',
    errorMessage: state.errorMessage,
    clearErrors: clearErrors,
    buttonTitle: 'Sign In',
    buttonAction: signin,
    linkTitle: "Don't have an account?\nSign Up instead!",
    linkAction: goToSignUp,
  });
};

const styles = StyleSheet.create({});
