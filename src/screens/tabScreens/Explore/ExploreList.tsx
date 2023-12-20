import {FlatList, StyleSheet, Text, View} from 'react-native';
import {
  black,
  purple_main,
} from '../../../utils/colorHexCodes';
import {
  roboto_bold,
} from '../../../utils/FontConstant';
import PopularListitem from '../../../components/PopularListItem';

import React  from 'react';
import { dealType, popularPlaceType } from '../../../types/PopularType';
import { dealsData, placesData } from '../../../utils/dataValue';
import usePopularHotels from '../../../hooks/usePopularHotel';


const ExploreList = () => {

  const {combinedData} = usePopularHotels()

  return (
    <View style={{flex:1}}>
     
     <View
        style={styles.textContainer}>
        <Text style={styles.text}>
          Popular places
        </Text>
        <Text
          style={styles.hyperText}>
          View All
        </Text>
      </View>
      <FlatList
        style={{flex:1}}
        columnWrapperStyle={styles.colWrapper}
        data={combinedData}
        numColumns={2}
        renderItem={i => {
          return <PopularListitem item={i.item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  text:{fontFamily: roboto_bold, color: black, fontSize: 17},
  hyperText:{fontFamily: roboto_bold, color: purple_main, fontSize: 16},
  colWrapper:{
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
export default ExploreList;
