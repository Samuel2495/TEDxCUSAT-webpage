import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
  const pointsRef = useRef();

  const count = 100;
  const sep = 1.25;

  const [positions, phases] = useMemo(() => {
    const positions = new Float32Array(count * count * 3);
    const phases = new Float32Array(count * count);

    let i = 0;
    for (let ix = 0; ix < count; ix++) {
      for (let iy = 0; iy < count; iy++) {
        positions[i * 3] = ix * sep - (count * sep) / 2;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = iy * sep - (count * sep) / 2;

        phases[i] = ix + iy;
        i++;
      }
    }
    return [positions, phases];
  }, [count, sep]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array;

      let i = 0;
      for (let ix = 0; ix < count; ix++) {
        for (let iy = 0; iy < count; iy++) {
          positions[i * 3 + 1] = (Math.sin((ix + time) * 0.3) * 2) + (Math.sin((iy + time * 0.8) * 0.5) * 2);
          i++;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.15} color="rgba(255, 0, 0, 1)" transparent opacity={0.9} sizeAttenuation />
    </points>
  );
};

const WaveformHero = () => {
  return (
    <div className="hero-waveform-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, backgroundColor: '#0a0a0a', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 8, 30], fov: 60 }}>
        <fog attach="fog" args={['#0a0a0a', 15, 60]} />
        <Particles />
      </Canvas>
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '40%', background: 'linear-gradient(to bottom, transparent, var(--background))' }} />
    </div>
  );
};

export default WaveformHero;
