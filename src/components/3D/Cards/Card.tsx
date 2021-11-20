import { useAppSelector } from '@/store';
import { useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
// @ts-ignore
import glsl from 'babel-plugin-glsl/macro';
import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { Wheel } from '@/store/reducers/appSlice';

const customShader = {
  uniforms: {
    uTime: { value: 0 },
    uTexture: { value: new THREE.Texture() },
    uWheel: { value: false },
  },
  vertexShader: glsl`
  varying vec2 vUv;
  uniform float uTime;
  uniform bool uWheel;
  void main(){
      vUv = uv;
      vec4 vPosition = viewMatrix * vec4(position, 1.0);
      vec4 mvPosition = modelMatrix * vPosition;
      gl_Position = projectionMatrix * mvPosition;
  }
  `,
  fragmentShader: glsl`
  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform float uTime;
  uniform bool uWheel;

  void main(){
      vec2 mUv = vUv;
      if(uWheel == true){
          mUv.x += (sin(mUv.y + uTime)* 0.1);
      };
      vec3 texture = texture2D(uTexture,mUv).rgb;
      gl_FragColor = vec4(texture,1.0);
  }
  `,
};

export const Card = () => {
  const iWheel = useAppSelector((state) => state.app.userWheel);

  const texturePic = useTexture('xps-g2E2NQ5SWSU-unsplash.jpg');
  customShader.uniforms.uTexture.value = texturePic;

  useFrame(({ clock }) => {
    customShader.uniforms.uTime.value = clock.getElapsedTime();
    let isWheel: boolean;
    if (iWheel === Wheel.DOWN || iWheel === Wheel.UP) {
      isWheel = true;
    } else {
      isWheel = false;
    }
    customShader.uniforms.uWheel.value = isWheel;
  });
  useEffect(() => {
    //   @ts-ignore
    //   @ts-ignore
  });

  return (
    <>
      <planeBufferGeometry args={[25 / 4, 10 / 4]} />
      <shaderMaterial
        uniforms={customShader.uniforms}
        vertexShader={customShader.vertexShader}
        fragmentShader={customShader.fragmentShader}
      />
    </>
  );
};
