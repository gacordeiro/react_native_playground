import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {AsyncStorage} from 'react-native';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'set_error':
      return {...state, errorMessage: action.payload};
    case 'set_token':
      return {...state, token: action.payload, errorMessage: null};
    default:
      return state;
  }
};

async function loginWith(dispatch, token) {
  await AsyncStorage.setItem('token', token);
  dispatch({type: 'set_token', payload: token});
}

const signup = (dispatch) => async ({email, password}) => {
  try {
    const response = await trackerApi.post('/signup', {email, password});
    await loginWith(dispatch, response.data.token);
  } catch (err) {
    dispatch({type: 'set_error', payload: 'Unable to sign up'});
  }
};

const signin = (dispatch) => async ({email, password}) => {
  try {
    const response = await trackerApi.post('/signin', {email, password});
    await loginWith(dispatch, response.data.token);
  } catch (err) {
    dispatch({type: 'set_error', payload: 'Unable to sign in'});
  }
};

const signout = (dispatch) => () => {
  dispatch({type: 'set_token', payload: null});
};

const init = createDataContext(
    authReducer,
    {signup, signin, signout},
    {token: null, errorMessage: ''},
);

export const AuthContext = init.Context;
export const AuthProvider = init.Provider;
