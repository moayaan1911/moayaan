"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, Environment, Html } from "@react-three/drei"
import { useRef } from "react"
import type * as THREE from "three"
import { SiBitcoin, SiEthereum, SiSolana, SiPolygon, SiChainlink } from "react-icons/si"
import { FaCoins } from "react-icons/fa"

// Floating crypto icons component
function FloatingCryptoIcons() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  const cryptoIcons = [
    { Icon: SiBitcoin, position: [4, 2, 0], color: "#f7931a" },
    { Icon: SiEthereum, position: [-4, 1, 2], color: "#627eea" },
    { Icon: SiSolana, position: [2, -2, -3], color: "#9945ff" },
    { Icon: SiPolygon, position: [-3, -1, 1], color: "#8247e5" },
    { Icon: SiChainlink, position: [1, 3, -2], color: "#375bd2" },
    { Icon: FaCoins, position: [-2, 2, -1], color: "#ffd700" },
  ]

  return (
    <group ref={groupRef}>
      {cryptoIcons.map((crypto, index) => (
        <Float key={index} speed={1 + index * 0.2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Html position={crypto.position as [number, number, number]} transform occlude distanceFactor={8}>
            <div className="pointer-events-none">
              <crypto.Icon size={40} color={crypto.color} className="drop-shadow-lg animate-pulse" />
            </div>
          </Html>
        </Float>
      ))}
    </group>
  )
}

export function Scene3D() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -100 }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Environment preset="night" />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffd700" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#627eea" />

        <FloatingCryptoIcons />

        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
