import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs, {tabName} from './Tabs';
import Login, {loginSreenID} from '../screens/Login';
import Hero, {HeroScreenID} from '../screens/Hero';
import Landing, {landinScreenID} from '../screens/Landing';
const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name={landinScreenID} component={Landing} />
          <Stack.Screen name={HeroScreenID} component={Hero} />
          <Stack.Screen name={loginSreenID} component={Login} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            options={{
              headerShown: false,
              headerStyle: {backgroundColor: '#112e42'},
            }}
            name={tabName}
            component={Tabs}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;

const styles = StyleSheet.create({});
