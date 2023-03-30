import React from 'react';
import { Link } from 'react-router-dom';

const propNames = [
  'User Fields',
  'Clent Fields',
  'Worker Fields',
  'Other Fields',
];

const SecondaryNav = () => {
  return (
    <div className=' flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end mx-auto max-w-full px-4 sm:px-6 lg:px-8'>
      <nav>
        <ul className='flex items-center gap-2'>
          {propNames.map((item) => (
            <li key={item.name} className='pl-4 '>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SecondaryNav;
