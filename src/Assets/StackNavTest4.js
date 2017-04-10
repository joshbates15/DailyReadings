import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Calendar from 'react-native-calendar';

let d = new Date();
let m = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"][d.getMonth()];

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Readings for: ' + m + ' ' + d.getDay(),
    header: ( navigation ) => ({
      titleStyle: {
        color: '#ff0000',
        textAlign: 'center',
        fontWeight: '500',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      right: (
        <TouchableOpacity style={styles.settingsIcon} onPress={() => {navigation.navigate('SettingsScreen')} } >
          <MaterialIcons name="settings" size={24} />
        </TouchableOpacity>
      ),
      left: (
        <TouchableOpacity style={styles.calendarIcon} onPress={() => {navigation.navigate('CalendarScreen')} } >
          <MaterialIcons name={'date-range'} size={26} />
        </TouchableOpacity>
      ), 
    }),
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

class SettingsScreen extends Component {
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

class CalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //dateToday: new Date(),
      selectedDate: null,
    };
  }
  setTodaySelectedDate() {
    //let d = new Date().toDateString;
    let d = 'Today';
    this.setState({
      selectedDate: d
    });
  }
  static navigationOptions = {
    title: 'Choose Date',
    header: ( navigation ) => ({
      titleStyle: {
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#ff0000',
      },
      right: (<Button style={styles.todayButton} title="Today" onPress={() => {alert('Today')}}/>),
    }),
  };
  render() {
    let todayD = () => {this.setTodaySelectedDate()};
    return (
      <View>
      <Calendar
        onDateSelect={(date) => this.setState({ selectedDate: date })}
        dayHeadings={['Su','Mo','Tu','We','Th','Fr','Sa']}
        scrollEnabled={true}
        nextButtonText={'>'}
        prevButtonText={'<'}
        showControls={true}
        titleFormat={'MMMM'}
        weekStart={0}
        customStyle={{
          currentDayCircle: {backgroundColor:'#ff0000'}, 
          selectedDayCircle: {backgroundColor:'#ff0000'}, 
          weekendDayText:{color:'#aa3333'}, 
          weekendHeading: {color:'#aa3333'}
        }}
      />
      <Text>Selected Date: {this.state.selectedDate}</Text>
      <Button style={styles.todayButton} title="Today" onPress={todayD}/>
      </View>
    );
  }
}

const NavTest2 = StackNavigator({
  Home: { screen: HomeScreen },
  SettingsScreen: { screen: SettingsScreen },
  CalendarScreen: { screen: CalendarScreen },
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
  settingsIcon: {
    marginRight: 10,
  },
  calendarIcon: {
    marginLeft: 10,
  },
  todayButton: {
    marginRight: 10,
  },
});

AppRegistry.registerComponent('NavTest2', () => NavTest2);