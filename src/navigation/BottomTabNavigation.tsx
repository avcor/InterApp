import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import ExploreTab from '../screens/tabScreens/Explore/ExploreTab';
import SavedTab from '../screens/tabScreens/SavedTab';
import TripsTab from '../screens/tabScreens/TripsTab';
import ProfileTab from '../screens/tabScreens/ProfileTab';

const Tab = createBottomTabNavigator();

const BottomTabnavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Explore" component={ExploreTab} />
      <Tab.Screen name="Saved" component={SavedTab} />
      <Tab.Screen name="Trips" component={TripsTab} />
      <Tab.Screen name="Profile" component={ProfileTab} />
    </Tab.Navigator>
  );
};

export default BottomTabnavigation;
