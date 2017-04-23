import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

export default class PortionItem extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.portion}>Portion: {this.props.portion}</Text>
        <Text style={styles.reading}>{this.props.book} {this.props.chapter}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eeeeee',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 2,
  },
  portion: {
    fontSize: 12,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 10,
  },
  reading: {
    fontSize: 24,
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
});