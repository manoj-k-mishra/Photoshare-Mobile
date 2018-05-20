import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Header from './Header';
import ActionBtns from './ActionBtns';

const styles = StyleSheet.create({
  root: {
    minHeight: 800,
    paddingBottom: 20,
  },
  img: {  //height: 30,
    flex: 1
  }
});

class PhotoCard extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <Header />
   
        <ActionBtns />
      </View>
    );
  }
}

export default PhotoCard;