import {Image, StyleSheet, TextInput, View} from 'react-native';
import {
  light_grey,
} from '../../../utils/colorHexCodes';
import {search_icon} from '../../../utils/ImageExporter';
import React from 'react';

const SearchInput = () => {
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="User Nickname"
          onChangeText={()=>{}}
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
