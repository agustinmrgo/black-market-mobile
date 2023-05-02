import React from 'react';
import { View } from 'react-native';

import Logo from '../components/Logo';
import styles from './styles';
import { LogInPropTypes } from './types';

const LogInScreen: React.FunctionComponent<LogInPropTypes> = () => (
  <View style={styles.container}>
    <Logo />
  </View>
);

export default LogInScreen;
