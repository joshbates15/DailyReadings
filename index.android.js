/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MainNavigation = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <Text>Hello World!</Text>
  </ScrollView>
);

const ReadingsScene = ({ navigation }) => (
  <MainNavigation
    navigation={navigation}
  />
);

ReadingsScene.navgationOptions = {
  title: 'Readings: ',
  header: {
    right: (
      <TouchableOpacity onPress={() => {navigate('SettingsScene')} } >
        <MaterialIcons name={'settings'} size={26} />
      </TouchableOpacity>
    ),
    left: (
      <TouchableOpacity onPress={() => {navigate('CalendarScene')} } >
        <MaterialIcons name={'event'} size={26} />
      </TouchableOpacity>
    ),
  },
};

const CalendarScene = ({ navigation }) => (
  <MainNavigation
    navigation={navigation}
  />
);

const SettingsScene = ({ navigation }) => (
  <MainNavigation
    navigation={navigation}
  />
);

const AppStack = StackNavigator({
  Readings: {
    screen: ReadingsScene,
  },
  Calendar: { 
    screen: CalendarScene,
  },
  Settings: {
    screen: SettingsScene,
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default AppStack;