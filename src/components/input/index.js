import React, {forwardRef, useEffect, useRef, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {MetrixConstant} from '../../constants/Constants';
import styles, {containerStyle} from './Styles';

/**
 * Reusable Input component.
 * @example <Input ref={myRef} onChangeText={(val) => {}} value="test" />
 */
const Input = forwardRef((props, ref) => {
  const {
    placeholder,
    onChangeText,
    value,
    keyboardType,
    secureTextEntry,
    returnKeyType,
    isSelection,
    autoFocus,
    onSubmitEditing,
    TextInputStyle,
    editable,
    pointerEvents,
    isMandatory,
    maxLength,
    blurOnSubmit,
    autoCapitalize,
    onTouchStart,
    textAlignVertical,
    multiline,
    leftIcon,
    numberOfLines,
    style,
    label,
    labelStyle,
    labelTextStyle,
    togglePassword,
    errorTextStyle,
    error,
    onFocus,
    updateRef,
    placeholderTextColor,
    container,
    leftText,
    onKeyPress,
  } = props;
  const [activeBorder, setActiveBorder] = useState(false);

  // ===================={REFERENCES}=======================//
  const myRef = useRef(null);

  // ===================={COMPONENT DID MOUNT}=======================//
  useEffect(() => {
    if (updateRef != undefined) {
      updateRef(myRef);
    }
    return () => {};
  }, [updateRef]);

  // ===================={ON SUBMIT ACTION}=======================//
  const onSubmit = () => {
    if (onSubmitEditing != undefined) {
      onSubmitEditing();
    }
  };

  return (
    <View style={[styles.container, container]}>
      <View style={[styles.labelContainer, labelStyle]}>
        {label && (
          <Text style={[styles.label, labelTextStyle]}>
            {label}
            <Text style={styles.redStar}>{isMandatory ? '*' : ''}</Text>
          </Text>
        )}
      </View>
      <View
        style={[
          activeBorder
            ? containerStyle.activeBordered
            : containerStyle.bordered,
          error ? containerStyle.errorBordered : null,
          style,
        ]}>
        <View
          style={[
            TextInputStyle,
            {
              justifyContent: multiline ? 'flex-start' : 'center',
              minHeight: 44,
            },
          ]}>
          {value ? null : (
            <Text
              style={[
                styles.placeHolderText2,
                {
                  marginTop: multiline ? 6 : 0,
                  textAlignVertical: textAlignVertical,
                  paddingHorizontal: leftIcon
                    ? 33
                    : leftText
                    ? leftText.length *
                      (MetrixConstant.iphone_5_Series ? 12 : 14)
                    : null,
                },
              ]}>
              {placeholder}
            </Text>
          )}
          <View style={styles.inputTextFieldView}>
            <TextInput
              placeholderTextColor={placeholderTextColor ?? 'gray'}
              placeholder={''}
              onChangeText={onChangeText}
              value={value}
              keyboardType={keyboardType}
              blurOnSubmit={blurOnSubmit}
              secureTextEntry={secureTextEntry}
              autoCorrect={false}
              returnKeyType={returnKeyType}
              numberOfLines={numberOfLines}
              selection={isSelection ? {start: 0, end: 0} : undefined}
              autoFocus={autoFocus}
              onSubmitEditing={onSubmit}
              ref={ref}
              editable={editable}
              pointerEvents={pointerEvents}
              autoCapitalize={autoCapitalize}
              style={[
                togglePassword ? {flex: 0.9} : {flex: 1},
                styles.input,
                TextInputStyle,
                {
                  color: 'black',
                  paddingStart: 5,
                  textAlign: 'left',
                  paddingRight: 7,
                },
              ]}
              maxLength={maxLength}
              onTouchStart={onTouchStart}
              textAlignVertical={textAlignVertical}
              multiline={multiline}
              onFocus={() =>
                onFocus ? setActiveBorder(true) : setActiveBorder(false)
              }
              onBlur={() => setActiveBorder(false)}
              onKeyPress={onKeyPress}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.errorText, errorTextStyle]} numberOfLines={3}>
        {error ?? ''}
      </Text>
    </View>
  );
});

export default Input;

Input.defaultProps = {
  editable: true,
  type: 'default',
  label: null,
};
