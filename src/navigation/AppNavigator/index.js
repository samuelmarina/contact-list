import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ContactList from '../../screens/ContactList';
import ContactDetails from '../../screens/ContactDetails';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ContactList" component={ContactList} />
      <Stack.Screen name="ContactDetails" component={ContactDetails} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
