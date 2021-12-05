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
import { useAppDispatch, useAppSelector } from '@/store';
import { selected, SelectedMenu } from '@/store/reducers/appSlice';

export const HeaderAsTabBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedMenu = useAppSelector((state) => state.app.selectedSection);
  const isMainSection = useAppSelector((state) => state.app.mainSection);
  return (
    <div className="fixed md:top-0 border-[1px] md:border-0 border-t-black/20 bottom-0 h-[60px] w-full flex items-center justify-between">
      {/* left section */}
      <Link href={appRoutes.HOME} passHref>
        <div
          onClick={() => dispatch(selected(SelectedMenu.HOME))}
          className="select-none ml-[30px] md:flex hidden font-august text-2xl tracking-wider w-auto h-full justify-center items-center md:cursor-pointer"
        >
          {'cuzknothz'.toUpperCase()}
        </div>
      </Link>
      {/* right section - nav */}

      <div className="flex space-x-10 md:mr-[30px] md:justify-end justify-evenly items-center h-full w-full md:w-auto">
        <div onClick={() => dispatch(selected(SelectedMenu.HOME))}>
          <Link href={appRoutes.HOME} passHref>
            <div className="flex flex-col items-center relative group">
              <div
                className={`relative md:w-[22px] md:h-[22px] w-[25px] h-[25px] object-cover md:cursor-pointer`}
              >
                {selectedMenu === SelectedMenu.HOME ? <HomeIcon_Selected /> : <HomeIcon />}
              </div>
              <div className="font-gt text-xs md:text-xs absolute top-[25px] w-[70px] flex justify-center items-center md:group-hover:flex md:hidden md:bg-black/80 md:text-white md:rounded-lg md:top-[30px]">
                Home
              </div>
            </div>
          </Link>
        </div>
        <div onClick={() => dispatch(selected(SelectedMenu.ALLWORKS))}>
          <Link href={appRoutes.ALLWORKS} passHref>
            <div className="flex flex-col items-center relative group">
              <div
                className={`relative md:w-[22px] md:h-[22px] w-[25px] h-[25px] object-cover md:cursor-pointer`}
              >
                {selectedMenu === SelectedMenu.ALLWORKS ? (
                  <AllWorksIcon_Selected />
                ) : (
                  <AllWorksIcon />
                )}
              </div>

              <div className="font-gt text-xs md:text-xs absolute top-[25px] w-[70px] flex justify-center items-center md:group-hover:flex md:hidden md:bg-black/80 md:text-white md:rounded-lg md:top-[30px]">
                All works
              </div>
            </div>
          </Link>
        </div>
        <div onClick={() => dispatch(selected(SelectedMenu.ABOUT))}>
          <Link href={appRoutes.ABOUT} passHref>
            <div className="flex flex-col items-center relative group">
              <div
                className={`relative md:w-[22px] md:h-[22px] w-[25px] h-[25px] object-cover md:cursor-pointer`}
              >
                {selectedMenu === SelectedMenu.ABOUT ? <AboutIcon_Selected /> : <AboutIcon />}
              </div>
              <div className="font-gt text-xs md:text-xs absolute top-[25px] w-[70px] flex justify-center items-center md:group-hover:flex md:hidden md:bg-black/80 md:text-white md:rounded-lg md:top-[30px]">
                About Me
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
