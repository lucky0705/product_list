import React from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {getWidth} from '../../utils/Util';
import Button from '../button';
import Input from '../input';

export default function AddProduct(props) {
  const {
    isModalVisible,
    productName,
    price,
    onChangeProductName,
    onChangeTextPrice,
    onPressAdd,
    isProductName,
    isPrice,
  } = props;

  // cancel button
  const cancelButton = status => {
    props.hideOverlay(status);
  };

  const _renderAddProducts = () => {
    return (
      <KeyboardAvoidingView
        style={styles.contentView}
        behavior={'padding'}
        keyboardVerticalOffset={100}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            placeholder={'Product Name'}
            value={productName}
            error={isProductName}
            onChangeText={onChangeProductName}
            blurOnSubmit={true}
            style={styles.inputContainerStyle}
            error={isProductName}
          />

          <Input
            placeholder={'Product Price'}
            value={price}
            error={isPrice}
            onChangeText={onChangeTextPrice}
            blurOnSubmit={true}
            style={styles.inputContainerStyle}
            error={isPrice}
            keyboardType={'numeric'}
          />

          <View style={[styles.bottomButtonView]}>
            <Button
              title={'BACK'}
              onPress={() => {
                cancelButton();
              }}
              buttonTextStyle={styles.cancelButtonTextStyle}
              style={styles.cancelButtonStyle}
            />
            <Button
              title={'ADD'}
              onPress={onPressAdd}
              buttonTextStyle={styles.requestTextStyle}
              style={styles.requestButtonStyle}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };

  return (
    <Modal
      visible={isModalVisible}
      transparent={true}
      style={styles.modelStyle}
      animationType={'none'}
      statusBarTranslucent={true}
      onRequestClose={() => {}}>
      <SafeAreaView style={styles.safeAreaViewStyle} />
      <View style={styles.container}>{_renderAddProducts()}</View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  safeAreaViewStyle: {
    flex: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  modelStyle: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1,
  },
  contentView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    width: '90%',
  },
  bottomButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginBottom: 25,
  },
  cancelButtonTextStyle: {
    color: '#8A2BE2',
    fontWeight: 'bold',
    fontSize: 12,
  },
  cancelButtonStyle: {
    borderColor: '#8A2BE2',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: getWidth(40),
    height: 40,
  },
  requestTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  requestButtonStyle: {
    backgroundColor: '#8A2BE2',
    alignItems: 'center',
    justifyContent: 'center',
    width: getWidth(40),
    height: 40,
    borderRadius: 5,
  },
  inputContainerStyle: {
    height: 44,
    width: '100%',
    borderRadius: 5,
    borderColor: '#8A2BE2',
    alignSelf: 'flex-start',
  },
});
