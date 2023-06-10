import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import AppText from '../common/AppText';
import GoogleIcon from 'react-native-vector-icons/Ionicons';
import LoginSocialButton from './LoginSocialButton';
export default function EmailSection() {
  return (
    <View style={{marginTop: 20}}>
      <AppText styles={{}}>------- Continue with -------</AppText>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          marginTop: 10,
        }}>
        <LoginSocialButton icon={<GoogleIcon name="logo-google" size={25} />} />
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
});
