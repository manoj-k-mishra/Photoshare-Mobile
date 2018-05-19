import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
class PhotoCard extends Component 
{   state = {};
    render() { return (
                        <View >
                        <Header />
                        <Text>Hello PhotoCard</Text>
                        </View>
                    );
            }
  }
  
  export default PhotoCard;