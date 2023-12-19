import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {
  black,
  light_grey,
  purple_light,
  purple_main,
  text_grey,
  white,
} from '../../../utils/colorHexCodes';
import {
  montserrat_bold,
  montserrat_regular,
  montserrat_thin,
  roboto_bold,
  roboto_medium,
} from '../../../utils/FontConstant';
import {profile_photo, search_icon} from '../../../utils/ImageExporter';
import PopularListitem from '../../../components/PopularListItem';
import Item from '../../../types/PopularType';
import React from 'react';
import ExploreList from './ExploreList';

const SearchInput = () => {
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="User Nickname"
          onChangeText={searchString => {}}
          underlineColorAndroid="transparent"
        />
        <Image
          style={styles.searchIcon}
          resizeMode={'contain'}
          source={search_icon}></Image>
      </View>
    </>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
    height: '50%',
    borderColor: light_grey,
    borderWidth: 2,
    borderRadius: 10,
  },
  searchIcon: {
    flex: 0.2,
    height: '50%',
  },
  input: {
    borderRadius: 10,
    flex: 1,
    paddingLeft: 10,
  },
});
