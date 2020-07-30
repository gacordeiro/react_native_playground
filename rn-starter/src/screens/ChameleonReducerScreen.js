import React, {useReducer} from 'react';
import {StyleSheet, View} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const INCREMENT = 32;
const DECREMENT = -32;

const reducer = (state, action) => {
  console.log("========================");
  console.log("action:", action);
  switch (action.type) {
    case 'change_red':
      return {...state, red: safeColor(state.red, action.payload)};
    case 'change_green':
      return {...state, green: safeColor(state.green, action.payload)};
    case 'change_blue':
      return {...state, blue: safeColor(state.blue, action.payload)};
    default:
      return state;
  }
};

const safeColor = (color, delta) => {
  let newColor = color + delta;
  return (newColor < 0) ? 0 : (newColor > 256) ? 256 : newColor;
};

const ChameleonReducerScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  console.log("state:", state);
  return (
      <View>
        <ColorCounter
            color="Red"
            onIncrease={() => dispatch({type: 'change_red', payload: INCREMENT})}
            onDecrease={() => dispatch({type: 'change_red', payload: DECREMENT})}
        />
        <ColorCounter
            color="Green"
            onIncrease={() => dispatch({type: 'change_green', payload: INCREMENT})}
            onDecrease={() => dispatch({type: 'change_green', payload: DECREMENT})}
        />
        <ColorCounter
            color="Blue"
            onIncrease={() => dispatch({type: 'change_blue', payload: INCREMENT})}
            onDecrease={() => dispatch({type: 'change_blue', payload: DECREMENT})}
        />
        <View
            style={{
              height: 150,
              width: 150,
              backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
            }}
        />
      </View>
  );
};

const styles = StyleSheet.create({});

export default ChameleonReducerScreen;