import { appRoutes } from '@/routes';
import Link from 'next/link';
import React from 'react';

export const MenuPopUp: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-black/20 flex justify-center items-center max-h-screen">
      <div className="w-[600px] flex flex-col items-center">
        <Link href={appRoutes.HOME} passHref>
          <div className="w-full hover:bg-yellow-300 h-[70px] flex justify-center items-center md:cursor-pointer">
            <p className="outline-title text-4xl outline-title text-transparent select-none	">
              Home
            </p>
          </div>
        </Link>
        <Link href={appRoutes.ALLWORKS} passHref>
          <div className="w-full h-[70px] hover:bg-yellow-300 flex justify-center items-center md:cursor-pointer">
            <p className="text-4xl outline-title text-transparent select-none	">All Works</p>
          </div>
        </Link>
        <Link href={appRoutes.ABOUT} passHref>
          <div className="w-full h-[70px] hover:bg-yellow-300 flex justify-center items-center md:cursor-pointerq">
            <p className="text-4xl outline-title text-transparent select-none">About</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
