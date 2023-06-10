import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LayoutWrapper from '../common/LayoutWrapper';
import AppText from '../common/AppText';
import {Colors} from '../../utils';

export default function HeroLayout() {
  return (
    <LayoutWrapper styles={{backgroundColor: '#000'}}>
      <View style={styles.txtWrap}>
        <AppText styles={{fontSize: 16, color: 'white'}}>Welcome to</AppText>
        <AppText styles={styles.subTitle}>basket online store</AppText>
        <AppText
          styles={{
            color: 'white',
            textAlign: 'center',
            lineHeight: 22,
            marginTop: 5,
          }}>
          basket is the online store for both new and used products
        </AppText>
      </View>
    </LayoutWrapper>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  subTitle: {fontSize: 28, fontWeight: 'bold', color: 'white', marginTop: 14},
  txtWrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 30,
  },
});
