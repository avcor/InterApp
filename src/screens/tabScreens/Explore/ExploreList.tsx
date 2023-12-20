import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import {
  black,
  purple_main,
} from '../../../utils/colorHexCodes';
import {
  roboto_bold,
} from '../../../utils/FontConstant';
import PopularListitem from './PopularListItem';
import React, { FC } from 'react';
import StaggeredList from '@mindinventory/react-native-stagger-view';
import usePopularHotels from '../../../hooks/usePopularHotel';
import EmptyComp from '../../../components/EmptyComp';

type props = {
  searchValue?: string
}

const ExploreList: FC<props> = ({ searchValue = '' }) => {

  const { combinedData, isLoading } = usePopularHotels(searchValue);

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

      {
        isLoading ? <ActivityIndicator style={styles.loader} size="large" color="#00ff00" /> :
          <StaggeredList
            style={styles.staggerList}
            data={combinedData}
            numColumns={2}
            ListEmptyComponent={EmptyComp}
            renderItem={i => {
              return <PopularListitem item={i.item} />;
            }}
            animationType={'FADE_IN_FAST'} />
      }
    </View>
  );
};

export default ExploreList;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
  },
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
