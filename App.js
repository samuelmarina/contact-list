import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { ThemeProvider } from './src/util/ThemeContext';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
