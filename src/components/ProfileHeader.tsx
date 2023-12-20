import { Image, StyleSheet, Text, View } from 'react-native';
import { roboto_bold } from '../utils/FontConstant';
import { profile_photo } from '../utils/ImageExporter';
import { black, text_grey, purple_light } from '../utils/colorHexCodes';
import React from 'react';

const ProfileHeader = () => {
    console.log('profile header render');
    return (
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
    );
};

export default React.memo(ProfileHeader);

const styles = StyleSheet.create({
    userDetailsContainer: {
        flex: 0.17,
        flexDirection: 'row',
        alignItems: 'flex-end',
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
});
