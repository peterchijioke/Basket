import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Key from 'react-native-vector-icons/AntDesign';
import Eye from 'react-native-vector-icons/Ionicons';

export default function AppTextInputPassword({...props}) {
  const [eyeState, setEyeState] = useState<boolean>(true);
  return (
    <View style={{...styles.wrapper, ...props.styles}} {...props}>
      <Key color={'tomato'} name="key" size={25} />
      <TextInput
        secureTextEntry={eyeState}
        style={styles.inputEmail}
        placeholder="Password"
      />
      {eyeState ? (
        <Eye
          style={{marginRight: 15}}
          onPress={() => setEyeState(!eyeState)}
          color={'#5f5a5a'}
          name="eye-off-outline"
          size={25}
        />
      ) : (
        <Eye
          style={{marginRight: 15}}
          onPress={() => setEyeState(!eyeState)}
          color={'#5f5a5a'}
          name="eye-outline"
          size={25}
        />
      )}
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
