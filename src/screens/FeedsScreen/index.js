import React, { Component } from 'react';
import { FlatList,ActivityIndicator, View, StyleSheet,RefreshControl } from 'react-native';
import { PhotoCard } from '../../components';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const styles = StyleSheet.create(
{  root: {  minHeight: 800,  backgroundColor: 'white', paddingBottom: 10 },
});

class FeedsScreen extends Component 
{  state={ isRefreshing: false};
   _keyExtractor = item => item.id;
   _renderItem = ({ item }) => <PhotoCard data={item} />;
   _refreshRequest = async () => 
    {   this.setState({ isRefreshing: true })
        await this.props.data.refetch()
        this.setState({ isRefreshing: false })
    }
    render() 
    {
            console.log('============================');
            console.log('/src/feedscreen/index.js- this.props=', this.props);
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
                        refreshControl={ <RefreshControl
                                            refreshing={this.state.isRefreshing}
                                            onRefresh={this._refreshRequest}
                                         />
                                     }
                        />
                    );
    }

}
const getPhotos = gql `query { photos {  id  imageUrl caption}}`;

export default graphql(getPhotos)(FeedsScreen);
//export default FeedsScreen;