import { HeaderAsTabBar } from '@/components/HeaderAsTabBar'
import { Loading } from '@/components/Loading'
import { Loader, OrbitControls, Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { EffectComposerContext, Glitch } from '@react-three/postprocessing'
import { NextPage } from 'next'
import React, { Suspense } from 'react'
import OverLay from '../components/OverLay'

const HomePage:NextPage = () => {
  return (
    <div>
      <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 100] }} frameloop="demand" >
           <ScrollControls damping={5} horizontal pages={1}>
     

    <ambientLight /> 
    <pointLight position={[10, 10, 10]} />
    <directionalLight intensity={4.16} />
    <Suspense fallback={<Loading/>}>
      
           <Scroll>

        
    <mesh>
      <planeBufferGeometry/>
      <meshStandardMaterial/>
    </mesh>
    <mesh position={[2,2,2]}>
      <planeBufferGeometry/>
      <meshStandardMaterial/>
    </mesh>   </Scroll>
   
    </Suspense>
     </ScrollControls>
    <Loader

  dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`} // Text
  initialState={(active) => active} // Initial black out state
></Loader>

    <OrbitControls addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined}/>
  </Canvas> 
      <OverLay/>
      <div className="absolute inset-0 flex justify-center items-center ">
        <div className=" font-gt md:text-lg text-xs">
          🚧  This website is currently under maintenance 🚧 
        </div>
      </div>
     
    </div>
  )
}

export default HomePage
