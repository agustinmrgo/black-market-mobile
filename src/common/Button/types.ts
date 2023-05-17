import { ComponentProps } from 'react';
import { Pressable } from 'react-native';

export type ButtonProps = {
  title: string;
  darkTheme?: boolean;
} & ComponentProps<typeof Pressable>;
