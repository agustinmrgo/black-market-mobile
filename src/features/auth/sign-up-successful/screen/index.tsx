import Button from 'common/Button';
import Label from 'common/Label';
import React from 'react';
import { View } from 'react-native';

import AuthImageBackground from 'features/auth/background';
import AuthContainer from 'features/auth/container';

import styles from './styles';
import { SignUpSuccessfulPropTypes } from './types';

const SignUpSuccessfulScreen: React.FunctionComponent<SignUpSuccessfulPropTypes> = ({
  navigation: { navigate },
}) => (
  <AuthImageBackground>
    <AuthContainer showLogo>
      <View style={styles.signUpSuccessfulContainer}>
        <Label>We’ve just sent you an email to confirm your account.</Label>
        <Label>Check your email and log in with your credentials </Label>
      </View>
      <Button title="Go back to login" onPress={() => navigate('Welcome')} />
    </AuthContainer>
  </AuthImageBackground>
);

export default SignUpSuccessfulScreen;
