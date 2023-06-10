import {View, Text} from 'react-native';
import React from 'react';

const AppText = ({...props}) => {
  return <Text style={{color: '#112e42', ...props.styles}} {...props} />;
};
export default AppText;
