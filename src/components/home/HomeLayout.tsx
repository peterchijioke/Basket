import {View, Text, useWindowDimensions, StyleSheet, Image} from 'react-native';
import React from 'react';
import AppText from '../common/AppText';
import CardItemWrap from './CardItemWrap';
const headerImage = {uri: 'https://www.w3schools.com/w3images/lights.jpg'};
export default function HomeLayout() {
  const {height} = useWindowDimensions();
  return (
    <View style={styles.wrapper}>
      <View style={{...styles.profileWrap, height: height / 5}}>
        <View style={styles.bg}>
          <Image style={styles.headerImage} source={headerImage} />
          <View style={styles.txtWrap}>
            <AppText styles={styles.title}>Daniel Obi</AppText>
            <AppText>danielobi@gmail.com</AppText>
          </View>
        </View>
      </View>
      <View style={styles.itemCardWrap}>
        <CardItemWrap />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  itemCardWrap: {
    flexGrow: 1,
    // backgroundColor: '#ccc',
    backgroundColor: '#fff',
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
  profileWrap: {
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    backgroundColor: 'tomato',
  },
  bg: {
    width: '90%',
    height: '100%',
    // backgroundColor: 'white',
    flexDirection: 'row',
    marginTop: '10%',
  },

  txtWrap: {display: 'flex', flexDirection: 'column', marginLeft: 15},
});
