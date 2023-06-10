import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import AppText from '../common/AppText';

export default function LoginSocialButton({...props}) {
  return (
    <Pressable style={{...styles.btn, ...props.styles}}>
      {props.icon}
      <AppText styles={styles.googleTxt}>{props.title}</AppText>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  googleTxt: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '45%',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#403e3e',

    padding: 5,
  },
});
