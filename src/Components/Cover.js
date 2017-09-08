import React from 'react';

const Cover = ({ backgroundImage, children }) => (
  <div style={{ 
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    height: '40vh', 
  }}>
    {children}
  </div>
);

export default Cover;