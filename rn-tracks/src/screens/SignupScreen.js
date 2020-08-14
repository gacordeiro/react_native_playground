import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

export default ({navigation}) => {
  const {state, signup} = useContext(AuthContext);

  const goToSignIn = () => {
    console.log('goToSignIn');
    navigation.navigate('Signin');
  };

  return AuthForm({
    title: 'Sign Up for Tracker',
    errorMessage: state.errorMessage,
    buttonTitle: 'Sign Up',
    buttonAction: signup,
    linkTitle: "Already have an account?\nGo back to Sign In.",
    linkAction: goToSignIn,
  });
};

const styles = StyleSheet.create({});
