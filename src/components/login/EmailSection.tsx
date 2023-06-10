import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import AppText from '../common/AppText';
import GoogleIcon from 'react-native-vector-icons/Ionicons';
import LoginSocialButton from './LoginSocialButton';
import App from '../../../App';
export default function EmailSection() {
  return (
    <View
      style={{
        marginTop: 30,
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <AppText styles={{}}>------- Continue with -------</AppText>
      <View style={styles.btnWrap}>
        <LoginSocialButton
          title="Facebook"
          icon={<GoogleIcon color={'tomato'} name="logo-facebook" size={25} />}
        />
        <LoginSocialButton
          title="Google"
          icon={<GoogleIcon color={'tomato'} name="logo-google" size={25} />}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 26,
        }}>
        <AppText styles={styles.dontHaveTxt}>Don't have an account?</AppText>
        <AppText styles={styles.signuptxt}>Sign Up</AppText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  txtContinue: {
    marginBottom: 20,
  },
  googleTxt: {
    marginLeft: 10,
  },
  btnWrap: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  signuptxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'tomato',
  },
  dontHaveTxt: {
    fontSize: 16,
  },
});
