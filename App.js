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

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Listing/>
      </SafeAreaView>
    </>
  );
};



export default App;
