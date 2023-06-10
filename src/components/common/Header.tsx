import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import AppText from './AppText';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header() {
  return (
    <View
      style={{...styles.wrapper, height: Number(StatusBar.currentHeight) * 3}}>
      <View style={styles.cartTop}>
        <Ionicons
          style={{textAlign: 'center'}}
          color="white"
          name="cart-outline"
          size={20}
        />
      </View>
      <AppText styles={{fontSize: 30, fontWeight: 'bold', color: 'tomato'}}>
        basket
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  cartTop: {
    width: 40,
    margin: 0,
    height: 40,
    display: 'flex',
    marginRight: 8,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato',
    borderRadius: 20,
  },
  wrapper: {
    display: 'flex',
    width: '100%',
    backgroundColor: 'white',
    elevation: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
