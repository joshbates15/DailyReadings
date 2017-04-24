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

    static navigationOptions = {
        title: (navigation) => (`Readings for: ${Moment(navigation.state.params.theDate).format("MMMM D")}`),
        header: (navigation) => ({
            titleStyle: {
                color: '#ff0000',
                textAlign: 'center',
                fontWeight: '500',
                alignSelf: 'center',
            },
            right: (
                <TouchableOpacity style={styles.settingsIcon} onPress={() => { navigation.navigate('SettingsScreen') }} >
                    <MaterialIcons name="settings" size={24} />
                </TouchableOpacity>
            ),
            left: (
                <TouchableOpacity style={styles.calendarIcon} onPress={() => { navigation.navigate('CalendarScreen') }} >
                    <MaterialIcons name={'date-range'} size={26} />
                </TouchableOpacity>
            ),
        }),
    };

    render() {
        //console.log(this.props)
        const theDate = this.getTheDate();
        return (
            <PortionList date={theDate} />
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