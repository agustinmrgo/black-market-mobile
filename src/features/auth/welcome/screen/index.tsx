import Button from 'common/Button';
import Input from 'common/Input';
import { useState } from 'react';
import React from 'react';
import { SafeAreaView, StatusBar, View, useColorScheme } from 'react-native';

import styles from './styles';
import { WelcomePropTypes } from './types';

const WelcomeScreen: React.FunctionComponent<WelcomePropTypes> = ({ navigation: { navigate } }) => {
  const [input, setInput] = useState('');

  const isDarkMode = useColorScheme() === 'dark';

  const onLogInPress = () => navigate('LogIn');
  const onSignUpPress = () => navigate('SignUp');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Input placeholder="Type your email" onChangeText={setInput} value={input} />
      <Button
        testID="dummy-button"
        accessibilityState={{ disabled: false }}
        title="Log in"
        onPress={onLogInPress}
      />
      <View style={{ width: '100%' }}>
        <Button
          testID="dummy-button"
          accessibilityState={{ disabled: false }}
          title="Sign Up"
          onPress={onSignUpPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
