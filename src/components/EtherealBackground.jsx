import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const EtherealShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color('#af0000') },
    uSecondaryColor: { value: new THREE.Color('#000000') },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor;
    uniform vec3 uSecondaryColor;
    varying vec2 vUv;

    // Simplex noise-like function
    float noise(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec2 p = vUv * 2.0 - 1.0;
      float time = uTime * 0.2;
      
      // Create wavy interference patterns
      float wave = sin(p.x * 2.0 + time) * 0.5 + 0.5;
      wave += sin(p.y * 3.0 - time * 1.5) * 0.5 + 0.5;
      wave += sin((p.x + p.y) * 1.5 + time) * 0.5 + 0.5;
      
      wave /= 3.0; // Normalize
      
      // Smooth gradient based on wave intensity
      vec3 finalColor = mix(uSecondaryColor, uColor, wave * 0.4);
      
      // Vignette effect to keep shadows dark
      float dist = length(p);
      finalColor *= smoothstep(1.5, 0.2, dist);

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

const Plane = () => {
  const mesh = useRef();

  useFrame((state) => {
    mesh.current.material.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[5, 5]} />
      <shaderMaterial
        fragmentShader={EtherealShaderMaterial.fragmentShader}
        vertexShader={EtherealShaderMaterial.vertexShader}
        uniforms={EtherealShaderMaterial.uniforms}
        transparent
      />
    </mesh>
  );
};

const EtherealBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none',
      background: '#d4ff00'
    }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Plane />
      </Canvas>
    </div>
  );
};

export default EtherealBackground;
