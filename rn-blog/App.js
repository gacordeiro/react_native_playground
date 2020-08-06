import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import IndexScreen from './src/screens/IndexScreen';
import {Provider} from './src/context/BlogContext';

const Stack = createStackNavigator();

export default function App() {
  return (
      <Provider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
                name="Index"
                component={IndexScreen}
                options={{title: 'Blog Index'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({});
