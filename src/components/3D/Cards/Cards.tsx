// @ts-ignore
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { Center, Scroll, ScrollControls } from '@react-three/drei';
import { useControls } from 'leva';
import React, { Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Card } from '.';
import * as THREE from 'three';
import { castDraft } from 'immer';
import { useFrame } from '@react-three/fiber';
import { useAppSelector } from '@/store';
import { Wheel } from '@/store/reducers/appSlice';
// @ts-ignore
import lerp from 'lerp';

export const Cards = () => {
  const { width, height } = useWindowDimensions();
  const [selected, setSelected] = useState(0);
  const userWheel = useAppSelector((state) => state.app.userWheel);
  const card = useRef<THREE.Mesh>();
  let scaleCardRatio = new THREE.Vector3(1, 1, 1);
  let vec = useMemo(() => new THREE.Vector3(0.0, 0.0, 0.0), []);
  let vecPlus = useMemo(() => new THREE.Vector3(10.0, 0.0, 0.0), []);
  useFrame(({ clock }) => {
    if (userWheel === Wheel.DOWN) {
      if (card.current) {
        card.current.position.lerp(vec, 0.05);
      }
    }
    if (userWheel === Wheel.UP) {
      if (card.current) {
        card.current.position.lerp(vec, 0.05);
      }
    }
  });
  const length = 4;
  useEffect(() => {
    if (userWheel === Wheel.DOWN) {
      // if (selected === 3) {
      //   setSelected((prev) => 0);
      // } else {
      vec.sub(vecPlus);
      //   setSelected((prev) => prev + 1);
      // }
    }
    if (userWheel === Wheel.UP) {
      // if (selected === 0) {
      //   setSelected((prev) => 4);
      // } else {
      vec.add(vecPlus);
      //   setSelected((prev) => prev - 1);
      // }
    }
  }, [userWheel, vec, vecPlus, selected]);

  //   const { rx, ry, rz } = useControls('card', { rx: 0, ry: 0, rz: 0.3 });

  return (
    <>
      <Suspense fallback={null}>
        <group ref={card} position={[0, 0, 0]}>
          {[1, 2, 3, 4].map((i: any, idx) => (
            <>
              {selected === idx ? (
                <>
                  <Center>
                    <group
                      key={idx}
                      position={[0 - idx * 20.0, 0.0, 0]}
                      scale={scaleCardRatio}
                      rotation={[0, 0, 0.3]}
                    >
                      <Card />
                    </group>
                  </Center>
                </>
              ) : (
                <>
                  <group
                    key={idx}
                    position={[0 - idx * 20.0, 0, 0]}
                    scale={scaleCardRatio}
                    rotation={[0, 0, 0.3]}
                  >
                    <Card />
                  </group>
                </>
              )}
            </>
          ))}
        </group>
      </Suspense>
    </>
  );
};
