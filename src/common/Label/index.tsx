import React from 'react';
import { Text, TextProps } from 'react-native';

import styles from './styles';

const Label: React.FunctionComponent<TextProps> = ({ children, style, ...props }) => {
  return (
    <Text style={[styles.label, style]} {...props}>
      {children}
    </Text>
  );
};

export default Label;
