import React, { Component } from 'react';
import {View,Text,StyleSheet,StatusBar,TextInput,AsyncStorage,ActivityIndicator,TouchableOpacity} from 'react-native';
import { iOSColors, human, systemWeights } from 'react-native-typography';
import { fonts } from '../../utils/themes';
import LinearGradient from 'react-native-linear-gradient';
import Touchable from '@appandflow/touchable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import gql from 'graphql-tag';  //for query mutation
import { graphql } from 'react-apollo'; //graphql wrapper
import { authToken } from '../../utils/constants';
import { startMainApp } from '../../Nav';

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
{  state = { loading: false,};
 _onLoginFbPress = async () => 
  { this.setState({ loading: true });
    console.log('fb clicked');
    const res = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
    console.log('/src/screens/loginscreen/index.js- res=',res);
    if(res.grantedPermissions && !res.isCancelled)
    { const data= await AccessToken.getCurrentAccessToken();
      console.log('/src/screens/loginscreen/index.js- data=', data);
      if(data)
      { const serverResponse = await this.props.loginMutation({variables: {provider: 'FACEBOOK', token: data.accessToken, }, });
        console.log('/src/screens/loginscreen/index.js- serverResponse=', serverResponse);
        const { token } = serverResponse.data.login;
        try {  await AsyncStorage.setItem(authToken,token); //so authToken gets the value of jwt----and now user logs in--main screen should come
               this.setState({ loading: false });
               startMainApp();
            } catch (error) { throw error; }
       
      }
    }
  };
   render() 
   { console.log('/src/screens/loginscreen/index.js- this.props=', this.props)
     if (this.state.loading) 
      {  return (   <View style={styles.root}>
                      <ActivityIndicator size="large" color="#318DEE" />
                    </View>
                );
      }
      return (
        <View style={styles.root}>
          <StatusBar barStyle="light-content" />
          <LinearGradient colors={COLORS_GRADIENTS}  start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}style={styles.header}>
            <Text style={styles.appName} >Login Screen</Text>
          </LinearGradient>
          <View style={styles.content} >
            <View style={styles.section} >
              <View style={styles.inputWrapper}> 
                <TextInput underlineColorAndroid="transparent" style={styles.input} placeholder="Email"/> 
              </View>
              <View style={styles.inputWrapper}> 
                <TextInput underlineColorAndroid="transparent" style={styles.input} placeholder="Password"/>
              </View>
              <Touchable onPress={this._onLoginFbPress} style={styles.loginBtn} feedback="opacity">
                 <Text style={styles.loginBtnText}>Login</Text>
              </Touchable>
              <View style={styles.forgotWrapper}>
                    <Text style={styles.callout}>Forgot your login details? </Text>
                    <Touchable feedback="opacity">
                       <Text style={styles.btnText}>Get help signing in.</Text>
                    </Touchable>
              </View>
            </View>
            <View style={styles.orWrapper}>
              <View style={styles.orDivider} />
              <View style={styles.orTextWrapper}> 
                 <Text style={styles.orText}>OR</Text> 
              </View>
              <View style={styles.orDivider} />
            </View>
            <View style={[styles.section, styles.sectionBottom]}>
              <TouchableOpacity style={styles.fbLoginBtn} onPress={this._onLoginFbPress} feedback = "opacity">
                <MaterialCommunityIcons size={30} name="facebook-box" color="#318DEE"/>
                <Text style={styles.fbLoginBtnText}>Continue with Facebook</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.noAccountWrapper}>
              <Text style={styles.callout}>Don't have an account? </Text>
              <Touchable feedback="opacity">
                <Text style={styles.btnText}>Sign up.</Text>
              </Touchable>
            </View>
            
          </View>
        </View>
        );
    }
}

const loginMutation = gql`
  mutation($provider: Provider, $token: String) 
  {  login(provider: $provider, token: $token) {   token }
  }
`;

//export default LoginScreen;
export default graphql(loginMutation, { name: 'loginMutation' })(LoginScreen);

