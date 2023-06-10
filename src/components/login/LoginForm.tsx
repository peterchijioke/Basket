import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import AppTextInputEmail from '../common/AppTextInputEmail';
import AppTextInputPassword from '../common/AppTextInputPassword';
import CheckBox from '@react-native-community/checkbox';
import AppText from '../common/AppText';
import LoginButton from './LoginButton';
import EmailSection from './EmailSection';

export default function LoginForm() {
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);
  return (
    <View style={styles.wrapper}>
      <AppTextInputEmail styles={{marginBottom: 15}} />
      <AppTextInputPassword />
      <View style={styles.checkboxWrapper}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <AppText>Remember me</AppText>
      </View>
      <LoginButton onClick={() => {}} />
      <AppText styles={styles.forgotTxt}>Forgot Password?</AppText>
      <EmailSection />
    </View>
  );
}
const styles = StyleSheet.create({
  forgotTxt: {
    fontSize: 18,
    color: 'tomato',
    marginTop: 30,
    borderBottomColor: 'tomato',
    borderBottomWidth: 1,
  },
  wrapper: {
    width: '90%',
    alignItems: 'center',
    paddingTop: 35,
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: '#ccc',
    alignSelf: 'center',
    flexGrow: 1,
  },
  checkboxWrapper: {
    marginTop: 15,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
});
