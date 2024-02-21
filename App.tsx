import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import { StackNavigationProp } from '@react-navigation/stack';
import {enableLatestRenderer} from 'react-native-maps';
enableLatestRenderer();

export type RootStackParamList = {
  LoginScreren: undefined;
  HomeScreen: undefined;
};

export const SCREENS: Record<string, keyof RootStackParamList> = {
  LoginScreren: 'LoginScreren',
  HomeScreen: 'HomeScreen',
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;

export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={SCREENS.LoginScreren} component={LoginScreen} />
        <Stack.Screen name={SCREENS.HomeScreen} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
