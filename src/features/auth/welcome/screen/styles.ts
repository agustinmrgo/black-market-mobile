import { StyleSheet } from 'react-native';

import { LINK_BLUE } from 'constants/styles';

export default StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  signInForm: {
    width: '100%',
    marginBottom: 16,
  },
  signUpSection: {
    marginTop: 16,
  },
  signUpHeading: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  forgotPassword: {
    color: LINK_BLUE,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
