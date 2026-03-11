/* eslint-disable react/no-unknown-property */
import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { EffectComposer } from '../../../../../../node_modules/@react-three/postprocessing/dist/EffectComposer.js'
import { Bloom } from '../../../../../../node_modules/@react-three/postprocessing/dist/effects/Bloom.js'
import * as THREE from 'three'

const PLANET_RADIUS = 2
const PLANET_SCALE = 0.8
const NODE_COUNT = 70
const PARTICLE_COUNT = 200
const CONNECTION_THRESHOLD = 1.2

function randomPointOnSphere(radius) {
  const u = Math.random()
  const v = Math.random()
  const theta = 2 * Math.PI * u
  const phi = Math.acos(2 * v - 1)

  return new THREE.Vector3(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  )
}

function createParticlePositions() {
  const positions = new Float32Array(PARTICLE_COUNT * 3)

  for (let i = 0; i < PARTICLE_COUNT; i += 1) {
    const radius = 3.2 + Math.random() * 2.2
    const point = randomPointOnSphere(radius)
    const offset = i * 3

    positions[offset] = point.x
    positions[offset + 1] = point.y
    positions[offset + 2] = point.z
  }

  return positions
}

function createNodeNetwork() {
  const nodes = Array.from({ length: NODE_COUNT }, () => randomPointOnSphere(PLANET_RADIUS + 0.02))
  const connectionPoints = []

  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      if (nodes[i].distanceTo(nodes[j]) < CONNECTION_THRESHOLD) {
        connectionPoints.push(nodes[i].x, nodes[i].y, nodes[i].z)
        connectionPoints.push(nodes[j].x, nodes[j].y, nodes[j].z)
      }
    }
  }

  return {
    nodes,
    connections: new Float32Array(connectionPoints)
  }
}

function PlanetScene() {
  const planetRef = useRef(null)
  const ribbonRef = useRef(null)
  const ringInnerRef = useRef(null)
  const particleGroupRef = useRef(null)

  const network = useMemo(() => createNodeNetwork(), [])
  const particlePositions = useMemo(() => createParticlePositions(), [])

  useFrame((state) => {
    const elapsed = state.clock.elapsedTime

    if (planetRef.current) {
      planetRef.current.rotation.y += 0.002
      planetRef.current.position.y = Math.sin(elapsed * 0.5) * 0.08
    }

    if (ribbonRef.current) {
      ribbonRef.current.rotation.y += 0.003
      ribbonRef.current.rotation.z = Math.sin(elapsed * 0.35) * 0.12
    }

    if (ringInnerRef.current) {
      ringInnerRef.current.rotation.y -= 0.0024
    }

    if (particleGroupRef.current) {
      particleGroupRef.current.rotation.y += 0.0008
      particleGroupRef.current.rotation.x = Math.sin(elapsed * 0.2) * 0.08
    }
  })

  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 3, 4]} intensity={1.8} color="#4fd1ff" />
      <pointLight position={[-4, -2, -4]} intensity={0.8} color="#3b82f6" />

      <Stars radius={40} depth={40} count={400} factor={3} saturation={0} fade speed={0.35} />

      <group position={[0, 1.2, 0]} scale={PLANET_SCALE}>
        <group ref={planetRef}>
          <mesh>
            <sphereGeometry args={[1.8, 48, 48]} />
            <meshStandardMaterial
              color="#0ea5e9"
              emissive="#38bdf8"
              emissiveIntensity={1.5}
              transparent
              opacity={0.35}
              toneMapped={false}
            />
          </mesh>

          <mesh>
            <sphereGeometry args={[PLANET_RADIUS, 48, 48]} />
            <meshStandardMaterial
              color="#38bdf8"
              emissive="#0ea5e9"
              emissiveIntensity={0.6}
              wireframe
              transparent
              opacity={0.95}
              toneMapped={false}
            />
          </mesh>

          <mesh>
            <sphereGeometry args={[2.2, 32, 32]} />
            <meshBasicMaterial
              color="#38bdf8"
              transparent
              opacity={0.12}
              side={THREE.BackSide}
              toneMapped={false}
            />
          </mesh>

          <lineSegments>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                array={network.connections}
                count={network.connections.length / 3}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#38bdf8" transparent opacity={0.6} toneMapped={false} />
          </lineSegments>

          {network.nodes.map((position, index) => (
            <mesh key={index} position={position.toArray()}>
              <sphereGeometry args={[0.035, 8, 8]} />
              <meshBasicMaterial color="#38bdf8" toneMapped={false} />
            </mesh>
          ))}
        </group>

        <mesh ref={ribbonRef} rotation={[1.18, 0.12, 0]} renderOrder={1}>
          <torusGeometry args={[3.4, 0.15, 16, 200]} />
          <meshBasicMaterial
            color="#38bdf8"
            transparent
            opacity={0.7}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            toneMapped={false}
          />
        </mesh>

        <mesh ref={ringInnerRef} rotation={[1.18, -0.28, 1.08]} scale={0.86} renderOrder={1}>
          <torusGeometry args={[2.86, 0.03, 12, 120]} />
          <meshBasicMaterial
            color="#9ae6ff"
            transparent
            opacity={0.7}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            toneMapped={false}
          />
        </mesh>

        <points ref={particleGroupRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={particlePositions}
              count={particlePositions.length / 3}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            color="#38bdf8"
            size={0.045}
            transparent
            opacity={0.5}
            sizeAttenuation
            depthWrite={false}
            toneMapped={false}
          />
        </points>
      </group>

      <EffectComposer>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1.5} />
      </EffectComposer>
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
