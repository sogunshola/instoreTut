/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import { UtilityThemeProvider, Box, Text } from 'react-native-design-utility';
import Navigation from './src/screens';

const App = () => {
  return (
    <UtilityThemeProvider>
      <Navigation />
    </UtilityThemeProvider>
  );
};

export default App;
