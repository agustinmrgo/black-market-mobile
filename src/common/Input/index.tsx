import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';
import { InputProps } from './types';

const Input = ({ placeholder, onChangeText, value }: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default Input;
