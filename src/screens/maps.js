
import React, { useState, useEffect } from 'react';
import { View, StyleSheet , Text} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const MapExample = () => {
  const [latitude, setLatitude] = useState(48.858370);
  const [longitude, setLongitude] = useState(2.294481);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.cont}>
          <Text style={styles.text}>Voici ou vous pouvez nous retrouver</Text>
        </View>
        <View style={{ flex:9}}>
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
        </View>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',

  },
  cont: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});


export default MapExample;