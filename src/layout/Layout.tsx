import { HeaderAsTabBar } from '@/components/HeaderAsTabBar';
import useWindowDimensions from '@/components/hooks/useWindowDimensions';
import { useAppSelector } from '@/store';
import React from 'react';

export const Layout: React.FC = ({ children }) => {
  const isMainSection = useAppSelector((state) => state.app.mainSection);
  return (
    <>
      {/* header */}

      {children}
      {<HeaderAsTabBar />}
    </>
  );
};
