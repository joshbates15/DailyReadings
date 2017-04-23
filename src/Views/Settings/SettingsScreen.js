import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button
} from 'react-native';

export default class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings',
    };
    render() {
        return (
            <View>
                <Button title="Clear Progress" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    //Styles Here
});