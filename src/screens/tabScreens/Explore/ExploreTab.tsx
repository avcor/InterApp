import { StyleSheet, View } from 'react-native';
import {
  black,
  purple_light,
  white,
} from '../../../utils/colorHexCodes';
import React, { useState } from 'react';
import ExploreList from './ExploreList';
import SearchInput from './SearchInput';
import ProfileHeader from '../../../components/ProfileHeader';

const ExploreTab = () => {

  const [searchKey, searchFunction] = useState('');

  return (
    <View style={styles.mainContainer}>
      <ProfileHeader />

      <View style={styles.searchBox}>
        <SearchInput searchCity={searchFunction} />
      </View>

      <View style={styles.list}>
        <ExploreList searchValue={searchKey} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 20,
    backgroundColor: white,
  },
  list: {
    flex: 0.75,
    borderColor: black,
  },
  profile: {
    maxWidth: '20%',
    borderRadius: 75,
    aspectRatio: 1,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: purple_light,
  },
  searchBox: {
    flex: 0.15,
    justifyContent: 'center',
  },
});

export default ExploreTab;
