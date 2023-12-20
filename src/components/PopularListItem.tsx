import {FC} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {roboto_bold, roboto_regular} from '../utils/FontConstant';
import {black, white} from '../utils/colorHexCodes';
import React  from 'react';
import { dealType, popularPlaceType } from '../types/PopularType';

function isDealType(obj: any): obj is dealType {
  return 'deal' in obj && 'discount' in obj && 'end' in obj;
}

const PopularListitem: FC<{item: popularPlaceType| dealType}> = ({item}) => {
  return (
    isDealType(item)? <DealComp item={item}/> :<PlaceComp item={item}/>

  );
};

const PlaceComp:FC<{item: popularPlaceType | dealType}> = ({item}) => {
  const data = item as popularPlaceType;

  return(
    <View style={styles.container}>
      <Image
        style={styles.imageBack}
        source={{uri: data.imageUrl}}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.textPlace}>{data.place}</Text>
        <Text style={styles.textHotels}>{data.hotels + ' hotels'}</Text>
      </View>
    </View>
  )
}

const DealComp:FC<{item: popularPlaceType | dealType}> = ({item}) => {
  const data = item as dealType;

  return(
    <View style={{height:10, backgroundColor: black, width: 10,}}>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column-reverse',
    width: '48%',
    backgroundColor: 'red',
    marginTop: '1%',
    borderRadius: 10,
    overflow: 'hidden',
    height: Dimensions.get('screen').height / 4.5,
  },
  imageBack: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  textPlace: {
    fontFamily: roboto_bold,
    color: white,
    fontSize: 20,
  },
  textHotels: {
    fontFamily: roboto_regular,
    color: white,
    fontSize: 15,
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

export default PopularListitem;
