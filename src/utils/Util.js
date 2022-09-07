// import moment from 'moment';
import React from 'react';
import {Platform, Text} from 'react-native';
// import GlobalStyles from '../components/globalStyles';
import {
  MetrixConstant,
} from '../constants/Constants';
// import 'moment/locale/ar';

// export function errorMessage(message) {
//   return message ? (
//     <Text style={GlobalStyles.validationText}>{message}</Text>
//   ) : null;
// }
/**
 * This function will provide you width of any UI component
 * using screen width and value should be in percentage.
 * @param {number} value in percentage
 * @returns {number} Width when calculation completed.
 */
export const getWidth = (value = 0) => {
  var width = (MetrixConstant.SCREEN_WIDTH * value) / 100;
  return width;
};

/**
 * This function will provide you height of any UI component
 * using screen hight and value should be in percentage.
 * @param {number} value in percentage
 * @returns {number} Height when calculation completed.
 */
export const getHeight = (value = 0) => {
  var height = (MetrixConstant.SCREEN_HEIGHT * value) / 100;
  return height;
};

/**
 * This function will capitalize the first character of any word.
 * @param {String} value as String
 * @returns {String} Converted String
 */
export const capitalize = (value = '') => {
  let uppercaseFirstLetter = '';
  if (value) {
    uppercaseFirstLetter =
      String(value).charAt(0).toUpperCase() + String(value).slice(1);
  } else {
    uppercaseFirstLetter = '';
  }
  return uppercaseFirstLetter;
};

//All text upper case.
export const toUpperCaseChar = (value = '') => {
  let uppercaseFirstLetter = '';
  if (value) {
    uppercaseFirstLetter = String(value).toUpperCase();
  } else {
    uppercaseFirstLetter = '';
  }
  return uppercaseFirstLetter;
};

export const conTwoDecDigit = digit => {
  return digit.indexOf('.') > 0
    ? digit.split('.').length >= 2
      ? digit.split('.')[0] + '.' + digit.split('.')[1].substring(-1, 2)
      : digit
    : digit;
};

export const convertToDecimalValue = value => {
  return Number(value).toFixed(2);
};

/**
 * This function is used to replace a string with another string at all place
 */
export const replaceAll = (string, search, replace) => {
  return string.split(search).join(replace);
};
