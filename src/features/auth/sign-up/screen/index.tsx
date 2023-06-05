import Button from 'common/Button';
import Input from 'common/Input';
import Label from 'common/Label';
import React, { useState } from 'react';
import { View } from 'react-native';

import AuthImageBackground from 'features/auth/background';
import AuthContainer from 'features/auth/container';

import { useRegisterUser } from '../../../../network/queries/auth-queries';
import styles from './styles';
import { SignUpPropTypes } from './types';

const SignUpScreen: React.FunctionComponent<SignUpPropTypes> = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const { mutate } = useRegisterUser({
    onSuccess: data => {
      console.log('Registration successful:', data);
    },
    onError: error => {
      console.error(error.message);
    },
  });

  const handleSignUp = () => {
    console.error('HANDLE SIGNUP');
    mutate({ email, password1: password, password2: password });
  };

  return (
    <AuthImageBackground>
      <AuthContainer showLogo>
        <View style={styles.signUpForm}>
          <Label>Email</Label>
          <Input
            style={styles.input}
            placeholder="Type your email"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Label>Full Name</Label>
          <Input
            style={styles.input}
            placeholder="Type your full name"
            onChangeText={setFullName}
            value={fullName}
            autoCapitalize="words"
          />
          <Label>Password</Label>
          <Input
            style={styles.input}
            placeholder="Type your password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />
        </View>
        <Button title="Sign Up" onPress={handleSignUp} />
      </AuthContainer>
    </AuthImageBackground>
  );
};
export default SignUpScreen;
