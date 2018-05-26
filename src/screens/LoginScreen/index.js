import React, { Component } from 'react';
import {View,Text,StyleSheet,StatusBar,TextInput,AsyncStorage,ActivityIndicator,TouchableOpacity} from 'react-native';
import { iOSColors, human, systemWeights } from 'react-native-typography';
import { fonts } from '../../utils/themes';
import LinearGradient from 'react-native-linear-gradient';
import Touchable from '@appandflow/touchable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

const COLORS_GRADIENTS = ['#74398D', '#56499E'];

const styles = StyleSheet.create({
  root: { flex: 1,    justifyContent: 'center',    alignItems: 'center',  },
  header: { flex: 0.3,    alignSelf: 'stretch',    justifyContent: 'center',    alignItems: 'center',  },
  appName: { color: iOSColors.white,    fontSize: 50,    fontFamily: fonts.lobster,  },
  content: { flex: 1, alignSelf: 'stretch',  },
  section: {flex: 1,justifyContent: 'center',alignItems: 'center',alignSelf: 'stretch', },
  sectionBottom: {flex: 0.7,justifyContent: 'flex-start',},
  inputWrapper: {height: 45,width: '90%',borderRadius: 5,borderColor: '#E4E4E4',borderWidth: 1,backgroundColor: 'pink',
                  marginBottom: 10,padding: 10,},
  input: { flex: 1, padding: 0, },
  loginBtn: {  height: 45, width: '90%', borderRadius: 5, backgroundColor: '#318DEE70', marginTop: 10, justifyContent: 'center', alignItems: 'center', },
  loginBtnText: {  color: iOSColors.white,  },
  forgotWrapper: {  marginVertical: 10, flexDirection: 'row', },
  btnText: { ...human.footnoteObject, ...systemWeights.semibold, color: '#318DEE', },
  callout: { ...human.footnoteObject, ...systemWeights.semibold,  color: iOSColors.midGray, },
  orWrapper: { width: '90%',marginVertical: 10,flexDirection: 'row',alignSelf: 'center', alignItems: 'center', },
  orDivider: { height: 1,width: '100%',flex: 1,backgroundColor: '#E4E4E4', },
  orTextWrapper: { flex: 0.5,justifyContent: 'center',alignItems: 'center', },
  orText: { ...systemWeights.semibold, color: iOSColors.gray,},
  fbLoginBtn: {flexDirection: 'row', height: 50,alignItems: 'center',},
  fbLoginBtnText: {...human.calloutObject, ...systemWeights.sembold, color: '#318DEE',marginLeft: 10, },
  noAccountWrapper: { height: 50,width: '100%',borderColor: '#ECECEC',borderTopWidth: 1,justifyContent: 'center',alignItems: 'center', flexDirection: 'row', },
});
class LoginScreen extends Component 
{  state = {};



 _onLoginFbPress = async () => {
    console.log('=========FB=clicked==========================');
  const res = await LoginManager.logInWithReadPermissions([
        'public_profile',
       // 'email',
      ]);
      console.log("========RES============================", res);
 };
   render() 
   {
     console.log('======inside render===============');
      return (
        <View style={styles.container}>
       <TouchableOpacity
         style={styles.button}
         onPress={this._onLoginFbPress}
       >
         <Text> Touch Here </Text>
       </TouchableOpacity>
       <View style={[styles.countContainer]}>
         <Text style={[styles.countText]}>
            { this.state.count !== 0 ? this.state.count: null}
          </Text>
        </View>
      </View>
        );
    }
}
export default LoginScreen;

