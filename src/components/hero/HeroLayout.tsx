import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import React from 'react';
import LayoutWrapper from '../common/LayoutWrapper';
import AppText from '../common/AppText';
import {Colors} from '../../utils';
import GetStartedButton from './GetStartedButton';
import {useNavigation} from '@react-navigation/native';
import {loginSreenID} from '../../screens/Login';

export default function HeroLayout() {
  const navigation: any = useNavigation();
  return (
    <LayoutWrapper styles={{backgroundColor: 'transparent'}}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.primary} />
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
      <View style={styles.imgWrapper}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={require('../../img/illustrator.png')}
        />
      </View>
      <View style={styles.btnWrapper}>
        <GetStartedButton
          onPress={() => {
            navigation.navigate(`${loginSreenID}`);
          }}
        />
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
  btnWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgWrapper: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    backgroundColor: 'red',
    marginBottom: 60,
    marginTop: 50,
  },
});
