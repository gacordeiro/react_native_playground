import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const INCREMENT = 32;
const DECREMENT = -32;

const ChameleonScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const safeSetColor = (set, color, delta) => {
    let newColor = color + delta;
    if (newColor >= 0 && newColor <= 256) set(newColor);
  };

  return (
      <View>
        <ColorCounter
            color="Red"
            onIncrease={() => safeSetColor(setRed, red, INCREMENT)}
            onDecrease={() => safeSetColor(setRed, red, DECREMENT)}
        />
        <ColorCounter
            color="Green"
            onIncrease={() => safeSetColor(setGreen, green, INCREMENT)}
            onDecrease={() => safeSetColor(setGreen, green, DECREMENT)}
        />
        <ColorCounter
            color="Blue"
            onIncrease={() => safeSetColor(setBlue, blue, INCREMENT)}
            onDecrease={() => safeSetColor(setBlue, blue, DECREMENT)}
        />
        <View
            style={{
              height: 150,
              width: 150,
              backgroundColor: `rgb(${red}, ${green}, ${blue})`,
            }}
        />
      </View>
  );
};

const styles = StyleSheet.create({});

export default ChameleonScreen;