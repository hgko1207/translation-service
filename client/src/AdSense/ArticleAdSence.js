import React from 'react';
import GoogleAdsense from 'react-adsense-google';

const ArticleAdSence = () => {
  return (
    <GoogleAdsense
      adClient='ca-pub-7581566810202853'
      adSlot='5075244775'
      style={{'display': 'block', 'text-align': 'center'}}
      adLayout='in-article'
      adFormat='fluid'
    />
  )
};

export default ArticleAdSence;