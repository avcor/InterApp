import {FlatList, StyleSheet, Text, View} from 'react-native';
import {
  black,
  purple_main,
} from '../../../utils/colorHexCodes';
import {
  roboto_bold,
} from '../../../utils/FontConstant';
import PopularListitem from '../../../components/PopularListItem';
import Item from '../../../types/PopularType';
import React  from 'react';

const dealsData = [
  {
    deal: 'Holiday deals',
    discount: '20% off',
    end: '12 June, 2024',
  },
];

const placesData: Item[] = [
  {
    place: 'Moscow',
    hotels: 2800,
    imageUrl:
      'https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=1649&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    place: 'Dubai',
    hotels: 9800,
    imageUrl:
      'https://worldtoptop.com/wp-content/uploads/2013/07/Burj_al_arab.jpg.webp',
  },
  {
    place: 'Taskkent',
    hotels: 319,
    imageUrl:
      'https://img.traveltriangle.com/attachments/pictures/949164/original/Fountain_on_Independence_Square_in_Tashkent.jpg',
  },
  {
    place: 'Kuala Lumpur',
    hotels: 1001,
    imageUrl:
      'https://afar.brightspotcdn.com/dims4/default/c2f4bb9/2147483647/strip/false/crop/1600x800+0+0/resize/1486x743!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F62%2F17%2F023ba750dc38b08b1f2eea203859%2Foriginal-d929018c23f2601337da3b23a05542ba.jpg',
  },
  {
    place: 'Paris',
    hotels: 3580,
    imageUrl:
      'https://cdn.sortiraparis.com/images/80/69688/837774-que-faire-aujourd-hui-ce-a-paris-ou-en-ile-de-france.jpg',
  },
];

const ExploreList = () => {
  dealsData;
  return (
    <View>
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
        columnWrapperStyle={styles.colWrapper}
        data={placesData}
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
    marginBottom: 10,
  },
  text:{fontFamily: roboto_bold, color: black, fontSize: 17},
  hyperText:{fontFamily: roboto_bold, color: purple_main, fontSize: 16},
  colWrapper:{
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
export default ExploreList;
