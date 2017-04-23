import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View
} from 'react-native';
import Calendar from 'react-native-calendar';
import Moment from 'moment';

export default class CalendarScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: null,
        };
    }
    setTodaySelectedDate() {
        let d = Moment().format();
        this.setState({
            selectedDate: d,
        });
    }
    sendSelectedDate(date) {
        let theSelectedDate = date;
        this.setState({ selectedDate: theSelectedDate });
        //this.props.navigation.setParams({theDate: theSelectedDate});
        this.props.navigation.navigate('Home', { theDate: theSelectedDate });
        //this.props.navigation.state.params.theDate
    }
    static navigationOptions = {
        title: 'Choose Date',
        header: (navigation) => ({
            titleStyle: {
                marginLeft: 'auto',
                marginRight: 'auto',
                color: '#ff0000',
            },
            right: (<Button style={styles.todayButton} title="Today" onPress={() => { alert(Moment().format('MMMM D')) }} />),
        }),
    };
    render() {
        let todayD = () => { this.setTodaySelectedDate() };
        return (
            <View>
                <Calendar
                    //onDateSelect={(date) => this.setState({ selectedDate: date })}
                    onDateSelect={(date) => this.sendSelectedDate(date)}
                    dayHeadings={['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']}
                    scrollEnabled={true}
                    nextButtonText={'>'}
                    prevButtonText={'<'}
                    showControls={true}
                    titleFormat={'MMMM'}
                    weekStart={0}
                    customStyle={{
                        currentDayCircle: { backgroundColor: '#ff0000' },
                        selectedDayCircle: { backgroundColor: '#ff0000' },
                        weekendDayText: { color: '#aa3333' },
                        weekendHeading: { color: '#aa3333' }
                    }}
                />
                <Text>Selected Date: {Moment(this.state.selectedDate).format('MMMM D')}</Text>
                <Button style={styles.todayButton} title="Today" onPress={todayD} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    todayButton: {
        marginRight: 10,
    },
});