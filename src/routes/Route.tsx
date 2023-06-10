import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs, {tabName} from './Tabs';
const Stack = createNativeStackNavigator();

const Route = () => {
  // call login state
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* {isLoggedIn ? ( */}
        <Stack.Group>
          <Stack.Screen
            options={{
              headerStyle: {backgroundColor: '#133'},
            }}
            name={tabName}
            component={Tabs}
          />
        </Stack.Group>
        {/* ) : ( */}
        <Stack.Group screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
          {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
        </Stack.Group>
        {/* )} */}
        <Stack.Group screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
          {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;

const styles = StyleSheet.create({});
