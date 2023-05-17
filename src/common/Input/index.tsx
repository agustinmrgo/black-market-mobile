import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';
import { InputProps } from './types';

const Input = ({ placeholder, onChangeText, value, style, ...props }: InputProps) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      {...props}
    />
  );
};

export default Input;
