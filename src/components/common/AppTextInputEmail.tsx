import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Envelop from 'react-native-vector-icons/EvilIcons';

export default function AppTextInputEmail({...props}) {
  return (
    <View style={{...styles.wrapper, ...props.styles}} {...props}>
      <Envelop color={'tomato'} name="envelope" size={25} />
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.inputEmail}
        keyboardType="email-address"
        placeholder="Email"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputEmail: {
    flexGrow: 1,
    // backgroundColor: 'pink',
    paddingLeft: 5,
    paddingRight: 5,
  },
  wrapper: {
    width: '100%',
    height: 50,
    // backgroundColor: '#f1f1f1',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'tomato',
    borderBottomWidth: 1,
  },
});
