/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

function PlanetScene() {
  const planetRef = useRef(null)
  const ringOuterRef = useRef(null)
  const ringInnerRef = useRef(null)

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.002
    }

    if (ringOuterRef.current) {
      ringOuterRef.current.rotation.z += 0.004
    }

    if (ringInnerRef.current) {
      ringInnerRef.current.rotation.z -= 0.006
    }
  })

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 3, 5]} intensity={2} color="#4fd1ff" />
      <pointLight position={[-5, -3, -5]} intensity={1} color="#3b82f6" />

      <Stars radius={50} depth={50} count={950} factor={4} saturation={0} fade speed={0.35} />

      <group position={[0, 0.95, 0]}>
        <mesh ref={planetRef}>
          <sphereGeometry args={[2.5, 48, 48]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0ea5e9"
            emissiveIntensity={0.6}
            wireframe
            transparent
            opacity={0.95}
          />
        </mesh>

        <mesh scale={0.96}>
          <sphereGeometry args={[2.5, 32, 32]} />
          <meshBasicMaterial color="#0b1120" transparent opacity={0.16} />
        </mesh>

        <mesh>
          <sphereGeometry args={[2.7, 40, 40]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.08} />
        </mesh>

        <mesh ref={ringOuterRef} rotation={[1.18, 0.1, 0]}>
          <torusGeometry args={[3.4, 0.05, 16, 160]} />
          <meshBasicMaterial color="#67e8f9" transparent opacity={0.6} />
        </mesh>

        <mesh ref={ringInnerRef} rotation={[1.18, -0.16, 1.2]} scale={0.82}>
          <torusGeometry args={[3.4, 0.04, 16, 160]} />
          <meshBasicMaterial color="#60a5fa" transparent opacity={0.45} />
        </mesh>
      </group>
    </>
  )
}

function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0.7, 9], fov: 34 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <PlanetScene />
    </Canvas>
  )
}

export default HeroScene
