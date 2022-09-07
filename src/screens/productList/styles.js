import {StyleSheet} from 'react-native';
import {getHeight, getWidth} from '../../utils/Util';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  safeArea: {flex: 1},
  topButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:10,
    paddingVertical:5
  },
  bottomButtonView: {
    width: getWidth(75),
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sortButton: {
    borderColor: '#8A2BE2',
    borderWidth: 1,
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  cancelButtonTextStyle: {
    color: '#8A2BE2',
    fontWeight: 'bold',
    fontSize: 12,
  },
  sortButtonText: {
    color: '#8A2BE2',
    margin: 5,
    fontWeight: 'bold',
  },
  cancelButtonStyle: {
    borderColor: '#8A2BE2',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: getWidth(35),
    height: 25,
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
    width: getWidth(35),
    height: 25,
    borderRadius: 5,
  },
  sortOptionListView: {
    position: 'absolute',
    top: 30,
  },
  addProductButton: {
    borderColor: '#8A2BE2',
    borderWidth: 1,
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addProductButtonText: {
    color: '#8A2BE2',
    margin: 5,
    fontWeight: 'bold',
  },
  draggableFlatListContainer: {height: getHeight(100)},
  addProductButtonView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderListView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 5,
    borderColor: '#DCDCDC',
    borderWidth: 0.2,
    borderRadius: 5,
    shadowColor: '#DCDCDC',
    shadowOpacity: 0.2,
    shadowOffset: {width: 2, height: 4},
    shadowRadius: 5,
    elevation: 5,
    margin: 10,
    padding: 10,
  },
  itemListImageView: {
    justifyContent: 'center',
    borderWidth: 0.2,
    borderRadius: 3,
    borderColor: '#DCDCDC',
  },
  listImage: {
    width: 50,
    height: 50,
  },
  productNamePriceButtonView: {
    flex: 1,
    padding: 5,
  },
  productNameText: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default styles;
