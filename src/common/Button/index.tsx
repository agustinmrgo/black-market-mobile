import Pressable from 'common/Pressable';
import React from 'react';
import { Text } from 'react-native';

import styles from './styles';
import { ButtonProps } from './types';

const Button: React.FunctionComponent<ButtonProps> = ({
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
    <Text style={[disabled && styles.disabledTitle, darkTheme ? styles.darkTitle : styles.title]}>
      {title}
    </Text>
  </Pressable>
);

export default Button;
