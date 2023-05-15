import { ComponentProps } from 'react';
import { TextInput } from 'react-native';

export type InputProps = {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
} & ComponentProps<typeof TextInput>;
