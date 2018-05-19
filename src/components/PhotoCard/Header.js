import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { makeCircle, } from '../../utils/themes';
import { fakeAvatar } from '../../utils/constants';

const styles = StyleSheet.create(
{  root: {  height: 60,  backgroundColor: 'white' , flexDirection: 'row', paddingHorizontal: 16,},
   userMetaWrapper: { flex: 1, backgroundColor:'indigo', flexDirection: 'row' }, 
   btnWrapper: { flex: 0.1,  backgroundColor:'yellow', },
   avatarWrapper: {    flex: 0.15,  backgroundColor:'red',justifyContent: 'center', alignItems: 'center',  },
   avatarImg: { backgroundColor:'green' , ...makeCircle(40),  },
});

export default function Header()
{    return( <View style={styles.root}>
                <View style={styles.userMetaWrapper}></View>
                <View style={styles.avatarWrapper}>
                    <Image source={{ uri: fakeAvatar}} style={styles.avatarImg}/>
                </View>
              </View>
            );
}

