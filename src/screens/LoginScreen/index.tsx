import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Config from 'react-native-config';
import { StackNavigation } from '../../../App';
import { AppIcon } from '../../assets/AllIcons';
GoogleSignin.configure({
  webClientId: Config.GOOGLE_ID,
});

async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

const checkStatus = () => {
  return GoogleSignin.isSignedIn();
};
export default function () {
  const navigation = useNavigation<StackNavigation>();

  useEffect(() => {
    async function fetchData() {
      // signOut()
      const isLoggedIn = await checkStatus();
      if (isLoggedIn) {
        navigation.navigate('HomeScreen');
      } else {
      }
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  const GoogleSignin = async () => {
    onGoogleButtonPress()
      .then(() => {
        navigation.navigate('HomeScreen');
      })
      .catch(() => {
        // console.log('error', e)
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#eff6ff'} barStyle={'dark-content'} />
      <View style={styles.topView}>
        <AppIcon width={45} height={45} fill="#171717" />
        <Text style={styles.title}>AST</Text>
        <Text style={styles.textSty}>Find nearby Hospitals</Text>
      </View>
      <View style={styles.bottomView}>
        <Pressable style={styles.button} onPress={GoogleSignin}>
          <Text style={styles.buttTxt}>Continue with Google</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#eff6ff'},
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0C0C0C',
  },
  topView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  textSty: {
    color: '#121212',
    fontSize: 18,
  },
  bottomView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    elevation: 4,
    shadowColor: '#000',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: '#3b82f6',
  },
  buttTxt: {
    color: '#fff',
    fontSize: 16,
  },
});
