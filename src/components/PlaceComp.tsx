import { FC } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { popularPlaceType, dealType } from '../types/PopularType';
import { roboto_bold, roboto_regular } from '../utils/FontConstant';
import { white } from '../utils/colorHexCodes';

const PlaceComp: FC<{ item: popularPlaceType | dealType }> = ({ item }) => {
    const data = item as popularPlaceType;

    return (
        <View style={styles.container}>
            <Image
                style={styles.imageBack}
                source={{ uri: data.imageUrl }}
                resizeMode="cover"
            />
            <View style={styles.textContainer}>
                <Text style={styles.textPlace}>{data.place}</Text>
                <Text style={styles.textHotels}>{data.hotels + ' hotels'}</Text>
            </View>
        </View>
    );
};

export default PlaceComp;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column-reverse',
        width: '100%',
        marginBottom: '5%',
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
