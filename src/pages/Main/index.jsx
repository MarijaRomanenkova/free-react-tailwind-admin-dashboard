import React from 'react';
import Header from '../../components/Header';
import SecondaryNav from '../../components/SecondaryNav';
import TableThree from '../../components/TableThree';
import Tabs1 from '../../components/Tabs1';
import Settings from '../Settings';

const Main = () => {
  return (
    <>
      <Header />
      <SecondaryNav />
      <div className='px-4'>
        <div className='mb-6 text-xl font-bold'>Current Page</div>
        <Tabs1 />
        <TableThree />
        <Settings />
      </div>
    </>
  );
};

export default Main;
