/**
 * Daily Bible Readings App
 * https://github.com/joshbates15/DailyReadings
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Moment from 'moment';
import HomeScreen from './Readings/ReadingsScreen';
import CalendarScreen from './Calendar/CalendarScreen';
import SettingsScreen from './Settings/SettingsScreen';

const DailyReadings = StackNavigator({
    Home: { screen: HomeScreen },
    SettingsScreen: { screen: SettingsScreen },
    CalendarScreen: { screen: CalendarScreen },
}, { initialRouteName: 'Home', initialRouteParams: { theDate: Moment().format() } });

const styles = StyleSheet.create({
    // Styles Here
});

AppRegistry.registerComponent('DailyReadings', () => DailyReadings);