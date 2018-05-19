import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { PhotoCard } from '../../components'

const styles = StyleSheet.create(
{  root: {  minHeight: 800,  backgroundColor: 'pink', },
});

class FeedsScreen extends Component 
{  state={}
    render(){  return(
                        <View style={styles.root}>
                            <PhotoCard/>
                            <Text>FeedScreen</Text>
                        </View>
                    );
            }

}

export default FeedsScreen;
