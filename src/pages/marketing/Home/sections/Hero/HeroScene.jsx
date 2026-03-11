/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Line, PerspectiveCamera, Sparkles } from '@react-three/drei'

function CoreScene() {
  const shellRef = useRef(null)
  const wireRef = useRef(null)
  const ringOuterRef = useRef(null)
  const ringInnerRef = useRef(null)
  const boardRef = useRef(null)

  useFrame((state, delta) => {
    const elapsed = state.clock.elapsedTime

    if (shellRef.current) {
      shellRef.current.rotation.y += delta * 0.3
      shellRef.current.rotation.x = Math.sin(elapsed * 0.35) * 0.08
    }

    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * 0.42
      wireRef.current.rotation.z = Math.sin(elapsed * 0.5) * 0.08
    }

    if (ringOuterRef.current) {
      ringOuterRef.current.rotation.z += delta * 0.48
    }

    if (ringInnerRef.current) {
      ringInnerRef.current.rotation.z -= delta * 0.72
    }

    if (boardRef.current) {
      boardRef.current.position.y = -1.78 + Math.sin(elapsed * 0.8) * 0.03
    }
  })

  return (
    <>
      <color attach="background" args={['#050b14']} />
      <fog attach="fog" args={['#050b14', 8, 18]} />
      <PerspectiveCamera makeDefault position={[0, 0.7, 7.2]} fov={32} />

      <ambientLight intensity={1.2} color="#79d8ff" />
      <pointLight position={[0, 2.6, 2.8]} intensity={40} color="#43f2ff" />
      <pointLight position={[3.6, -0.4, 1.5]} intensity={18} color="#6c7dff" />
      <pointLight position={[-3.4, 0.8, 1.2]} intensity={12} color="#2ddcff" />
      <spotLight position={[0, 5, 4]} angle={0.38} intensity={22} penumbra={0.9} color="#9ceeff" />

      <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.32}>
        <group position={[0, 0.4, 0]}>
          <mesh ref={shellRef}>
            <sphereGeometry args={[1.46, 64, 64]} />
            <meshPhysicalMaterial
              color="#08172a"
              emissive="#1cdcff"
              emissiveIntensity={0.55}
              roughness={0.14}
              metalness={0.08}
              transmission={0.35}
              transparent
              opacity={0.96}
              clearcoat={1}
              clearcoatRoughness={0.1}
            />
          </mesh>

          <mesh ref={wireRef} scale={1.025}>
            <sphereGeometry args={[1.46, 20, 20]} />
            <meshBasicMaterial color="#6af4ff" wireframe transparent opacity={0.72} />
          </mesh>

          <mesh position={[0, 0, -0.05]} scale={0.96}>
            <sphereGeometry args={[1.46, 32, 32]} />
            <meshBasicMaterial color="#1d68ff" transparent opacity={0.18} />
          </mesh>

          <mesh position={[0.4, 0.35, 0.92]}>
            <sphereGeometry args={[0.15, 18, 18]} />
            <meshBasicMaterial color="#c4f7ff" transparent opacity={0.9} />
          </mesh>
        </group>
      </Float>

      <group rotation={[1.1, 0.22, 0.06]} position={[0, 0.22, 0]}>
        <mesh ref={ringOuterRef}>
          <torusGeometry args={[2.9, 0.085, 28, 240]} />
          <meshStandardMaterial color="#5ceaff" emissive="#2ee1ff" emissiveIntensity={1.8} roughness={0.2} metalness={0.3} />
        </mesh>

        <mesh ref={ringInnerRef} scale={[0.88, 0.88, 0.88]} rotation={[0, 0, 1.4]}>
          <torusGeometry args={[2.25, 0.05, 20, 220]} />
          <meshStandardMaterial color="#92a8ff" emissive="#8b79ff" emissiveIntensity={1.45} roughness={0.24} metalness={0.25} transparent opacity={0.85} />
        </mesh>
      </group>

      <group ref={boardRef} position={[0, -1.78, 0]} rotation={[-0.35, 0, 0]}>
        <mesh receiveShadow>
          <cylinderGeometry args={[3.8, 4.5, 0.55, 64]} />
          <meshStandardMaterial color="#07111f" emissive="#0d2d52" emissiveIntensity={0.75} roughness={0.62} metalness={0.18} />
        </mesh>

        <mesh position={[0, 0.22, 0]}>
          <cylinderGeometry args={[3.15, 3.65, 0.08, 64]} />
          <meshStandardMaterial color="#0b1930" emissive="#102a51" emissiveIntensity={0.9} roughness={0.42} metalness={0.28} />
        </mesh>
      </group>

      <Line points={[[-2.6, -1.38, 0.8], [-1.5, -1.12, 0.38], [-0.82, -0.88, 0.2]]} color="#3fe7ff" lineWidth={2.6} transparent opacity={0.95} />
      <Line points={[[2.7, -1.28, 0.7], [1.76, -1.06, 0.32], [0.92, -0.84, 0.16]]} color="#69d5ff" lineWidth={2.1} transparent opacity={0.82} />
      <Line points={[[-0.2, -1.6, 1.1], [0.1, -1.25, 0.54], [0.06, -0.95, 0.2]]} color="#8f83ff" lineWidth={1.9} transparent opacity={0.7} />

      <Sparkles count={90} size={2.6} speed={0.45} scale={[8, 4, 6]} position={[0, 0.2, 0]} color="#6be9ff" />
      <Sparkles count={40} size={4.2} speed={0.25} scale={[4.5, 2.8, 3]} position={[0, -1.2, 0.4]} color="#8a74ff" />
    </>
  )
}

function HeroScene() {
  return (
    <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <CoreScene />
    </Canvas>
  )
}

export default HeroScene
