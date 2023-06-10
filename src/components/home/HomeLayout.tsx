import {View, Text, useWindowDimensions, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppText from '../common/AppText';
import CardItemWrap from './CardItemWrap';
import {_retrieveUser} from '../../services/general';
import {UserInterface} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {getUserService, loginSevice} from '../../services/Api';
const headerImage = {uri: 'https://www.w3schools.com/w3images/lights.jpg'};
export default function HomeLayout() {
  const navigation: any = useNavigation();
  const [user, setUser] = useState<any>();
  const getToken = async () => {
    const {token}: UserInterface | null | any = await _retrieveUser();
    if (!token) {
      navigation.navigate(loginSevice);
    } else {
      const userData = await getUserService();
      const data = await userData?.json();
      console.log(data.users[0]);
      setUser(data.users[0]);
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  const {height} = useWindowDimensions();
  return (
    <View style={styles.wrapper}>
      <View style={{...styles.profileWrap, height: height / 5}}>
        <View style={styles.bg}>
          <Image
            style={styles.headerImage}
            source={user ? {uri: `${user.image}`} : headerImage}
          />
          <View style={styles.txtWrap}>
            <AppText
              styles={
                styles.title
              }>{`${user.firstName} ${user.lastName}`}</AppText>
            <AppText>{user.email}</AppText>
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
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
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
