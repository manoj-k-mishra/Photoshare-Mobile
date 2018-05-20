import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Header from './Header';
import ActionBtns from './ActionBtns';
import Meta from './Meta';

const styles = StyleSheet.create({
  root: {    minHeight: 800,    paddingBottom: 10,  },
  img: {  flex: 1  }
});

class PhotoCard extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <Header />
        <ActionBtns />
        <Meta/>
         <Image style={styles.img} source={{ uri: 'https://www.what-dog.net/Images/faces2/scroll001.jpg' }} />
      </View>
    );
  }
}

export default PhotoCard;