import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';

const RootLayout = ({children}) => {
  return (
    <div>
    <NavBar/>
    {children}
    <Footer/>
</div>
  );
};

export default RootLayout;