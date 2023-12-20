import { Image, StyleSheet, TextInput, View } from 'react-native';
import {
  light_grey,
} from '../../../utils/colorHexCodes';
import { search_icon } from '../../../utils/ImageExporter';
import React, { FC } from 'react';

type props = {
  searchCity: any
}

const SearchInput: FC<props> = ({ searchCity }) => {
  console.log('search render')
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search city"
          onChangeText={(txt) => { searchCity(txt); }}
          underlineColorAndroid="transparent"
        />
        <Image
          style={styles.searchIcon}
          resizeMode={'contain'}
          source={search_icon} />
      </View>
    </>
  );
};

export default React.memo(SearchInput);

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
