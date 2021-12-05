import { HeaderAsTabBar } from '@/components/HeaderAsTabBar';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { useAppSelector, useAppDispatch } from '@/store';
import React, { useEffect, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import { appRoutes } from '@/routes';
import { selected, SelectedMenu } from '@/store/reducers/appSlice';

export const Layout: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname);
  useEffect(() => {
    if (pathname === appRoutes.HOME) {
      dispatch(selected(SelectedMenu.HOME));
    }
    if (pathname === appRoutes.ALLWORKS) {
      dispatch(selected(SelectedMenu.ALLWORKS));
    }
    if (pathname === appRoutes.ABOUT) {
      dispatch(selected(SelectedMenu.ABOUT));
    }
  }, [pathname, dispatch]);

  const isMainSection = useAppSelector((state) => state.app.mainSection);
  return (
    <>
      {/* header */}

      {children}
      {<HeaderAsTabBar />}
    </>
  );
};
