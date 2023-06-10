import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function LayoutWrapper({...props}) {
  return <View style={{...styles.container, ...props.styles}} {...props} />;
}

const styles = StyleSheet.create({
  container: {flex: 1, flexGrow: 1},
});
