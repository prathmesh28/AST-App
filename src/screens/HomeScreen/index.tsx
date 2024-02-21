import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {
  PERMISSIONS,
  RESULTS,
  checkMultiple,
  requestMultiple,
} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import Animated, {SlideInDown, SlideOutDown} from 'react-native-reanimated';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../../App';
import {CloseSVG, HospitalSVG, LocSVG} from '../../assets/AllIcons';
import Config from 'react-native-config';
const RADIUS = 1500;
const TYPE = 'hospital';
const KEYWORD = 'hospital';
const KEY = Config.MAPS_API;
const signOut = async () => {
  try {
    await GoogleSignin.signOut();
  } catch (error) {
    console.error(error);
  }
};

type locationType = {
  latitude: number;
  longitude: number;
};

type markerInfo = {
  lat: number;
  lng: number;
  icon: string;
  name: string;
  place_id: string;
  rating: number;
  vicinity: string;
};
const App = () => {
  const [location, setLocation] = useState<locationType | null | 'blocked'>(
    null,
  );
  const [hospitals, setHospitals] = useState<markerInfo[]>([]);
  const [selectedHospital, setSelectedHospital] = useState<markerInfo | null>(
    null,
  );

  const navigation = useNavigation<StackNavigation>();
  const checkPermissionFn = () => {
    setLocation(null)
    checkMultiple([
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
    ])
      .then(result => {
        switch (
          result['android.permission.ACCESS_COARSE_LOCATION'] ||
          result['android.permission.ACCESS_FINE_LOCATION']
        ) {
          // case RESULTS.UNAVAILABLE:
          //   console.log(
          //     'This feature is not available (on this device / in this context)',
          //   );
          //   break;
          case RESULTS.GRANTED:
            getLocation();
            // console.log('The permission is granted');
            break;
          // case RESULTS.BLOCKED:
          //   console.log('The permission is denied and not requestable anymore');
          //   break;

          default: {
            requestMultiple([
              PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
              PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
            ]).then(statuses => {
              console.log(statuses);
              if (
                statuses['android.permission.ACCESS_COARSE_LOCATION'] ===
                  'granted' ||
                statuses['android.permission.ACCESS_FINE_LOCATION'] ===
                  'granted'
              ) {
                getLocation();
              } else {
                setLocation('blocked');
              }
            });
          }
        }
      })
      .catch(error => {
        // …
      });
  };
  useEffect(() => {
    checkPermissionFn();
  }, []);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      async position => {
        const {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
        const HospitalList = await fetchHospitals(latitude, longitude);
        setHospitals(HospitalList);
      },
      error => {
        // console.log(error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const logout = () => {
    setSelectedHospital(null);
    setLocation(null);
    signOut();
    navigation.reset({
      index: 0,
      routes: [{name: 'LoginScreren'}],
    });
  };

  return (
    <View style={styles.container}>
      {location !== null && location !== 'blocked' ? (
        <MapView
          style={styles.map}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          userInterfaceStyle="dark">
          {location && (
            <Marker coordinate={location}>
              <View>
                <LocSVG width={30} height={30} fill="#1e3a8a" />
              </View>
            </Marker>
          )}
          {hospitals.map((data, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: data.lat,
                longitude: data.lng,
              }}
              onPress={() =>
                selectedHospital?.place_id === data?.place_id
                  ? setSelectedHospital(null)
                  : setSelectedHospital(data)
              }
              tracksViewChanges={false}>
              <View>
                <HospitalSVG width={30} height={30} />
              </View>
            </Marker>
          ))}
        </MapView>
      ) : (
        <Pressable
          style={styles.loadinView}
          onPress={location === 'blocked' ? () => checkPermissionFn() : null}>
          {location === 'blocked' ? (
            <Text style={styles.loadTxt}>
              Please Allow Location Permission from App Settings!
            </Text>
          ) : (
            <ActivityIndicator color={'#60a5fa'} size={'large'} />
          )}
        </Pressable>
      )}
      <Animated.View style={styles.header}>
        <Text style={styles.title}>AST</Text>
        <Pressable style={styles.logoutButt} onPress={logout}>
          <Text style={styles.logoutTxt}>Logout</Text>
        </Pressable>
      </Animated.View>
      {selectedHospital && (
        <Animated.View
          style={styles.infoContainer}
          entering={SlideInDown}
          exiting={SlideOutDown}>
          <View>
            <View style={styles.rowView}>
              <Animated.Text style={styles.infoTitle}>
                {selectedHospital.name}
              </Animated.Text>
              <Pressable
                style={styles.infoClose}
                onPress={() => setSelectedHospital(null)}>
                <CloseSVG width={30} height={30} />
              </Pressable>
            </View>
            <Text style={styles.infoAdd}>{selectedHospital.vicinity}</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.ratingsTxt}>
              Ratings: {selectedHospital.rating}
            </Text>
            <Pressable
              style={styles.dirButt}
              onPress={() => {
                const link = `https://www.google.com/maps/search/?api=1&query=Eiffel%20Tower&query_place_id=${selectedHospital.place_id}`;
                Linking.openURL(link);
              }}>
              <Text style={styles.dixTxt}>Directions</Text>
            </Pressable>
          </View>
        </Animated.View>
      )}
    </View>
  );
};
const fetchHospitals = async (latitude: number, longitude: number) => {
  const URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${RADIUS}&type=${TYPE}&keyword=${KEYWORD}&key=${KEY}`;
  const response = await fetch(URL);
  const data = await response.json();
  const HospitalData = data.results?.map(
    ({
      geometry,
      icon,
      name,
      place_id,
      rating,
      vicinity,
    }: {
      geometry: any;
      icon: string;
      name: string;
      place_id: string;
      rating: number;
      vicinity: string;
    }) => {
      return {
        lat: geometry.location.lat,
        lng: geometry.location.lng,
        icon,
        name,
        place_id,
        rating,
        vicinity,
      };
    },
  );
  return HospitalData;
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff6ff',
  },
  loadinView: {
    flex: 1,
    backgroundColor: '#eff6ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: '#eff6ff',
    paddingHorizontal: 18,
    gap: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 18,
  },
  loadTxt: {
    color: '#000',
    fontSize: 16,
  },
  logoutButt: {
    padding: 8,
  },
  logoutTxt: {
    fontSize: 18,
    color: '#000',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    padding: 18,
    gap: 10,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
  },
  infoAdd: {
    fontSize: 18,
    color: '#000',
  },
  infoClose: {
    paddingVertical: 5,
  },
  ratingsTxt: {
    fontSize: 14,
    color: '#000',
  },
  dirButt: {
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#3b82f6',
  },
  dixTxt: {
    color: '#fff',
    fontSize: 16,
  },
});
