import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from '../../Components/ResponsiveSizes/ResponsiveSizes';


export default class PortionItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    /*
          this.props.navigation.navigate('ChapterScreen', {
            book: this.props.book,
            chapter: this.props.chapter
          })
    */
    //console.log(this.props);
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.props.screenProps.rootNav.navigate('ChapterScreen', {
            book: this.props.book,
            chapter: this.props.chapter
          })}
      >
        <Text style={styles.portion}>Portion: {this.props.portion}</Text>
        <Text style={styles.reading}>
          {this.props.book} {this.props.chapter}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 10,
    backgroundColor: "#eeeeee",
    borderBottomColor: "#dddddd",
    borderBottomWidth: 2
  },
  portion: {
    fontSize: responsiveFontSize(16),
    textAlign: "left",
    marginTop: 10,
    marginBottom: 10
  },
  reading: {
    fontSize: responsiveFontSize(28),
    textAlign: "left",
    color: "#333333",
    marginBottom: 5
  }
});
