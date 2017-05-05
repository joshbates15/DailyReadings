import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button
} from 'react-native';
import Moment from 'moment';
import ReadingsData from '../../Assets/readings.json';
import PortionItem from './PortionItem';

export default class PortionList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.wrapper}>
                {this.theReadings(this.props.date)}
                {/* <Button title="Settings" onPress={() => this.props.screenProps.rootNav.navigate('ChapterScreen', {book: "Deuteronomy", chapter: "22"})} /> */}
            </View>
        );
    }

    theReadings(date) {
        let readings = [];
        let navigation = this.props.screenProps.rootNav;
        let theDate = date;
        let theMonth = Moment(theDate).format('M');
        let theDay = Moment(theDate).format('D');
        readings = ReadingsData.filter(
            function (ReadingsData) { return ReadingsData.month == theMonth && ReadingsData.day == theDay }
        );
        return readings.map(function (readingPortion) {
            let portion = readingPortion.portion;
            let book = readingPortion.book;
            let chapter = readingPortion.chapter;
            return <PortionItem portion={portion} book={book} chapter={chapter} screenProps={{rootNav: navigation}} />
        })
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginBottom: 100,
    },
});