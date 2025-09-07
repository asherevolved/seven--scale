import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import HexagonalLogo from './HexagonalLogo';
import ParticleField from './ParticleField';

interface Scene3DProps {
  enableInteraction?: boolean;
  className?: string;
}

const Scene3D = ({ enableInteraction = false, className = "" }: Scene3DProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!enableInteraction) return;
    
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    setMousePosition({ x: x * 0.1, y: y * 0.1 });
  };

  return (
    <div 
      className={`w-full h-full ${className}`}
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#7B2CFF" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#B583FF" />
          
          {/* Environment for reflections */}
          <Environment preset="night" />
          
          {/* Particle background */}
          <ParticleField />
          
          {/* Main logo */}
          <group position={[mousePosition.x, mousePosition.y, 0]}>
            <HexagonalLogo />
          </group>
          
          {/* Controls for interaction */}
          {enableInteraction && (
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              enableRotate={false}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;