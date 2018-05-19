import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, } from 'react-native';
import { PhotoCard } from '../../components'

const styles = StyleSheet.create(
{  root: {  minHeight: 800,  backgroundColor: 'pink', paddingBottom: 10 },
});

class FeedsScreen extends Component 
{  state={}
    render(){  return(
                        <ScrollView style={styles.root}>
                            <PhotoCard/>
                            <Text>FeedScreen</Text>
                        </ScrollView>
                    );
            }

}

export default FeedsScreen;
