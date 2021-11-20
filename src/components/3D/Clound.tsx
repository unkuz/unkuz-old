import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';
import * as THREE from 'three';
let CustomClound = {
  uniforms: {
    uTexture: { value: new THREE.Texture() },
    uTime: { value: 0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main(){
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `,
  fragmentShader: `
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float uTime;
    void main(){
      vec2 mUv = vUv;
     

      vec4 texture = texture2D(uTexture, mUv).rgba;
      vec4 colorMix = vec4(0.039,0.776,0.941,1.0);
      colorMix.a = texture.a - 0.2;
      vec4 fl = mix(texture,colorMix,0.9);
      gl_FragColor = vec4(texture);
      gl_FragColor = fl;
      if(gl_FragColor.a == 0.0){
            discard;
        }
    }
    `,
};
export const CloundCustom: React.FC = () => {
  const texture = useTexture('backClound.png');
  CustomClound.uniforms.uTexture.value = texture;
  const mesh = useRef<THREE.Mesh>();
  useFrame(({ clock }) => {
    CustomClound.uniforms.uTime.value = clock.getElapsedTime();
  });
  return (
    <Suspense fallback={null}>
      <mesh ref={mesh}>
        <planeBufferGeometry args={[2, 2]} />
        <shaderMaterial
          vertexShader={CustomClound.vertexShader}
          fragmentShader={CustomClound.fragmentShader}
          uniforms={CustomClound.uniforms}
          transparent
        />
      </mesh>
    </Suspense>
  );
};
