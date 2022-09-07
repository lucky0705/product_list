import React from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {MetrixConstant} from '../../constants/Constants';

/**
 * Button component.
 */
const Button = props => {
  const {title, opacity, onPress, style, buttonTextStyle, disabled} = props;

  return (
    <Animated.View>
      <TouchableOpacity
        disabled={disabled}
        style={style ?? styles.large}
        activeOpacity={opacity}
        onPress={onPress}>
        <Text style={buttonTextStyle ?? styles.buttonTextStyle}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Button;

Button.defaultProps = {
  title: '',
  opacity: 0.5,
  indicatorColor: 'black',
  indicatorSize: 'small',
  type: 'large',
};

const commonStyles = StyleSheet.create({
  button: {
    width: MetrixConstant.SCREEN_WIDTH * 0.85,
    height: 40,
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'blue',
  },
});

const styles = StyleSheet.create({
  large: {
    ...commonStyles.button,
    width: MetrixConstant.SCREEN_WIDTH * 0.85,
  },
  small: {
    ...commonStyles.button,
    width: MetrixConstant.SCREEN_WIDTH * 0.35,
  },
  buttonTextStyle: {
    textAlign: 'center',
    color: 'black',
    lineHeight: 30,
  },
});
