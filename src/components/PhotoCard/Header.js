import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { makeCircle, makeHitSlop } from '../../utils/themes';
import { fakeAvatar } from '../../utils/constants';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import Touchable from '@appandflow/touchable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { human, systemWeights } from 'react-native-typography';

const styles = StyleSheet.create({
    root: {  height: 60, backgroundColor: '#fff', flexDirection: 'row', paddingHorizontal: 16, },
    userMetaWrapper: { flex: 1, flexDirection: 'row', },
    btnWrapper: {  flex: 0.1, justifyContent: 'center', alignItems: 'center', },
    avatarWrapper: {  flex: 0.15,  justifyContent: 'center',  alignItems: 'center',  },
    avatarImg: {  ...makeCircle(40),  },
    userInfoWrapper: {  justifyContent: 'center',  flex: 1, paddingLeft: 10, },
    username: {  ...human.subheadObject,      },
    location: {   ...human.footnoteObject,  ...systemWeights.light,      },
  });

export default function Header({
  avatar = fakeAvatar,
  username = 'User:Manoj(Header.js)',
  location = 'Mel, Aus',
})
{    return( <View style={styles.root}>
                <View style={styles.userMetaWrapper}></View>
                <View style={styles.avatarWrapper}>
                    <Image source={{ uri: avatar}} style={styles.avatarImg}/>
                </View>
                <View style={styles.userInfoWrapper}>
                      <Text style={styles.username}>{username}</Text>
                     <Text style={styles.location}>{location}</Text>
                </View>
                <Touchable  feedback="opacity" style={styles.btnWrapper} >
                    <MaterialCommunityIcons name="dots-horizontal" size={25} />
                </Touchable>
              </View>
            );
}

