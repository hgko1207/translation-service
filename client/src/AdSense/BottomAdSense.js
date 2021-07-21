import React from 'react';
import GoogleAdsense from 'react-adsense-google';

const BottomAdSense = () => {
  return (
    <GoogleAdsense
      adClient='ca-pub-7581566810202853'
      adSlot='3284162675'
      style={{'display': 'block', 'text-align': 'center'}}
      adFormat='auto'
      fullWidthResponsive='true'
    />
  )
};

export default BottomAdSense;