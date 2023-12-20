import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { dealType } from '../types/PopularType';
import { roboto_bold, roboto_light } from '../utils/FontConstant';
import { white, purple_main } from '../utils/colorHexCodes';

const DealComp: FC<{ item: dealType }> = ({ item }) => {

    return (
        <View style={styles.dealConatiner}>
            <Text style={styles.dealHead}>{item.deal}</Text>
            <Text style={styles.dealText}>{item.discount}</Text>
            <Text style={styles.dealText}>{item.end}</Text>
        </View>
    );
};

export default DealComp;

const styles = StyleSheet.create({
    dealConatiner: {
        backgroundColor: purple_main,
        width: '100%', borderRadius: 10,
        justifyContent: 'center',
        paddingLeft: '10%',
        paddingVertical: '10%',
    },
    dealHead: {
        fontFamily: roboto_bold,
        fontSize: 17,
        color: white,
        marginBottom: 6,
    },
    dealText: {
        fontFamily: roboto_light,
        fontSize: 12,
        color: white,
    },
});
