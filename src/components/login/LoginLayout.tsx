import {View, Text, StyleSheet} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Header from '../common/Header';
import {useNavigation} from '@react-navigation/native';
import LayoutWrapper from '../common/LayoutWrapper';
import AppText from '../common/AppText';
import LoginForm from './LoginForm';

export default function LoginLayout({}) {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <Header />
      <LayoutWrapper>
        <LoginTextTop />
        <LoginForm />
      </LayoutWrapper>
    </View>
  );
}

const LoginTextTop = ({}) => (
  <View style={styles.txtWrapLogin}>
    <AppText styles={styles.title}>Login into you account</AppText>
    <AppText styles={{textAlign: 'center', fontSize: 16, marginTop: 5}}>
      Enter your email and password to access your account or create and
      account.
    </AppText>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  txtWrapLogin: {
    width: '100%',
    // height: '20%',
    marginTop: 25,
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
});
