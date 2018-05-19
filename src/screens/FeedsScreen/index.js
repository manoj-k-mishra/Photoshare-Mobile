import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { PhotoCard } from '../../components'

class FeedsScreen extends Component 
{  state={}
    render(){  return(
                        <View>
                            <PhotoCard/>
                            <Text>FeedScreen</Text>
                        </View>
                    );
            }

}


export default FeedsScreen;
