import {View, Text} from 'react-native';
import React from 'react';
import AppTextInputEmail from '../common/AppTextInputEmail';
import AppTextInputPassword from '../common/AppTextInputPassword';

export default function LoginForm() {
  return (
    <View
      style={{
        width: '90%',
        alignItems: 'center',
        paddingTop: 35,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ccc',
        alignSelf: 'center',
        flexGrow: 1,
      }}>
      <AppTextInputEmail styles={{marginBottom: 15}} />
      <AppTextInputPassword />
    </View>
  );
}
