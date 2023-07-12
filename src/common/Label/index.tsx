import React from 'react';
import { Text, TextProps } from 'react-native';

import styles from './styles';

export const Label: React.FunctionComponent<TextProps> = ({ children, style, ...props }) => (
  <Text style={[styles.label, style]} {...props}>
    {children}
  </Text>
);
