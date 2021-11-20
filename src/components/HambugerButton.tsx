import { MenuPopUp } from '@/components/MenuPopUp';
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleShowMenu } from '@/store/reducers/appSlice';
import React, { FC, useRef } from 'react';

export const HambugerButton: FC = () => {
  const hambugerButton = useRef<HTMLDivElement>(null);
  const bar1 = useRef<HTMLDivElement>(null);
  const bar2 = useRef<HTMLDivElement>(null);
  const bar3 = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (bar1.current && bar2.current && bar3.current && hambugerButton.current) {
      hambugerButton.current.classList.toggle('active');
    }
    dispatch(toggleShowMenu());
  };
  const isShowMenu = useAppSelector((state) => state.app.showMenu);

  return (
    <>
      <div
        onClick={handleClick}
        ref={hambugerButton}
        className="hambuger z-50 scale-75 cursor-pointer absolute overflow-hidden transition duration-300 group top-[15px] right-[15px] w-[30px] h-[25px] flex flex-col justify-between md:cursor-pointer"
      >
        <div
          ref={bar1}
          className="w-full transform duration-500 h-[5px] bg-black animate-hambuger1 group-hover:bg-purple-600"
        ></div>
        <div
          ref={bar2}
          className="w-full transform duration-500 h-[5px] bg-black animate-hambuger2 group-hover:bg-purple-600"
        ></div>
        <div
          ref={bar3}
          className="w-full transform duration-500 h-[5px] bg-black animate-hambuger3 group-hover:bg-purple-600"
        ></div>
      </div>
      {isShowMenu && <MenuPopUp />}
    </>
  );
};
