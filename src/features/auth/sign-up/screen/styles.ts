import { StyleSheet } from 'react-native';

import { ERROR_TEXT } from 'constants/styles';

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 4,
  },
  errorLabel: {
    color: ERROR_TEXT,
    fontWeight: 'bold',
    marginTop: 2,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 4,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  signUpForm: {
    width: '100%',
    marginBottom: 16,
  },
});

export default styles;
