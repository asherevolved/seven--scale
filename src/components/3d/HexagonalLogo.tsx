import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

const HexagonalLogo = () => {
  const groupRef = useRef<THREE.Group>(null);
  const hexRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  // Create hexagon geometry
  const hexagonGeometry = new THREE.CylinderGeometry(2, 2, 0.3, 6);
  
  return (
    <group ref={groupRef}>
      {/* Main hexagon with gradient material */}
      <mesh ref={hexRef} geometry={hexagonGeometry}>
        <meshPhongMaterial 
          color="#7B2CFF" 
          emissive="#5B00FF" 
          emissiveIntensity={0.2}
          shininess={100}
        />
      </mesh>
      
      {/* Glow effect */}
      <mesh ref={glowRef} geometry={hexagonGeometry} scale={1.2}>
        <meshBasicMaterial 
          color="#B583FF" 
          transparent 
          opacity={0.3}
        />
      </mesh>
      
      {/* SS Text */}
      <Center>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={0.8}
          height={0.1}
          position={[0, 0, 0.2]}
        >
          SS
          <meshPhongMaterial 
            color="#FFFFFF" 
            emissive="#B583FF" 
            emissiveIntensity={0.1}
          />
        </Text3D>
      </Center>
    </group>
  );
};

export default HexagonalLogo;