import React from 'react';
import Image from 'next/image';
import HomeIcon from '@/assets/svg/home.svg';
import AboutIcon from '@/assets/svg/about.svg';
import AllWorksIcon from '@/assets/svg/allworks.svg';
import HomeIcon_Selected from '@/assets/svg/home_selected.svg';
import AboutIcon_Selected from '@/assets/svg/about_selected.svg';
import AllWorksIcon_Selected from '@/assets/svg/allworks_selected.svg';
import { appRoutes } from '@/routes';
import Link from 'next/link';

export const HeaderAsTabBar: React.FC = () => {
  return (
    <div className="fixed md:top-0 border-[1px] border-t-black/20 md:border-0 bottom-0 h-[60px] w-full flex items-center justify-between">
      {/* left section */}
      <div className="ml-[30px] md:block hidden">Cuzknothz</div>
      {/* right section - nav */}

      <div className="flex space-x-8 md:mr-[30px] md:justify-end justify-evenly items-center h-full w-full md:w-auto">
        <div>
          <Link href={appRoutes.HOME} passHref>
            <a className="flex flex-col items-center">
              <div className="relative md:w-[22px] md:h-[22px] w-[25px] h-[25px] object-cover md:cursor-pointer">
                <HomeIcon />
              </div>
              <p className="font-gt text-xs">Home</p>
            </a>
          </Link>
        </div>
        <div>
          <Link href={appRoutes.ALLWORKS} passHref>
            <a className="flex flex-col items-center">
              <div className="relative md:w-[22px] md:h-[22px] w-[25px] h-[25px] object-cover md:cursor-pointer">
                <AllWorksIcon />
              </div>

              <p className="font-gt text-xs">All works</p>
            </a>
          </Link>
        </div>
        <div>
          <Link href={appRoutes.ABOUT} passHref>
            <a className="flex flex-col items-center">
              <div className="relative md:w-[22px] md:h-[22px] w-[25px] h-[25px] object-cover md:cursor-pointer">
                <AboutIcon />
              </div>
              <p className="font-gt text-xs">About Me</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
