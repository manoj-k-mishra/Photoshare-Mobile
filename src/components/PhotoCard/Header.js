import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

const styles = StyleSheet.create(
{  root: {  height: 60,  backgroundColor: 'white' , flexDirection: 'row', paddingHorizontal: 16,},
   userMetaWrapper: { flex: 1, backgroundColor:'indigo',  }, 
   btnWrapper: { flex: 0.1, justifyContent: 'center', alignItems: 'center', },
});

export default function Header()
{    return( <View style={styles.root}>
                <View style={styles.userMetaWrapper}></View>
                <View style={styles.btnWrapper}></View>
              
                
              </View>
            );
}

