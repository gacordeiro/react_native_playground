import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import {AuthContext, AuthProvider} from './src/context/AuthContext';

const Stack = createStackNavigator();
const TrackStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LoginFlow() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Signin" component={SigninScreen} options={{
          header: () => null,
        }}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{
          header: () => null,
        }}/>
      </Stack.Navigator>
  );
}

function TrackFlow() {
  return (
      <TrackStack.Navigator>
        <TrackStack.Screen name="TrackList" component={TrackListScreen}/>
        <TrackStack.Screen name="TrackDetail" component={TrackDetailScreen}/>
      </TrackStack.Navigator>
  );
}

function MainFlow() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="TrackFlow" component={TrackFlow}/>
        <Tab.Screen name="TrackCreate" component={TrackCreateScreen}/>
        <Tab.Screen name="Account" component={AccountScreen}/>
      </Tab.Navigator>
  );
}

const App = () => {
  const {state} = useContext(AuthContext);
  console.log(state);
  return (
      <AuthProvider>
        <NavigationContainer>
          {state.isSignedIn ? MainFlow() : LoginFlow()}
        </NavigationContainer>
      </AuthProvider>
  );
}

const styles = StyleSheet.create({});

export default () => <AuthProvider><App/></AuthProvider>
