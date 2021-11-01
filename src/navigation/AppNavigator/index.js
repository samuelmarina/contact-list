import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ContactList from '../../screens/ContactList';
import ContactDetails from '../../screens/ContactDetails';
import { ContactsProvider } from '../../util/ContactsContext';
import { text } from '../../util/constants/text';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <ContactsProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="ContactList"
          component={ContactList}
          options={{
            title: text.contactsTitle,
          }}
        />
        <Stack.Screen
          name="ContactDetails"
          component={ContactDetails}
          options={{
            title: text.contactsDetailsTitle,
          }}
        />
      </Stack.Navigator>
    </ContactsProvider>
  );
};

export default AppNavigator;
