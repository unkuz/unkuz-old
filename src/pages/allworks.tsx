import { Cards } from '@/components/3D/Cards';
import { Cloud } from '@/components/3D/Cloud';
import { useAppDispatch } from '@/store';
import { cancelWheel, setWheel, Wheel } from '@/store/reducers/appSlice';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { NextPage } from 'next';
import Head from 'next/head';

import React, { Suspense, useCallback, useEffect, useRef } from 'react';
import { Provider, ReactReduxContext } from 'react-redux';
import OverLay from '../components/OverLay';

const AllWorksPage: NextPage = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const dispatch = useAppDispatch();
  const onWheel = useCallback(
    (e: WheelEvent) => {
      //   @ts-ignore
      if (e.wheelDeltaY > 0) {
        dispatch(setWheel(Wheel.UP));
      }
      //   @ts-ignore
      if (e.wheelDeltaY < 0) {
        dispatch(setWheel(Wheel.DOWN));
      }
      const timmer = setTimeout(() => {
        dispatch(cancelWheel());
      }, 500);
    },
    [dispatch]
  );
  useEffect(() => {
    if (canvas.current) {
      canvas.current.addEventListener('wheel', onWheel);
    }
    return window.removeEventListener('wheel', onWheel);
  }, [canvas, dispatch, onWheel]);

  useEffect(() => {
    const onResize = () => {
      if (canvas.current) {
        canvas.current.width = window.innerWidth;
        canvas.current.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return (
    <>
      <Head>
        <title>All Works</title>
      </Head>

      <ReactReduxContext.Consumer>
        {({ store }) => (
          <>
            <Canvas
              ref={canvas}
              orthographic
              // gl={{ alpha: false }}
              camera={{ zoom: 100, position: [0, 0, 100] }}
              // frameloop="demand"
            >
              <Provider store={store}>
                <Suspense fallback={null}>
                  <Cards />
                </Suspense>
                {/* <OrbitControls /> */}
              </Provider>
            </Canvas>
            <OverLay />
          </>
        )}
      </ReactReduxContext.Consumer>
    </>
  );
};

export default AllWorksPage;
