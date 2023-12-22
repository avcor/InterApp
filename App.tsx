import React from 'react';
import MainNavigation from './src/navigation/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';
import NameProvider from './src/context/NameContext';

function App() {
  return (
    <NavigationContainer>
      <NameProvider>
        <MainNavigation />
      </NameProvider>
    </NavigationContainer>
  );
}

export default App;
