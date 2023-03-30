import React from 'react';
import Header from '../../components/Header';
import SecondaryNav from '../../components/SecondaryNav';

const Main = () => {
  return (
    <div>
      <Header />
      <SecondaryNav />
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'></div>
    </div>
  );
};

export default Main;
