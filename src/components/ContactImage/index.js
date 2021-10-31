import React, { useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import axios from '../../util/axios';

import { Image } from './styles';

const ContactImage = ({ src, size }) => {
  const [userImg, setUserImg] = useState(
    require('../../assets/user/small/user-sm.png'),
  );

  useEffect(() => {
    LogBox.ignoreLogs([
      'Received data was not a string, or was not a recognised encoding.',
    ]);
    const getImage = async () => {
      try {
        const uri = src.substring(47, src.length);
        await axios.get(uri);
        setUserImg({ uri: src });
      } catch (e) {
        console.log(e);
      }
    };
    getImage();
  }, []);

  return <Image source={userImg} size={size} />;
};

export default ContactImage;
