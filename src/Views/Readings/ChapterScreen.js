import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from '../../Components/ResponsiveSizes/ResponsiveSizes';
import KJV from '../../Assets/en_kjv.json';

export default class ChapterScreen extends Component {
  constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.book} ${navigation.state.params.chapter}`,
        headerTitleStyle: {
            color: '#ff0000',
            fontWeight: '500',
            fontSize: responsiveFontSize(24),
        },
    });
  
  getChapterData() {
    let theBook = this.props.navigation.state.params.book;
    let theChapter = this.props.navigation.state.params.chapter;
    theChapter = theChapter.split(",");
    let fullVerses = [];
    // for loop for each items in the array.
    for (var c of theChapter) {
      let theIndex = c - 1;
      let fullBook = KJV.filter(function(v) {
        return v.book == theBook;
      });
      let fullChap = fullBook.map(function(v) {
        return v.chapters[theIndex][c];
      });
      fullChap = fullChap[0];
      //there is probably a lot easier way to do this.
      fullVerses.push(<Text style={styles.chapter}>{theBook} {c}</Text>);
      for (var v in fullChap) {
        fullVerses.push(
          <Text style={styles.verses}>
            {v}. {fullChap[v]}
          </Text>
        );
      }
    }
    return fullVerses;
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.getChapterData()}
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffef5"
  },
  chapter: {
    fontSize: responsiveFontSize(16),
    color: '#000000',
    fontWeight: 'bold',
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(1),
    marginLeft: responsiveWidth(3),
    marginRight: responsiveWidth(3),
  },
  verses: {
    marginLeft: responsiveWidth(3),
    marginRight: responsiveWidth(3),
    marginBottom: responsiveHeight(1),
    textAlign: 'left',
  }
});