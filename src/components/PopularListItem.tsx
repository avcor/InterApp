import {FC} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Item from '../types/PopularType';
import {beach_hut} from '../utils/ImageExporter';
import {roboto_bold, roboto_light, roboto_regular} from '../utils/FontConstant';
import {white} from '../utils/colorHexCodes';

const PopularListitem: FC<{item: Item}> = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBack}
        source={{uri: item.imageUrl}}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.textPlace}>{item.place}</Text>
        <Text style={styles.textHotels}>{item.hotels + ' hotels'}</Text>
      </View>
    </View>
  );
};

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
