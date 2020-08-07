import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {Provider} from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

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
            <Stack.Screen
                name="Create"
                component={CreateScreen}
                options={{title: 'New Post'}}
            />
            <Stack.Screen
                name="Edit"
                component={EditScreen}
                options={{title: 'Edit Post'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({});
