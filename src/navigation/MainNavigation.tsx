import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import BottomTabnavigation from './BottomTabNavigation';
import React from 'react';

export type RootStackParams = {
  WelcomeScreen: any;
  Home: any;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={BottomTabnavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
