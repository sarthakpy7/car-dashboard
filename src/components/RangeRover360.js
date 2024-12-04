import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './RangeRover360.css'; // Optional styling

const RangeRoverModel = () => {
  const { scene } = useGLTF('/models/range_rover.glb'); // Path to your model
  return <primitive object={scene} scale={1.5} />;
};

const RangeRover360 = () => {
  return (
    <div className="range-rover-360">
      <h2>360° Range Rover View</h2>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <Suspense fallback={<div>Loading...</div>}>
          <RangeRoverModel />
        </Suspense>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
};

export default RangeRover360;
