import { Cloud } from '@/components/3D/Cloud';
import { CloundCustom } from '@/components/3D/Clound';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { NextPage } from 'next';
import React, { Suspense } from 'react';
import OverLay from '../components/OverLay';
import { ReactReduxContext, Provider } from 'react-redux';
import { Cuzknothz } from '@/components/3D/Cuzknothz';
import Tree from '@/components/3Dmodels/Tree';
import { Scene } from '@/components/scene/Scene';
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';

const HomePage: NextPage = () => {
  return (
    <>
      <ReactReduxContext.Consumer>
        {({ store }) => (
          <>
            <Canvas
              // orthographic
              // gl={{ alpha: false }}
              camera={{ zoom: 100, position: [0, 0, 100] }}
              // frameloop="demand"
            >
              <Provider store={store}>
                <Suspense fallback={null}>
                  <Cloud />
                  {/* <Scene /> */}
                  {/* <Cuzknothz /> */}
                </Suspense>
                <OrbitControls />
              </Provider>
            </Canvas>
            <OverLay />
          </>
        )}
      </ReactReduxContext.Consumer>
    </>
  );
};

export default HomePage;
