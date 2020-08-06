import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {Provider} from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
      <Provider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
                name="Index"
                component={IndexScreen}
                options={{title: 'Blog'}}
            />
            <Stack.Screen
                name="Show"
                component={ShowScreen}
                options={({route}) => ({title: route.params.title})}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({});
