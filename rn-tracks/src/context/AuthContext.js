import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {AsyncStorage} from 'react-native';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'set_error':
      return {...state, errorMessage: action.payload};
    case 'set_token':
      return {...state, token: action.payload, errorMessage: null};
    case 'clear_errors':
      return {...state, errorMessage: null};
    default:
      return state;
  }
};

async function loginWith({dispatch, apiCall, errorMessage}) {
  try {
    const response = await apiCall();
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({type: 'set_token', payload: response.data.token});
  } catch (err) {
    dispatch({type: 'set_error', payload: errorMessage});
  }
}

const signup = (dispatch) => async ({email, password}) => await loginWith({
  dispatch,
  apiCall: () => trackerApi.post('/signup', {email, password}),
  errorMessage: 'Unable to sign up',
});

const signin = (dispatch) => async ({email, password}) => await loginWith({
  dispatch,
  apiCall: () => trackerApi.post('/signin', {email, password}),
  errorMessage: 'Unable to sign in',
});

const signout = (dispatch) => () => {
  dispatch({type: 'set_token', payload: null});
};

const clearErrors = (dispatch) => () => {
  dispatch({type: 'clear_errors'});
};

const init = createDataContext(
    authReducer,
    {signup, signin, signout, clearErrors},
    {token: null, errorMessage: ''},
);

export const AuthContext = init.Context;
export const AuthProvider = init.Provider;
