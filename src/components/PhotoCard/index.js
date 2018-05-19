import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from './Header';

const styles = StyleSheet.create({
            root: {  minHeight: 800,   paddingBottom: 10,},
            img:{flex:1}
            });
class PhotoCard extends Component 
{   state = {};
    render() { return (
                        <View style={styles.root}>
                        <Header />
                        < Image
                        style = { styles.img  }
                        source = {{ uri:'https://www.breezway.com.au/wp-content/uploads/sites/11/2016/09/Dowell-Smithfield-Showroom-1.jpg'}} />
                        <Text>Hello PhotoCard</Text>
                        </View>
                    );
            }
  }
  
  export default PhotoCard;