"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function EthereumParticle({ position, speed }: { position: [number, number, number]; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.03 * speed
      meshRef.current.rotation.y += 0.02 * speed
      meshRef.current.rotation.z += 0.025 * speed

      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 6
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * speed * 0.8) * 8
      meshRef.current.position.z = position[2] + Math.cos(state.clock.elapsedTime * speed * 0.6) * 6
    }
  })

  const size = 0.8 + Math.random() * 1.2

  return (
    <mesh ref={meshRef} position={position} scale={[size, size, size]}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#627EEA"
        emissive="#1e40af"
        emissiveIntensity={0.3}
        transparent
        opacity={0.8}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  )
}

function EthereumParticles() {
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < 100; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 80, // Wider spread for full screen coverage
          (Math.random() - 0.5) * 60,
          (Math.random() - 0.5) * 40,
        ] as [number, number, number],
        speed: 0.5 + Math.random() * 1.5,
      })
    }
    return temp
  }, [])

  return (
    <>
      {particles.map((particle, index) => (
        <EthereumParticle key={index} position={particle.position} speed={particle.speed} />
      ))}
    </>
  )
}

export function EthereumParticleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -10 }}>
      <Canvas camera={{ position: [0, 0, 30], fov: 75 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[20, 20, 20]} intensity={1.2} color="#627EEA" />
        <pointLight position={[-20, -20, -20]} intensity={0.8} color="#1e40af" />
        <directionalLight position={[0, 10, 5]} intensity={0.5} />
        <EthereumParticles />
      </Canvas>
    </div>
  )
}
