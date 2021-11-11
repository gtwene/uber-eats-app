import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import HeaderTabs from './components/HeaderTabs';
import Home from './screens/Home'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View>
        <Home/>
    </View>
  );
}


