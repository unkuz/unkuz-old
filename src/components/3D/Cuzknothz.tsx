import { useAppDispatch, useAppSelector } from '@/store';
import { goMainSection } from '@/store/reducers/appSlice';
import { Html, useProgress } from '@react-three/drei';
import React, { Suspense, useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();

  return <Html center>{progress} % loaded</Html>;
}
export const Cuzknothz = () => {
  const [videoTexture] = useState(() =>
    Object.assign(document.createElement('video'), {
      src: '/logo.mp4',
      crossOrigin: 'Anonymous',
      loop: true,
      autoplay: true,
      muted: true,
    })
  );
  useEffect(() => {
    videoTexture.play();
  });
  const dispatch = useAppDispatch();
  const isMainSection = useAppSelector((state) => state.app.mainSection);
  const video = useMemo(() => new THREE.VideoTexture(videoTexture), [videoTexture]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <mesh position={[0, 0, 0.1]}>
          <planeBufferGeometry args={[12.8, 7.2]} />
          <meshBasicMaterial transparent map={video}></meshBasicMaterial>
        </mesh>
        <Html center className="md:cursor-pointer">
          <div
            onClick={() => {
              dispatch(goMainSection());
            }}
            className="md:cursor-pointer font-gt"
          >
            Explore
          </div>
        </Html>
      </Suspense>
    </>
  );
};
