import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Moment from 'moment';
import PortionList from './PortionList';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = ({ navigation }) => ({
        title: `Readings for: ${Moment(navigation.state.params.theDate).format("MMMM D")}`,
        headerTitleStyle: {
            color: '#ff0000',
            textAlign: 'center',
            fontWeight: '500',
            fontSize: 18,
            alignSelf: 'center',
        },
        headerRight: (
            <TouchableOpacity style={styles.settingsIcon} onPress={() => { navigation.navigate('SettingsScreen') }} >
                <MaterialIcons name="settings" size={24} />
            </TouchableOpacity>
        ),
        headerLeft: (
            <TouchableOpacity style={styles.calendarIcon} onPress={() => { navigation.navigate('CalendarScreen') }} >
                <MaterialIcons name={'date-range'} size={26} />
            </TouchableOpacity>
        ),
    });

    render() {
        //console.log(this.props);
        const theDate = this.getTheDate();
        return (
            <PortionList date={theDate} screenProps={{ rootNav: this.props.navigation }} />
        );
    }

    getTheDate() {
        const theDate = this.props.navigation.state.params.theDate;
        return theDate;
    }
}

const styles = StyleSheet.create({
    settingsIcon: {
        marginRight: 10,
    },
    calendarIcon: {
        marginLeft: 10,
    },
});