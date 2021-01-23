/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import GuestScreen from './src/screens/GuestScreen/index';




export default function App() {
  return (
    <>
      <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <GuestScreen />
      </SafeAreaView>
    </>
  );
};



