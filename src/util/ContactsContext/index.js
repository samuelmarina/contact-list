import React, { useState } from 'react';
import { text } from '../constants/text';

export const ContactsContext = React.createContext();

export const ContactsProvider = ({ children }) => {
  const [favList, setFavList] = useState({ title: text.favContacts, data: [] });
  const [othersList, setOthersList] = useState({
    title: text.otherContacts,
    data: [],
  });

  return (
    <ContactsContext.Provider
      value={{ favList, setFavList, othersList, setOthersList }}>
      {children}
    </ContactsContext.Provider>
  );
};
