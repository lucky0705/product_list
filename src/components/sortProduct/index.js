import React from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {getWidth} from '../../utils/Util';

export default function SortList(props) {
  const {
    isModalVisible,
    listData,
    onPressLowToHigh,
    onPressHighToLow,
  } = props;

  // cancel button
  const cancelButton = index => {
    if (index) {
      onPressHighToLow();
    } else {
      onPressLowToHigh();
    }

    props.hideOverlay(index);
  };

  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.listItemTouchableView}
        onPress={()=>cancelButton(index)}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };

  const _renderSortList = () => {
    return (
      <View style={styles.contentView}>
        <FlatList data={listData} renderItem={_renderItem} />
      </View>
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
      <SafeAreaView />
      <View style={styles.container}>{_renderSortList()}</View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    top: 30,
    width: getWidth(100),
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  modelStyle: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1,
  },
  contentView: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
    width: '35%',
  },
  listItemTouchableView:{
    borderWidth: 1,
    borderColor: '#8A2BE2',
    alignItems: 'center',
    padding: 2,
    borderRadius: 3,
    marginVertical: 1,
  },
});
