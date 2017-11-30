import React from 'react';

const Cover = ({ backgroundImage, children, style }) => (
  <div style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    height: '40vh',
    width: '100%',
    backgroundSize: "auto",
    ...style
  }}>
    {children}
  </div>
);

export default Cover;