import { StyleSheet } from 'react-native';

import { BLACK, GREY_01, GREY_02, WHITE } from 'constants/styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 8,
  },
  darkContainer: {
    backgroundColor: BLACK,
  },
  lightContainer: {
    backgroundColor: WHITE,
    borderWidth: 1,
  },
  disabledContainer: {
    backgroundColor: GREY_01,
    borderColor: WHITE,
  },
  title: {
    fontWeight: '700',
    lineHeight: 22,
    fontSize: 16,
  },
  lightTitle: {
    color: BLACK,
  },
  darkTitle: {
    color: WHITE,
  },
  disabledTitle: {
    color: GREY_02,
  },
});

export default styles;
