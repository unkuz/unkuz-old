// @ts-ignore
import useWindowDimensions from '@/components/hooks/useWindowDimensions';
import { Scroll, ScrollControls } from '@react-three/drei';
import { useControls } from 'leva';
import React, { Suspense, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { Card } from '.';
import * as THREE from 'three';
import { castDraft } from 'immer';
import { useFrame } from '@react-three/fiber';

export const Cards = () => {
  const { width, height } = useWindowDimensions();
  const card = useRef<THREE.Mesh>();
  let scaleCardRatio = new THREE.Vector3(1, 1, 1);

  //   const { rx, ry, rz } = useControls('card', { rx: 0, ry: 0, rz: 0.3 });

  return (
    <>
      <ScrollControls
        pages={3} // Each page takes 100% of the height of the canvas
        distance={1} // A factor that increases scroll bar travel (default: 1)
        damping={10} // Friction, higher is faster (default: 4)
        horizontal={width > 640 ? true : false} // Can also scroll horizontally (default: false)
        infinite={false} // Can also scroll infinitely (default: false)
        eps={4}
      >
        {/* You can have components in here, they are not scrolled, but they can still
      react to scroll by using useScroll! */}
        <Scroll>
          <Suspense fallback={null}>
            <mesh rotation={[0, 0, 0.3]} scale={scaleCardRatio} ref={card}>
              <Card />
            </mesh>
            <mesh rotation={[0, 0, 0.3]} position={[10, 0, 0]}>
              <Card />
            </mesh>
            <mesh rotation={[0, 0, 0.3]} position={[20, 0, 0]}>
              <Card />
            </mesh>
          </Suspense>
        </Scroll>
        {/* <Scroll html>
          <h1>html in here (optional)</h1>
          <h1 style={{ top: '100vh' }}>second page</h1>
          <h1 style={{ top: '200vh' }}>third page</h1>
        </Scroll> */}
      </ScrollControls>
    </>
  );
};
