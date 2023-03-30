import React from 'react';

const tabsNames = ['Tab1', 'Tab2', 'Tab3', 'Tab4', 'Tab5'];

const Tabs1 = () => {
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full'>
          <ul
            className='flex gap-4 list-none flex-wrap pt-3 flex-row'
            role='tablist'
          >
            {tabsNames.map((tab) => (
              <li
                className='rounded-t-lg flex-auto text-center text-white  bg-black'
                text-white
              >
                {tab}
              </li>
            ))}
          </ul>
          <div className='relative flex flex-col min-w-0 break-wordsw-full mb-6 rounded-b bg-white shadow-default'>
            <div className='p-6 flex-auto'>
              <div className='tab-content tab-space '>
                <div id='link1'>
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                </div>
                <div id='link2'>
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div id='link3'>
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs1;
