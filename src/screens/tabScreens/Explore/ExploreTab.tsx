import {Image, StyleSheet, Text, View} from 'react-native';
import {
  black,
  purple_light,
  text_grey,
  white,
} from '../../../utils/colorHexCodes';
import {roboto_bold} from '../../../utils/FontConstant';
import {profile_photo} from '../../../utils/ImageExporter';
import React from 'react';
import ExploreList from './ExploreList';
import SearchInput from './SearchInput';

const ExploreTab = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.userDetailsContainer}>
        <View style={styles.textContianer}>
          <Text style={styles.textHello}>Hello Michael!</Text>
          <Text style={styles.text2}>Find deals</Text>
        </View>
        <Image
          style={styles.profile}
          resizeMode={'cover'}
          source={profile_photo}
        />
      </View>

      <View style={styles.searchBox}>
        <SearchInput />
      </View>

      <View style={styles.list}>
        <ExploreList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: white,
  },
  userDetailsContainer: {
    flex: 0.17,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  list: {
    flex: 0.75,
  },
  textContianer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    height: '50%',
  },
  textHello: {
    fontSize: 18,
    color: text_grey,
  },
  text2: {
    fontSize: 33,
    fontFamily: roboto_bold,
    color: black,
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
