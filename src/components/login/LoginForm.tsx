import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import React, {Dispatch, SetStateAction, useState} from 'react';
import AppTextInputEmail from '../common/AppTextInputEmail';
import AppTextInputPassword from '../common/AppTextInputPassword';
import CheckBox from '@react-native-community/checkbox';
import AppText from '../common/AppText';
import LoginButton from './LoginButton';
import EmailSection from './EmailSection';
import {useNavigation} from '@react-navigation/native';
import {loginSevice} from '../../services/Api';
import {_storeUser} from '../../services/general';
import {UserInterface} from '../../types';
import {tabName} from '../../routes/Tabs';
import {homeScreenID} from '../../screens/Home';

export default function LoginForm() {
  const navigation: any = useNavigation();
  const [email, setEmail] = useState<string>('kminchelle');
  const [password, setPassword] = useState<string>('0lelplR');
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);
  const [progress, setProgress] = useState<boolean>(false);
  const handleChange =
    (setState: Dispatch<SetStateAction<string>>) => (text: string) => {
      setState(text);
    };
  const handleLogin = async () => {
    setProgress(!progress);
    try {
      if (email === '' && password === '') {
        Alert.alert('Please enter email and password');
        setProgress(!progress);
        return;
      }
      const result = await loginSevice(email, password);
      const data: UserInterface = await result?.json();
      _storeUser(data);
      setProgress(!progress);
      navigation.navigate(tabName, {screen: `${homeScreenID}`});
    } catch (error: any) {
      setProgress(!progress);
      console.log(error.message);
    }
  };
  return (
    <View style={styles.wrapper}>
      <AppTextInputEmail
        value={email}
        onChangeText={handleChange(setEmail)}
        styles={{marginBottom: 15}}
      />
      <AppTextInputPassword
        value={password}
        onChangeText={handleChange(setPassword)}
      />
      <View style={styles.checkboxWrapper}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <AppText>Remember me</AppText>
      </View>
      <LoginButton progress={progress} onClick={handleLogin} />
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
