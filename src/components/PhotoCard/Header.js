import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

const styles = StyleSheet.create(
{  root: {  height: 60,  backgroundColor: 'magenta' },
});

export default function Header()
{    return( <View style={styles.root}>
                 <Text>Header</Text>
              </View>
            );
}

