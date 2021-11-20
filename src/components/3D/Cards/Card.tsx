import { useScroll, useTexture } from '@react-three/drei';
// @ts-ignore
import glsl from 'babel-plugin-glsl/macro';
import React, { useEffect } from 'react';
import * as THREE from 'three';

const customShader = {
  uniforms: {
    uTime: { value: 0 },
    uTexture: { value: new THREE.Texture() },
  },
  vertexShader: glsl`
  varying vec2 vUv;
  void main(){
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  fragmentShader: glsl`
  varying vec2 vUv;
  uniform sampler2D uTexture;
  void main(){
      vec3 texture = texture2D(uTexture,vUv).rgb;
      gl_FragColor = vec4(texture,1.0);
  }
  `,
};

export const Card = () => {
  const texturePic = useTexture('xps-g2E2NQ5SWSU-unsplash.jpg');
  customShader.uniforms.uTexture.value = texturePic;
  const data = useScroll();
  setInterval(() => {
    console.log(data);
  }, 1000);
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
