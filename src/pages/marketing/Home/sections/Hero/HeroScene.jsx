/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

function PlanetScene() {
  const planetRef = useRef(null)
  const ringOuterRef = useRef(null)
  const ringInnerRef = useRef(null)

  useFrame((state) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.002
      planetRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.08
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
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 3, 4]} intensity={1.8} color="#4fd1ff" />
      <pointLight position={[-4, -2, -4]} intensity={0.8} color="#3b82f6" />

      <Stars radius={40} depth={40} count={400} factor={3} saturation={0} fade speed={0.35} />

      <group position={[0, 1.2, 0]}>
        <mesh ref={planetRef}>
          <sphereGeometry args={[2, 48, 48]} />
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
          <sphereGeometry args={[2, 32, 32]} />
          <meshBasicMaterial color="#0b1120" transparent opacity={0.16} />
        </mesh>

        <mesh>
          <sphereGeometry args={[2.2, 32, 32]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.12} />
        </mesh>

        <mesh ref={ringOuterRef} rotation={[1.18, 0.1, 0]}>
          <torusGeometry args={[3.0, 0.02, 16, 80]} />
          <meshBasicMaterial color="#9ae6ff" transparent opacity={0.6} />
        </mesh>

        <mesh ref={ringInnerRef} rotation={[1.18, -0.16, 1.2]} scale={0.82}>
          <torusGeometry args={[3.0, 0.02, 16, 80]} />
          <meshBasicMaterial color="#c4b5fd" transparent opacity={0.6} />
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
