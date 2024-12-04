import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useLoader } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { AmbientLight, DirectionalLight } from 'three';

const Car360View = () => {
  const carRef = useRef();
  const [model, setModel] = useState(null);
  
  // Load the 3D car model using OBJLoader
  const objLoader = new OBJLoader();
  
  useEffect(() => {
    objLoader.load(
      '/path/to/your/car-model.obj',  // Replace with your actual model path
      (loadedModel) => {
        setModel(loadedModel);
      },
      undefined,  // Optional callback for progress
      (error) => {
        console.error('Error loading the 3D model:', error);
      }
    );
  }, [objLoader]);

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Canvas>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        {/* 3D Model */}
        {model && (
          <primitive
            object={model}
            ref={carRef}
            scale={0.5} // Adjust the size of your car model
            position={[0, -1, 0]} // Adjust model position
          />
        )}
        
        {/* Orbit Controls for 360-degree rotation */}
        <OrbitControls />
      </Canvas>
    </div>
    
  );
};

export default Car360View;
