import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import KJV from '../../Assets/en_kjv.json';

export default class ChapterScreen extends Component {
  constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.book} ${navigation.state.params.chapter}`,
        headerTitleStyle: {
            color: '#ff0000',
            textAlign: 'center',
            fontWeight: '500',
            fontSize: 18,
            alignSelf: 'center',
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
      fullVerses.push(<Text style={{color: '#000000', fontWeight: 'bold', marginTop: 4}}>{theBook} {c}</Text>);
      for (var v in fullChap) {
        fullVerses.push(
          <Text style={{ textAlign: "left", marginBottom: 3 }}>
            {v}. {fullChap[v]}
          </Text>
        );
      }
    }
    return fullVerses;
  }

  render() {
    return (
      <ScrollView>
        {this.getChapterData()}
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});