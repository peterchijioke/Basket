import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Colors} from '../../utils';
import CartIcon from 'react-native-vector-icons/Ionicons';
import AppText from '../common/AppText';

export default function LandingLayout() {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        source={require('../../img/land.jpg')}>
        <View
          style={{
            ...StyleSheet.absoluteFill,
            justifyContent: 'center',
            backgroundColor: Colors.primary,
            opacity: 0.5,
            alignItems: 'center',
          }}
        />
        <View style={styles.circleWrap}>
          <View style={styles.circle}>
            <CartIcon color={'white'} size={40} name="md-cart-outline" />
            <AppText styles={styles.innetTxt}>basket</AppText>
          </View>
          <View style={styles.wrapp}>
            <AppText styles={{...styles.txt2}}>Start Shopping.</AppText>
            <AppText styles={{...styles.txt2}}>Stay happy.</AppText>
            <AppText styles={{...styles.txt2}}>Aytime.</AppText>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  innetTxt: {
    fontSize: 25,
    fontWeight: '900',
    lineHeight: 24,
    color: 'white',
  },
  circle: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  circleWrap: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    // backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    // justifyContent: 'center',
  },
  txt2: {
    fontSize: 18,
    lineHeight: 24,
    color: 'white',
    margin: 5,
  },
  wrapp: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
});
