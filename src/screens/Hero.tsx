import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Colors} from '../utils';
import Header from '../components/common/Header';
import LayoutWrapper from '../components/common/LayoutWrapper';
import AppText from '../components/common/AppText';
import HeroLayout from '../components/hero/HeroLayout';

export default function Hero() {
  return (
    <View style={styles.wrapper}>
      <Header />
      <ScrollView>
        <HeroLayout />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});
export const HeroScreenID = 'Hero';
