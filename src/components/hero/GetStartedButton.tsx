import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import AppText from '../common/AppText';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../utils';

export default function GetStartedButton({...props}) {
  return (
    <Pressable style={styles.wrap} {...props}>
      <AppText styles={styles.txt}>GET STARTED</AppText>
      <ArrowIcon color={Colors.primary} name="arrowright" size={30} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  txt: {color: 'white', fontSize: 20, fontWeight: 'bold'},
  wrap: {
    width: '85%',
    height: 55,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'tomato',
    padding: 10,
    justifyContent: 'space-around',
    borderRadius: 5,
    alignItems: 'center',
  },
});
