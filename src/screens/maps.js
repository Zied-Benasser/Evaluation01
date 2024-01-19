
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const MapExample = () => {
  const [latitude, setLatitude] = useState(48.858370);
  const [longitude, setLongitude] = useState(2.294481);

  return (
      <View style={{ flex: 1 }}>
        {(
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              coordinate={{
                latitude: latitude,
                longitude: longitude,
              }}
            />
          </MapView>
        )}
      </View>
    
  );
};

export default MapExample;