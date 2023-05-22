import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import styles from './styles';

const Input = ({ style, ...props }: TextInputProps) => {
  return <TextInput style={[styles.input, style]} {...props} />;
};

export default Input;
