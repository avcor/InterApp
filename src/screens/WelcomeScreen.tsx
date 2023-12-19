import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {beach_hut} from '../utils/ImageExporter';
import {
  montserrat_bold,
  montserrat_regular,
  montserrat_thin,
  roboto_bold,
  roboto_light,
  roboto_medium,
  roboto_regular,
} from '../utils/FontConstant';
import {black, purple_main, transparent, white} from '../utils/colorHexCodes';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../navigation/MainNavigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const WelcomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundGradient} source={beach_hut}>
        <LinearGradient
          start={{x: 0, y: 0.5}}
          end={{x: 0, y: 1}}
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
          <Text style={styles.btnText}>Let's start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
