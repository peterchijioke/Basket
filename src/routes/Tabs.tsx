import {
  View,
  Text,
  StyleSheet,
  Image,
  StyleProp,
  TextInput,
  StatusBar,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import Home, {homeScreenID} from '../screens/Home';
import Saved, {savedScreenID} from '../screens/Saved';
import Account, {accountScreenID} from '../screens/Account';
import Cart, {cartScreenID} from '../screens/Cart';
import Header from '../components/common/Header';
import TabHeader from '../components/common/TabHeader';

export const tabName = 'Tab';
const headerImage = {uri: 'https://www.w3schools.com/w3images/lights.jpg'};

export default function Tabs() {
  const navigation = useNavigation();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  // <View style={styles.cartTop}>
  //   <Ionicons
  //     style={{textAlign: 'center'}}
  //     color="white"
  //     name="cart-outline"
  //     size={20}
  //   />
  // </View>
  //     ),

  //     headerTitle: () => (
  //       <View style={styles.wrap}>
  //         <Ionicons name="search" size={20} />
  //         <TextInput
  //           style={{
  //             flexGrow: 1,
  //             backgroundColor: 'transparent',
  //             borderRadius: 5,
  //             padding: 5,
  //           }}
  //           placeholder="Search"
  //         />
  //       </View>
  //     ),
  //     headerRight: () => (
  //       <View style={{marginLeft: 20}}>
  //         <Ionicons size={25} name="menu" color="tomato" />
  //       </View>
  //     ),
  //   });
  // }, []);

  return (
    <View style={{flexGrow: 1}}>
      <TabHeader />
      <StatusBar barStyle="light-content" backgroundColor="#133" />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name == 'Cart') {
              return (
                <Ionicons
                  name={'cart-outline'}
                  size={size}
                  color={focused ? color : '#84909A'}
                />
              );
            }
            if (route.name == 'Saved') {
              return (
                <Ionicons
                  name={'star-outline'}
                  size={size}
                  color={focused ? color : '#84909A'}
                />
              );
            }
            if (route.name == 'Home') {
              return (
                <Ionicons
                  name={'home-outline'}
                  size={size}
                  color={focused ? color : '#84909A'}
                />
              );
            }
            if (route.name == 'Account') {
              return (
                <Ionicons
                  name={'person-outline'}
                  size={size}
                  color={focused ? color : '#84909A'}
                />
              );
            }
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: '#84909A',
          headerShown: false,
        })}>
        <Tab.Screen name={homeScreenID} component={Home} />
        <Tab.Screen name={savedScreenID} component={Saved} />
        <Tab.Screen name={accountScreenID} component={Account} />
        <Tab.Screen name={cartScreenID} component={Cart} />
      </Tab.Navigator>
    </View>
  );
}
const styles: any = StyleSheet.create({
  cartTop: {
    width: 40,
    margin: 0,
    height: 40,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato',
    borderRadius: 20,
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
