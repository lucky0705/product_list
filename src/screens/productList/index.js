import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import DraggableFlatList, {
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import AddProduct from '../../components/addProduct';
import Button from '../../components/button';
import SortList from '../../components/sortProduct';
import styles from './styles';

const products = [
  // {
  //   id: 1,
  //   productName: 'Lipstick',
  //   price: '250',
  //   productImage:
  //     'https://cdn.shopify.com/s/files/1/0252/9897/products/SL1301afn.jpg?v=1633267359',
  // },
  // {
  //   id: 2,
  //   productName: 'Eye liner',
  //   price: '250',
  //   productImage:
  //     'https://media.istockphoto.com/photos/red-lipstick-picture-id164505409?k=20&m=164505409&s=612x612&w=0&h=evKXOXMe3_pDd87-B6rDuu7DCx1z-bNrFAr5xNzHDLA=',
  // },
  // {
  //   id: 3,
  //   productName: 'Face powder',
  //   price: '250',
  //   productImage:
  //     'https://media.istockphoto.com/photos/red-lipstick-picture-id164505409?k=20&m=164505409&s=612x612&w=0&h=evKXOXMe3_pDd87-B6rDuu7DCx1z-bNrFAr5xNzHDLA=',
  // },
  // {
  //   id: 4,
  //   productName: 'Nailpolish',
  //   price: '250',
  //   productImage:
  //     'https://media.istockphoto.com/photos/red-lipstick-picture-id164505409?k=20&m=164505409&s=612x612&w=0&h=evKXOXMe3_pDd87-B6rDuu7DCx1z-bNrFAr5xNzHDLA=',
  // },
];

export default function ProductList() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [productName, setProductName] = useState('');
  const [isProductName, setIsProductName] = useState('');
  const [price, setPrice] = useState('');
  const [isPrice, setIsPrice] = useState('');
  const [edit, setEdit] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dropDown, setDropDown] = useState(false);

  const renderItem = ({item, index, drag, isActive}) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          style={styles.renderListView}>
          <View style={styles.itemListImageView}>
            <Image
              source={{uri: item.productImage}}
              style={styles.listImage}
              resizeMode="contain"
            />
          </View>
          <View style={styles.productNamePriceButtonView}>
            <Text style={styles.productNameText}>{item.productName}</Text>
            <Text style={{fontSize: 12, fontWeight: '500', color: '#8A2BE2'}}>
              {'$' + item.price}
            </Text>
            <View style={[styles.bottomButtonView]}>
              <Button
                title={'Delete'}
                onPress={() => {
                  onPressDelete(index);
                }}
                buttonTextStyle={styles.cancelButtonTextStyle}
                style={styles.cancelButtonStyle}
              />
              <Button
                title={'Edit'}
                onPress={() => onPressEdit(index)}
                buttonTextStyle={styles.requestTextStyle}
                style={styles.requestButtonStyle}
              />
            </View>
          </View>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  const hideOverlay = () => {
    setVisible(false);
  };

  const closeSortpopup = () => {
    setDropDown(!dropDown);
  };

  const _onChangeTextProductName = text => {
    setProductName(text);
    setIsProductName(text?'':'Please enter product name');
  };

  const _onChangeTextPrice = text => {
    setPrice(text);
    setIsPrice(text?'':'Please enter product price');
  };

  const _onPressAdd = () => {
    console.log('111');
    if (!productName || isProductName || !price || isPrice) {
      console.log('111222');
      setIsProductName(
        !productName ? 'Please enter product name' : isProductName,
      );
      setIsPrice(!price ? 'Please enter product price' : isPrice);
    } else {
      console.log('111333');
      let a = [...data];
      if (edit) {
        console.log('111444');
        a.map((item, index) => {
          if (currentIndex == index) {
            a[index].productName = productName;
            a[index].price = price;
          }
        });
      } else {
        console.log('111555');
        a.push({
          id: Math.floor(Math.random() * 10000),
          productName: productName,
          price: price,
          productImage:
            'https://media.istockphoto.com/photos/red-lipstick-picture-id164505409?k=20&m=164505409&s=612x612&w=0&h=evKXOXMe3_pDd87-B6rDuu7DCx1z-bNrFAr5xNzHDLA=',
        });
      }
      setData(a);
      setVisible(false);
    }
  };

  const onPressEdit = index => {
    setProductName(data[index].productName);
    setPrice(data[index].price);
    setEdit(true);
    setCurrentIndex(index);
    setVisible(true);
    setIsProductName('');
    setIsPrice('');
  };

  const onPressAddProducts = () => {
    setProductName('');
    setPrice('');
    setIsProductName('');
    setIsPrice('');
    setEdit(false);
    setVisible(true);
  };

  const onPressDelete = index => {
    let a = [...data];
    console.log(a);
    const data1 = a.splice(index, 1);
    console.log(a);
    setData(a);
  };

  const onPressLowToHigh = index => {
    let a = [...data];
    a.sort((a, b) => a.price - b.price);
    console.log(a);
    setData(a);
  };

  const onPressHighToLow = index => {
    let a = [...data];
    a.sort((a, b) => b.price - a.price);
    console.log(a);
    setData(a);
  };

  const sortOptions = ['Low to High', 'High to Low'];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainView}>
        {data.length > 0 ? (
          <>
            <View style={styles.topButtonView}>
              <Button
                title="Sort"
                style={styles.sortButton}
                buttonTextStyle={styles.sortButtonText}
                onPress={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <View style={styles.sortOptionListView}>
                  <FlatList
                    data={sortOptions}
                    renderItem={({item}) => <Text>{item}</Text>}
                  />
                </View>
              ) : null}

              <Button
                title="Add products"
                style={styles.addProductButton}
                buttonTextStyle={styles.addProductButtonText}
                onPress={() => onPressAddProducts()}
              />
            </View>

            <DraggableFlatList
              data={data}
              onDragEnd={({data}) => setData(data)}
              keyExtractor={index => index}
              renderItem={renderItem}
              contentContainerStyle={styles.draggableFlatListContainer}
            />
          </>
        ) : (
          <View style={styles.addProductButtonView}>
            <Button
              title="Add products"
              style={styles.addProductButton}
              buttonTextStyle={styles.addProductButtonText}
              onPress={() => onPressAddProducts()}
            />
          </View>
        )}
        <AddProduct
          isModalVisible={visible}
          onChangeProductName={_onChangeTextProductName}
          onChangeTextPrice={_onChangeTextPrice}
          productName={productName}
          price={price}
          isProductName={isProductName}
          isPrice={isPrice}
          hideOverlay={hideOverlay}
          onPressAdd={() => _onPressAdd()}
        />

        <SortList
          isModalVisible={dropDown}
          listData={sortOptions}
          hideOverlay={closeSortpopup}
          onPressLowToHigh={() => onPressLowToHigh()}
          onPressHighToLow={() => onPressHighToLow()}
        />
      </View>
    </SafeAreaView>
  );
}
