import { StyleSheet, Text, View } from 'react-native';
import {
  black,
  purple_main,
} from '../../../utils/colorHexCodes';
import {
  roboto_bold,
} from '../../../utils/FontConstant';
import PopularListitem from './PopularListItem';

import React from 'react';
import usePopularHotels from '../../../hooks/usePopularHotel';
import StaggeredList from '@mindinventory/react-native-stagger-view';


const ExploreList = () => {

  const { combinedData } = usePopularHotels();

  return (
    <View style={styles.parentContainer}>

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

      <StaggeredList
        style={styles.staggerList}
        data={combinedData}
        numColumns={2}
        renderItem={i => {
          return <PopularListitem item={i.item} />;
        }}
        animationType={'FADE_IN_FAST'} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  staggerList: {
    gap: 10,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: { fontFamily: roboto_bold, color: black, fontSize: 17 },
  hyperText: { fontFamily: roboto_bold, color: purple_main, fontSize: 16 },
});
export default ExploreList;
