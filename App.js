

import React from 'react';
import {
  StatusBar,
} from 'react-native';

import 'react-native-gesture-handler'
import Router from './src/navigation/Router';


export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <Router />
    </>
  );
};



