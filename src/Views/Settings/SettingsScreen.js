import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button
} from 'react-native';

export default class SettingsScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Settings',
        headerTitleStyle: {
            alignSelf: 'center',
            color: '#ff0000',
        },
    });
    render() {
        return (
            <View>
                <Button title="Clear Progress" onPress={() => {alert('Not working yet...')}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    //Styles Here
});