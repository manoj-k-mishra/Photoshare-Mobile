import React, { Component } from 'react';
import {  ScrollView,View,  Text,  StyleSheet,  Image} from 'react-native';

import Header from './Header';
import ActionBtns from './ActionBtns';
import Meta from './Meta';
import Touchable from '@appandflow/touchable';
import { human, iOSColors } from 'react-native-typography';
import CommentInput from '../CommentInput';

const styles = StyleSheet.create({
  root: {    minHeight: 800,    paddingBottom: 10,  },
  img: {  flex: 1  },
  commentsWrapper: {    height: 50,    paddingHorizontal: 16,  },
  commentViewAll: {    ...human.calloutObject,    color: iOSColors.midGray,  },
  timeAgoWrapper: { height: 70, justifyContent: 'center', alignItems: 'flex-start',  paddingHorizontal: 16,  },
  timeAgo: {    ...human.footnoteObject,    color: iOSColors.midGray,  },
});

class PhotoCard extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
     
        <Header />

        <ActionBtns />
        <Meta/>
         <View style={styles.commentsWrapper}>
          <Touchable feedback="opacity">
            <Text style={styles.commentViewAll}>View all 10 comments</Text>
          </Touchable>
          < CommentInput />
        </View>
        <View style={styles.timeAgoWrapper}>
          <Text style={styles.timeAgo}>6 HOURS AGO</Text>
        </View>
            <Image style={styles.img} source={{ uri: 'https://www.what-dog.net/Images/faces2/scroll001.jpg' }} />
      </View>
    );
  }
}

export default PhotoCard;