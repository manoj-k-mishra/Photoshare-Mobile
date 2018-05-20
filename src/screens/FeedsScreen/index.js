import React, { Component } from 'react';
import { FlatList,ActivityIndicator, View, ScrollView, Text, StyleSheet, } from 'react-native';
import { PhotoCard } from '../../components';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const styles = StyleSheet.create(
{  root: {  minHeight: 800,  backgroundColor: 'white', paddingBottom: 10 },
});

class FeedsScreen extends Component 
{  state={};
   _keyExtractor = item => item.id;
   _renderItem = ({ item }) => <PhotoCard data={item} />;
    render() 
    {
            console.log('============================');
            console.log('this is the props', this.props);
            console.log('============================');
             if (this.props.data.loading) 
             {  return (
                        <View style={styles.loadingWrapper}>
                        <ActivityIndicator size="large" />
                        </View>
                       );
            }
            return(    <FlatList
                        data={this.props.data.photos}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        />
                    );
    }

}
const getPhotos = gql `query { photos {  id  imageUrl caption}}`;

export default graphql(getPhotos)(FeedsScreen);
//export default FeedsScreen;