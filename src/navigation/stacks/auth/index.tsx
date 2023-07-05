import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthStackParamList } from 'navigation/types';

import LogInScreen from 'features/auth/sign-in/screen';
import SignUpSuccessfulScreen from 'features/auth/sign-up-successful/screen';
import SignUpScreen from 'features/auth/sign-up/screen';
import WelcomeScreen from 'features/auth/welcome/screen';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FunctionComponent = () => (
  <AuthStack.Navigator initialRouteName={'Welcome'}>
    <AuthStack.Screen name={'Welcome'} component={WelcomeScreen} options={{ headerShown: false }} />
    <AuthStack.Screen name={'LogIn'} component={LogInScreen} options={{ headerShown: false }} />
    <AuthStack.Screen name={'SignUp'} component={SignUpScreen} options={{ headerShown: false }} />
    <AuthStack.Screen
      name={'SignUpSuccessful'}
      component={SignUpSuccessfulScreen}
      options={{ headerShown: false }}
    />
  </AuthStack.Navigator>
);

export default AuthNavigator;
