import {View, Text, StyleSheet, StatusBar, TextInput} from 'react-native';
import React from 'react';
import AppText from './AppText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../utils';

export default function TabHeader() {
  return (
    <View style={{...styles.wrapper, height: 60}}>
      <View style={styles.cartTop}>
        <Ionicons
          style={{textAlign: 'center'}}
          color="white"
          name="cart-outline"
          size={20}
        />
      </View>
      <View style={styles.wrap}>
        <Ionicons name="search" size={20} />
        <TextInput
          style={{
            flexGrow: 1,
            backgroundColor: 'transparent',
            borderRadius: 5,
            padding: 5,
          }}
          placeholder="Search"
        />
      </View>
      <View
      // style={{marginLeft: 2}}
      >
        <Ionicons size={25} name="menu" color="tomato" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartTop: {
    width: 40,
    height: 40,
    display: 'flex',
    // marginRight: 8,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato',
    borderRadius: 20,
  },
  wrapper: {
    display: 'flex',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrap: {
    width: '82%',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    backgroundColor: 'white',
    padding: 2,
  },
});
