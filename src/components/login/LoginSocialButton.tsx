import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import AppText from '../common/AppText';

export default function LoginSocialButton({...props}) {
  return (
    <Pressable style={styles.btn}>
      {props.icon}
      <AppText styles={styles.googleTxt}>Google</AppText>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  googleTxt: {
    marginLeft: 10,
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '45%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#133',
    padding: 5,
  },
});
