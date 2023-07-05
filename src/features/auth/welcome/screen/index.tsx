import Button from 'common/Button';
import Input from 'common/Input';
import Label from 'common/Label';
import React, { useState } from 'react';
import { Linking, StatusBar, Text, View, useColorScheme } from 'react-native';

import AuthImageBackground from 'features/auth/background';
import AuthContainer from 'features/auth/container';

import { useLoginUser } from '../../../../network/queries/auth-queries';
import styles from './styles';
import { WelcomePropTypes } from './types';

const WelcomeScreen: React.FunctionComponent<WelcomePropTypes> = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isDarkMode = useColorScheme() === 'dark';

  const { mutate } = useLoginUser({
    onSuccess: data => {
      setError('');
      console.log(data);
    },
    onError: () => {
      setError('Your email or password are incorrect.');
    },
  });

  const onLogInPress = () => mutate({ email, password });
  const onSignUpPress = () => navigate('SignUpSuccessful');

  const handleLinkPress = () => {
    Linking.openURL('https://google.com');
  };

  return (
    <AuthImageBackground>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
      <AuthContainer showLogo>
        <View style={styles.signInForm}>
          <Label>Email</Label>
          <Input
            style={styles.input}
            placeholder="Type your password"
            onChangeText={setEmail}
            value={email}
          />
          <Label>Password</Label>
          <Input
            style={styles.input}
            placeholder="Type your email"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />
          <Button
            testID="dummy-button"
            accessibilityState={{ disabled: false }}
            title="Log in"
            onPress={onLogInPress}
          />
          {error ? <Label style={styles.errorLabel}>{error}</Label> : null}
        </View>
        <Text onPress={handleLinkPress} style={styles.forgotPassword}>
          I forgot my password
        </Text>
      </AuthContainer>
      <AuthContainer style={styles.signUpSection}>
        <Text style={styles.signUpHeading}>Don't have an account?</Text>
        <Button
          accessibilityState={{ disabled: false }}
          title="Sign Up"
          onPress={onSignUpPress}
          darkTheme={false}
        />
      </AuthContainer>
    </AuthImageBackground>
  );
};

export default WelcomeScreen;
