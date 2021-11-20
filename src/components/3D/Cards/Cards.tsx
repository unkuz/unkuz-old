// @ts-ignore
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { Scroll, ScrollControls } from '@react-three/drei';
import { useControls } from 'leva';
import React, { Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Card } from '.';
import * as THREE from 'three';
import { castDraft } from 'immer';
import { useFrame } from '@react-three/fiber';
import { useAppSelector } from '@/store';
import { Wheel } from '@/store/reducers/appSlice';

export const Cards = () => {
  const { width, height } = useWindowDimensions();
  const userWheel = useAppSelector((state) => state.app.userWheel);
  const card = useRef<THREE.Mesh>();
  let scaleCardRatio = new THREE.Vector3(1, 1, 1);
  const [y, setY] = useState(window.scroll);
  useEffect(() => {
    if (userWheel === Wheel.DOWN) {
    }
    if (userWheel === Wheel.UP) {
    }
  }, [userWheel]);

  //   const { rx, ry, rz } = useControls('card', { rx: 0, ry: 0, rz: 0.3 });

  return (
    <>
      <Suspense fallback={null}>
        <mesh
          rotation={[0, 0, 0.3]}
          scale={scaleCardRatio}
          ref={card}
          onPointerEnter={() => {
            console.log('in');
          }}
          onPointerOut={() => {
            console.log('out');
          }}
        >
          <Card />
        </mesh>
        <mesh rotation={[0, 0, 0.3]} position={[10, 0, 0]}>
          <Card />
        </mesh>
        <mesh rotation={[0, 0, 0.3]} position={[20, 0, 0]}>
          <Card />
        </mesh>
      </Suspense>
    </>
  );
};
