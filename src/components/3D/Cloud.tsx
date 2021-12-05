import { useAppDispatch, useAppSelector } from '@/store';
import { goMainSection } from '@/store/reducers/appSlice';
import { Html, useProgress } from '@react-three/drei';
import React, { Suspense, useEffect, useMemo } from 'react';
import * as THREE from 'three';

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();

  return <Html center>{progress} % loaded</Html>;
}
export const Cloud = () => {
  const videoTexture = useMemo(
    () =>
      Object.assign(document.createElement('video'), {
        src: '/cloud.mp4',
        crossOrigin: 'Anonymous',
        loop: true,
        autoplay: true,
        muted: true,
      }),
    []
  );
  useEffect(() => {
    videoTexture.play();
  });
  const dispatch = useAppDispatch();
  const isMainSection = useAppSelector((state) => state.app.mainSection);
  return (
    <>
      {!isMainSection && (
        <Suspense fallback={<Loader />}>
          <mesh>
            <planeBufferGeometry args={[19.2 / 4.5, 10.8 / 4.5]} />
            <meshBasicMaterial>
              <videoTexture attach="map" args={[videoTexture]} encoding={THREE.sRGBEncoding} />
            </meshBasicMaterial>
          </mesh>
          {/* <Html center>
            <div
              onClick={() => {
                dispatch(goMainSection());
              }}
              className="md:cursor-pointer font-gt select-none"
            >
              Explore
            </div>
          </Html> */}
        </Suspense>
      )}
    </>
  );
};
