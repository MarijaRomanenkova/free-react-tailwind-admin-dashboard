import LogoIcon from '../images/logo/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='border-b border-gray-200 bg-white mb-4'>
      <div className='mx-auto max-w-full px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 justify-between'>
          <div className='flex'>
            <img src={LogoIcon} />
            <div className='hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8 h-16 '>
              <p className='my-auto '>Workers</p>
            </div>
            <div className='hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8'>
              <p className='my-auto'>Timesheets</p>
            </div>
            <div className='hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8'>
              <p className='my-auto'>Clients</p>
            </div>
            <div className='hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8'>
              <p className='my-auto'>Users</p>
            </div>
            <div className='hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8'>
              <p className='my-auto'>Settings</p>
            </div>
          </div>
          <div className='hidden sm:ml-6 sm:flex sm:items-center'>
            <button
              type='button'
              class='rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              <span class='sr-only'>View notifications</span>

              <svg
                class='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                />
              </svg>
            </button>

            <div class='relative ml-3'>
              <div>
                <button
                  type='button'
                  class='flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  id='user-menu-button'
                >
                  <img
                    class='h-8 w-8 rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt='ava'
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
