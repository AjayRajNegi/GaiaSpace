"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const atmosphereFragmentShader = `
uniform vec3 uSunDirection;
uniform vec3 uAtmosphereDayColor;
uniform vec3 uAtmosphereTwilightColor;

varying vec3 vNormal;
varying vec3 vPosition;

void main()
{
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    vec3 normal = normalize(vNormal);
    vec3 color = vec3(0.0);

    // Sun Orientation
    float sunOrientation = dot(uSunDirection, normal);

    // Atmosphere
    float atmosphereDayMix = smoothstep(-0.5, 1.0, sunOrientation);
    vec3 atmosphereColor = mix(uAtmosphereTwilightColor, uAtmosphereDayColor, atmosphereDayMix);
    color += atmosphereColor;

    // Alpha
    float edgeAlpha = dot(viewDirection, normal);
    edgeAlpha = smoothstep(0.0,0.5, edgeAlpha);

    float dayAlpha = smoothstep(-0.5,0.0, sunOrientation);
    float alpha = edgeAlpha * dayAlpha; 

    // Final color
    gl_FragColor = vec4(color, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}`;
const atmosphereVertexShader = `

varying vec3 vNormal;
varying vec3 vPosition;

void main()
{
    // Position
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    // Model normal
    vec3 modelNormal = (modelMatrix * vec4(normal, 0.0)).xyz;

    // Varyings
    vNormal = modelNormal;
    vPosition = modelPosition.xyz;
}`;

interface AtmosphereProps {
  sunDirection: THREE.Vector3;
}
const Atmosphere: React.FC<AtmosphereProps> = ({ sunDirection }) => {
  const atmosphereRef = useRef<THREE.ShaderMaterial>(null);

  useFrame(() => {
    if (atmosphereRef.current) {
      atmosphereRef.current.uniforms.uSunDirection.value.copy(sunDirection);
    }
  });

  return (
    <mesh scale={1.04}>
      <sphereGeometry args={[2, 32, 32]} />
      <shaderMaterial
        ref={atmosphereRef}
        toneMapped={false}
        side={THREE.BackSide}
        transparent={true}
        vertexShader={atmosphereVertexShader}
        fragmentShader={atmosphereFragmentShader}
        uniforms={{
          uSunDirection: { value: sunDirection },
          uAtmosphereDayColor: { value: new THREE.Color("#00aaff") },
          uAtmosphereTwilightColor: { value: new THREE.Color("#ff6600") },
        }}
      />
    </mesh>
  );
};

export default Atmosphere;
