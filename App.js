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

const post1 = feed[0]

export default function App() {
  return (
    <>
      <SafeAreaView>
      <StatusBar barStyle="dark-content" />
        <Listing listing={post1}/>
      </SafeAreaView>
    </>
  );
};



