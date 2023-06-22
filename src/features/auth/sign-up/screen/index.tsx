import Button from 'common/Button';
import Input from 'common/Input';
import Label from 'common/Label';
import React, { useState } from 'react';
import { View } from 'react-native';
import Toast from 'react-native-toast-message';

import AuthImageBackground from 'features/auth/background';
import AuthContainer from 'features/auth/container';

import { useRegisterUser } from '../../../../network/queries/auth-queries';
import styles from './styles';
import { SignUpPropTypes } from './types';

const SignUpScreen: React.FunctionComponent<SignUpPropTypes> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { mutate } = useRegisterUser({
    onSuccess: data => {
      setEmailError('');
      setPasswordError('');
      Toast.show({
        type: 'success',
        text1: JSON.stringify(data.detail),
        text2: 'Check your email for confirmation link',
      });
    },
    onError: error => {
      const { email: emailResponse, password1 } = error?.response?.data;
      if (emailResponse) {
        setEmailError(emailResponse[0]);
      }
      if (password1) {
        setPasswordError(password1[0]);
      }
      if (!emailResponse) {
        setEmailError('');
      }
      if (!password1) {
        setPasswordError('');
      }
    },
  });

  const handleSignUp = () => mutate({ email, password1: password, password2: password });

  return (
    <AuthImageBackground>
      <AuthContainer showLogo>
        <View style={styles.signUpForm}>
          <View style={styles.inputContainer}>
            <Label>Email</Label>
            <Input
              style={styles.input}
              placeholder="Type your email"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {emailError ? <Label style={styles.errorLabel}>{emailError}</Label> : null}
          </View>
          <View style={styles.inputContainer}>
            <Label>Password</Label>
            <Input
              style={styles.input}
              placeholder="Type your password"
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />
            {passwordError ? <Label style={styles.errorLabel}>{passwordError}</Label> : null}
          </View>
        </View>
        <Button title="Sign Up" onPress={handleSignUp} disabled={!email || !password} />
      </AuthContainer>
    </AuthImageBackground>
  );
};
export default SignUpScreen;
