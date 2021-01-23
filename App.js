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
import HomeScreen from './src/screens/Home/index';
import Listing from './src/components/Listing/index';
import feed from './assets/data/feed';
// import SearchResultScreen from './src/screens/SearchResults/index';

import DestinationScreen from './src/screens/DestinationScreen/index';
const post1 = feed[0]

export default function App() {
  return (
    <>
      <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <DestinationScreen />
      </SafeAreaView>
    </>
  );
};



