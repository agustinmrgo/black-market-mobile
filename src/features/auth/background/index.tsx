import React, { ReactNode } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';

import WelcomeBackground from '@assets/welcome-background.png';

import styles from './styles';

export default ({ children }: { children: ReactNode }) => (
  <ImageBackground source={WelcomeBackground} style={styles.backgroundImage}>
    <SafeAreaView style={styles.pageContainer}>{children}</SafeAreaView>
  </ImageBackground>
);
