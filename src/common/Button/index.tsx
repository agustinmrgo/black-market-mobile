import Pressable from 'common/Pressable';
import React from 'react';
import { Text } from 'react-native';

import styles from './styles';
import { ButtonProps } from './types';

export const Button: React.FunctionComponent<ButtonProps> = ({
  title,
  disabled = false,
  darkTheme = true,
  ...props
}) => (
  <Pressable
    containerStyle={[styles.container, darkTheme ? styles.darkContainer : styles.lightContainer]}
    disabledStyle={styles.disabledContainer}
    disabled={disabled}
    {...props}>
    <Text
      style={[
        styles.title,
        disabled && styles.disabledTitle,
        darkTheme ? styles.darkTitle : styles.lightTitle,
      ]}>
      {title}
    </Text>
  </Pressable>
);
