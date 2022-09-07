import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  inputCotainer: {
    marginTop: 8,
    borderRadius: 5,
    width: '100%',
    alignSelf: 'center',
  },
});

export const containerStyle = StyleSheet.create({
  default: {
    ...commonStyles.inputCotainer,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  bordered: {
    ...commonStyles.inputCotainer,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
  },
});

const Styles = StyleSheet.create({
  container: {
    ...commonStyles.inputCotainer,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    textAlign: 'left',
    marginTop: 3,
    marginBottom: 8,
  },
  label: {
    color: 'gray',
    fontSize: 14,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 44,
    textAlign: 'left',
  },
  inputTextFieldView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  redStar: {
    color: 'red',
  },
  rightImageStyle: {
    width: 30,
    height: 30,
  },
  iconViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.16,
  },
  placeHolderText2: {
    textAlign: 'left',
    color: 'gray',
    fontSize: 14,
    marginHorizontal:8 ,
  },
  leftText: {
    marginHorizontal: 7,
    color: 'gray',
    fontSize: 20,
  },
});

export default Styles;
