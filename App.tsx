import { Fragment } from 'react';
import { Home }  from './src/screens/Home';
import { StatusBar } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent/>
      <Home/>
    </>


  )
}