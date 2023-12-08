import React from 'react';
import NavBar from '../NavBar';

const RootLayout = ({children}) => {
  return (
    <div>
    <NavBar/>
    {children}
</div>
  );
};

export default RootLayout;