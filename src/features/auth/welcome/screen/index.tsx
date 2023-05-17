import Button from 'common/Button';
import Input from 'common/Input';
import { useState } from 'react';
import React from 'react';
import {
  Image,
  ImageBackground,
  Linking,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import styles from './styles';
import { WelcomePropTypes } from './types';

const WelcomeScreen: React.FunctionComponent<WelcomePropTypes> = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isDarkMode = useColorScheme() === 'dark';

  const onLogInPress = () => navigate('LogIn');
  const onSignUpPress = () => navigate('SignUp');

  const handleLinkPress = () => {
    Linking.openURL('https://google.com');
    // navigate('ForgotPassword');
  };

  return (
    <ImageBackground
      source={require('../../../../assets/welcome-background.png')}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.pageContainer}>
        <StatusBar barStyle={!isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={styles.viewContainer}>
          <Image style={styles.image} source={require('../../../../assets/welcome-logo.png')} />
          <View style={styles.signInForm}>
            <Text style={styles.label}>Email</Text>
            <Input
              style={styles.input}
              placeholder="Type your password"
              onChangeText={setEmail}
              value={email}
            />
            <Text style={styles.label}>Password</Text>
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
          </View>
          <Text onPress={handleLinkPress} style={styles.forgotPassword}>
            I forgot my password
          </Text>
        </View>
        <View style={[styles.viewContainer, styles.signUpSection]}>
          <Text style={styles.signUpHeading}>Don't have an account?</Text>
          <Button
            testID="dummy-button"
            accessibilityState={{ disabled: false }}
            title="Sign Up"
            onPress={onSignUpPress}
            darkTheme={false}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default WelcomeScreen;
