import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorsScreen from './src/screens/ColorsScreen';
import ChameleonScreen from './src/screens/ChameleonScreen';
import ChameleonReducerScreen from './src/screens/ChameleonReducerScreen';

const navigator = createStackNavigator(
    {
      Home: HomeScreen,
      Components: ComponentsScreen,
      List: ListScreen,
      Image: ImageScreen,
      Counter: CounterScreen,
      Colors: ColorsScreen,
      Chameleon: ChameleonScreen,
      ChameleonReducer: ChameleonReducerScreen,
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        title: 'App',
      },
    },
);

export default createAppContainer(navigator);
