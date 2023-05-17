import { StyleSheet } from 'react-native';

import { LINK_BLUE } from 'constants/styles';

export default StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
  },
  imageContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  viewContainer: {
    width: '100%',
    borderRadius: 8,
    padding: 26,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
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
  label: {
    fontSize: 14,
  },
  input: {
    marginBottom: 16,
  },
  forgotPassword: {
    color: LINK_BLUE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    marginTop: 16,
    marginBottom: 36,
    width: 173,
    height: 30,
  },
});
