import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import AppText from '../common/AppText';

export default function LoginButton({...props}) {
  return (
    <Pressable
      onPress={props.onClick}
      style={{
        width: '80%',
        height: 50,
        backgroundColor: '#112e42',
        borderRadius: 5,
        justifyContent: 'center',
      }}
      {...props}>
      {props.progress ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <AppText styles={styles.text}>LOGIN</AppText>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
