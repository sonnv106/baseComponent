/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ExampleComponent from './src/ExampleComponent';
import HomeScreen from './src/HomeScreen';
import AnimatedScreen from './src/AnimatedScreen';

const Stack = createNativeStackNavigator();
const App = () => {

  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerBackTitleVisible: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ExampleComponent" component={ExampleComponent}/>
        <Stack.Screen name="AnimatedScreen" component={AnimatedScreen}/>
      
      </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
