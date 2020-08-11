import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return {...state, isSignedIn: true}
    case 'signout':
      return {...state, isSignedIn: false}
    default:
      return state;
  }
};

const signup = (dispatch) => ({email, password}) => {
  //TODO make api request and modify state
  console.log('signup');
  dispatch({type: 'signup'});
};

const signin = (dispatch) => ({email, password}) => {
  //TODO make api request and modify state
  console.log('signin');
  dispatch({type: 'signin'});
};

const signout = (dispatch) => () => {
  //TODO make api request and modify state
  console.log('signout');
  dispatch({type: 'signout'});
};

const init = createDataContext(
    authReducer,
    {signup, signin, signout},
    {isSignedIn: false},
);

export const AuthContext = init.Context;
export const AuthProvider = init.Provider;
