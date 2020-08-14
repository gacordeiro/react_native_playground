import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';

const ORIGIN_LAT = -23.531759;
const ORIGIN_LON = -46.68288;

export default () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: ORIGIN_LAT + i * 0.0001,
        longitude: ORIGIN_LON + i * 0.0001,
      });
    } else {
      points.push({
        latitude: ORIGIN_LAT - i * 0.0002,
        longitude: ORIGIN_LON + i * 0.0001,
      });
    }
  }

  return (
      <MapView
          style={styles.map}
          initialRegion={{
            latitude: ORIGIN_LAT,
            longitude: ORIGIN_LON,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
      >
        <Polyline coordinates={points}/>
      </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
