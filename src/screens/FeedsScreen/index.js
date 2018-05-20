import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, } from 'react-native';
import { PhotoCard } from '../../components';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const styles = StyleSheet.create(
{  root: {  minHeight: 800,  backgroundColor: 'white', paddingBottom: 10 },
});

class FeedsScreen extends Component 
{  state={}
    render() 
    {
            console.log('============================');
            console.log('this is the props', this.props);
            console.log('============================');
            return(    <ScrollView style={styles.root}>
                            <PhotoCard/>
                            <Text>FeedScreen</Text>
                        </ScrollView>
                    );
    }

}
const getPhotos = gql `query { photos {  id  imageUrl caption}}`;

export default graphql(getPhotos)(FeedsScreen);
//export default FeedsScreen;