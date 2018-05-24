import React, { Component } from 'react';
import {View,Text,StyleSheet,StatusBar,TextInput,AsyncStorage,ActivityIndicator,} from 'react-native';
import { iOSColors, human, systemWeights } from 'react-native-typography';
import { fonts } from '../../utils/themes';

const styles = StyleSheet.create({
  root: { flex: 1,    justifyContent: 'center',    alignItems: 'center',  },
  header: { flex: 0.3,    alignSelf: 'stretch',    justifyContent: 'center', backgroundColor: 'blue',   alignItems: 'center',  },
 appName: { color: iOSColors.white,    fontSize: 50,    fontFamily: fonts.lobster,  },
  content: { flex: 1, alignSelf: 'stretch', backgroundColor: 'pink',   },
});
class LoginScreen extends Component {
state = {};
render() {
return (
    <View style={styles.root}>
    <StatusBar barStyle="light-content" />
        <View style={styles.header}>
      <Text style={styles.appName} >Login Screen</Text>
        </View>
        <View style={styles.content} >
        <Text>hello</Text>
        </View>
    </View>
  );
}
}
export default LoginScreen;

