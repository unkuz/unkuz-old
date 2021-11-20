import { useAppSelector } from '@/store';
import { useHelper } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import React, { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { DirectionalLightHelper, Object3D, PointLightHelper } from 'three';
import { Beach } from '../3Dmodels/Beach';
import { TV } from '../3Dmodels/TV';

extend({ Object3D });
export const Scene: React.FC = () => {
  const isMainSection = useAppSelector((state) => state.app.mainSection);
  const point3d = useMemo(() => new THREE.Object3D(), []);
  const plight = useMemo(() => new THREE.SpotLight(0xffffff), []);
  const light = useRef();
  const plightz = useRef<THREE.SpotLight>();
  useHelper(light, DirectionalLightHelper, 1);
  useHelper(plightz, PointLightHelper, 1);
  const { x, y, z } = useControls('light', { x: 0, y: 0, z: 5.0 });
  const { xx, yy, zz } = useControls('beach', { xx: 0.03, yy: -2.33, zz: 0.0 });
  const { xxx, yyy, zzz } = useControls('beach Positon', { xxx: 1.0, yyy: -2.02, zzz: -0.05 });
  const { scale } = useControls('beach', { scale: 34 });
  const { drColor } = useControls('light', { drColor: '#6c6c6c' });
  const { sx, sy, sz } = useControls('spotlight', { sx: 40.0, sy: -2.5, sz: 35.0 });
  const { sxx, syx, szx } = useControls('TV', { sxx: 4.3, syx: -0.7, szx: 8.5 });
  const { sxxx, syxx, szxx } = useControls('TVRotate', { sxxx: 0, syxx: 0.9, szxx: 0 });
  const { gx, gy, gz } = useControls('group', { gx: 0.09, gy: -0.92, gz: -0.03 });
  const { gpx, gpy, gpz } = useControls('group', { gpx: 1.96, gpy: 0.14, gpz: 0 });

  useFrame(({ clock, mouse }) => {
    point3d.position.x = mouse.x;
    point3d.position.y = mouse.y;
    if (plightz.current) {
      plightz.current.power = 0.5 + Math.random() * 0.5;
    }
  });

  return (
    <>
      <group rotation={[gx, gy, gz]} position={[gpx, gpy, gpz]} scale={[0.7, 0.7, 0.7]}>
        <group scale={[0.3, 0.3, 0.3]} position={[sxx, syx, szx]} rotation={[sxxx, syxx, szxx]}>
          <TV />
        </group>
        {isMainSection && (
          <>
            {/* ! front */}
            {/* <group position={[-1, -2, 0]} scale={[0.25, 0.25, 0.25]}>
            <Tree />
          </group>
          <group position={[4, -2, 0]} scale={[0.25, 0.25, 0.25]}>
            <Tree />
          </group> */}
            {/* ! behind */}
            {/* <group position={[0, -2, -1]} scale={[0.15, 0.15, 0.15]}>
            <Tree />
          </group>
          <group position={[3, -2, -1]} scale={[0.17, 0.17, 0.17]}>
            <Tree />
          </group> */}
            {/* TV */}
            <Suspense fallback={null}>
              <group
                scale={[scale, scale, scale]}
                rotation={[xx, yy, zz]}
                position={[xxx, yyy, zzz]}
              >
                <Beach />
                <fog />
              </group>
            </Suspense>
            {/* <ambientLight intensity={0.5} /> */}
            <directionalLight ref={light} color={drColor} position={[x, y, z]} intensity={0.9} />
            {/* <Cuzknothz /> */}
            <spotLight
              ref={plightz}
              position={[sx, sy, sz]}
              target={point3d}
              penumbra={1}
              angle={Math.PI / 70}
            />
            <primitive object={point3d} position={[0, 0, 0]} />
          </>
        )}
      </group>
    </>
  );
};
