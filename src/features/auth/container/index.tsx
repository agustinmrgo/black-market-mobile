import React from 'react';
import { Image, View, ViewProps } from 'react-native';

import styles from './styles';

export default ({
  showLogo = false,
  children,
  style,
  ...props
}: { showLogo?: boolean } & ViewProps) => {
  return (
    <View style={[styles.viewContainer, style]} {...props}>
      {showLogo && (
        <Image style={styles.image} source={require('../../../assets/welcome-logo.png')} />
      )}
      {children}
    </View>
  );
};
