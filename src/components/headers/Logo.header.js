import React from 'react';
import { IMAGES } from '../../assets';
import { Image } from 'react-native';


const LogoHeader = (height) => (
  <Image
    style={{height:height, width:(height*137/46)}}
    resizeMode={'contain'}
    source={IMAGES.logo}
  />
);

export default LogoHeader;
