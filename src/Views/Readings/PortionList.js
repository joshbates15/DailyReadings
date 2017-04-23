import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Moment from 'moment';
import ReadingsData from '../../Assets/readings.json';
import PortionItem from './PortionItem';

export default class PortionList extends Component {
    //
    constructor(props) {
        super(props);
        this.state = {
            date: Moment().format(),
        };
    }

    render() {
        return (
            <View style={styles.wrapper}>
                {this.theReadings(this.props.date)}
            </View>
        );
    }

    theReadings(date) {
        let readings = [];
        //if props.date (this.props.navigation.state.params.date) is not null then bind it to state.date
        //propsDate = this.props.navigation.state.params.selectedDate;
        /*
        if (propsDate != null) {
          this.setState({date: propsDate});
        } 
        
        if (this.props.navigation.state.params) {
          this.setState({date: this.props.navigation.state.params.theDate});
        }
        */
        //let propsDate = this.props.navigation.state.params.theDate;
        //this.setState({date: propsDate});
        //let theDate = this.state.date;
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
            return <PortionItem portion={portion} book={book} chapter={chapter} />
        })
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginBottom: 100,
    },
});