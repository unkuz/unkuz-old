import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import { animated, useSpring } from 'react-spring';

export const Donut = (props: any) => {
  const mesh = useRef<THREE.Mesh>();

  const DonutTexture = useTexture('donutCool_vsn6dj.jpg');

  const [hovered, SetHover] = useState(false);

  const [active, setActive] = useState(false);

  const { scale } = useSpring({
    scale: active ? [1.25, 1.25, 1.25] : [1, 1, 1],
  });

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <animated.mesh
      ref={mesh}
      onClick={() => {
        setActive(!active);
      }}
      scale={scale}
      onPointerOver={() => {
        SetHover(true);
      }}
      onPointerOut={() => {
        SetHover(false);
      }}
      {...props}
    >
      <torusGeometry args={[2, 1, 10, 80]} />
      <meshStandardMaterial
        map={DonutTexture}
        roughness={2}
        metalness={0.1}
        attach="material"
        color={hovered ? '#FFFFFF' : '#d2b48c'}
      />
    </animated.mesh>
  );
};
