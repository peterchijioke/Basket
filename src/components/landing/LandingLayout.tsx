import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../../utils';
import CartIcon from 'react-native-vector-icons/Ionicons';
import AppText from '../common/AppText';
import App from '../../../App';
import {useNavigation} from '@react-navigation/native';
import {loginSreenID} from '../../screens/Login';
import {HeroScreenID} from '../../screens/Hero';

export default function LandingLayout() {
  const navigation: any = useNavigation();
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
          <View style={styles.bottom}>
            <AppText styles={styles.botTxt}>Basket Online Market place</AppText>
            <View style={styles.nextBackWrapper}>
              <AppText
                onPress={() => {
                  navigation.navigate(`${loginSreenID}`);
                }}
                styles={styles.nextSkip}>
                Skip
              </AppText>
              <AppText
                onPress={() => {
                  navigation.navigate(`${HeroScreenID}`);
                }}
                styles={styles.nextSkip}>
                Next
              </AppText>
            </View>
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
  bottom: {
    height: 90,
    width: '100%',
    // backgroundColor: 'tomato',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  nextBackWrapper: {
    width: '90%',
    height: '50%',
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    // backgroundColor: '#133',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  botTxt: {
    color: 'tomato',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '900',
  },
  nextSkip: {
    fontWeight: '900',
    fontSize: 16,
    color: 'tomato',
  },
});
