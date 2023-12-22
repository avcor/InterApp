import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { beach_hut } from '../utils/ImageExporter';
import {
  roboto_bold,
  roboto_light,
} from '../utils/FontConstant';
import { black, purple_main, transparent, white } from '../utils/colorHexCodes';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../navigation/MainNavigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useContext, useEffect, useState } from 'react';
import { NameContext } from '../context/NameContext';

const WelcomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const { value, updateValue } = useContext(NameContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('render - default')
    NameApi()
      .then((res) => {
        updateValue(res)
        setLoading(false);
      })
      .finally(() => {
      })

  }, [])

  useEffect(() => {
    console.log('render - value -', value)
  }, [value])

  useEffect(() => {
    console.log('render - loading ', loading);
  }, [loading])

  useEffect(() => {
    console.log('render - setLoading ', setLoading);
  }, [setLoading])


  console.log('render - main')
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundGradient} source={beach_hut}>
        <LinearGradient
          start={{ x: 0, y: 0.5 }}
          end={{ x: 0, y: 1 }}
          colors={[transparent, black]} // Two transparent colors: red and green with 50% opacity
          style={styles.backgroundGradient}
        />
      </ImageBackground>

      <View style={styles.textContainer}>
        <Text style={styles.heading1}>Are you ready?</Text>
        <Text style={styles.text}>
          Find your hotel easily and travel anywhere you want with us
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          {loading ? <ActivityIndicator size="large" color="#00ff00" /> :
            <Text style={styles.btnText}>{value}</Text>
          }
        </TouchableOpacity>
      </View>
    </View>
  );
};

const NameApi = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res('Abhisheke')
    }, 3000)
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: '7%',
    marginBottom: '10%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  heading1: {
    fontSize: 40,
    fontFamily: roboto_bold,
    color: white,
  },
  text: {
    fontSize: 20,
    fontFamily: roboto_light,
    color: white,
    marginTop: 12,
  },
  button: {
    color: purple_main,
    backgroundColor: purple_main,
    marginTop: '7%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
  },
  btnText: {
    color: white,
    fontFamily: roboto_bold,
    fontSize: 17,
  },
  backgroundGradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default WelcomeScreen;
