import React, { ReactNode } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';

import styles from './styles';

export default ({ children }: { children: ReactNode }) => {
  return (
    <ImageBackground
      source={require('../../../assets/welcome-background.png')}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.pageContainer}>{children}</SafeAreaView>
    </ImageBackground>
  );
};
