import Button from 'common/Button';
import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import styles from './styles';
import { WelcomePropTypes } from './types';

const WelcomeScreen: React.FunctionComponent<WelcomePropTypes> = ({ navigation: { navigate } }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const onLogInPress = () => navigate('LogIn');
  const onSignUpPress = () => navigate('SignUp');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Button
        testID="dummy-button"
        accessibilityState={{ disabled: false }}
        title="Log in"
        onPress={onLogInPress}
      />
      <Button
        testID="dummy-button"
        accessibilityState={{ disabled: false }}
        title="Sign Up"
        onPress={onSignUpPress}
      />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
