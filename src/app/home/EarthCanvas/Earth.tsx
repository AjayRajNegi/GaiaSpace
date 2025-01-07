"use client";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useMemo } from "react";
import { useTexture } from "@react-three/drei";

const earthVertexShader = `varying vec2 vUv;
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
    vUv = uv;
    vNormal = modelNormal;
    vPosition = modelPosition.xyz;
}`;
const earthFragmentShader = `uniform sampler2D uDayTexture;
uniform sampler2D uNightTexture;
uniform sampler2D uSpecularCloudsTexture;
uniform vec3 uSunDirection;
uniform vec3 uAtmosphereDayColor;
uniform vec3 uAtmosphereTwilightColor;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main()
{
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    vec3 normal = normalize(vNormal);
    vec3 color = vec3(0.0);

    // Sun Orientation
    //vec3 uSunDirection = vec3(0.0,0.0,1.0);
    float sunOrientation = dot(uSunDirection, normal);
    //color = vec3(sunOrientation);

    // Day/Night Texture
    float dayMix = smoothstep(-0.25,0.5,sunOrientation);
    vec3 dayColor = texture(uDayTexture, vUv).rgb;
    vec3 nightColor = texture(uNightTexture, vUv).rgb;
    color = mix(nightColor,dayColor,dayMix);

    // Specular clouds color
    vec2 specularCloudsColor = texture(uSpecularCloudsTexture, vUv).rg;
    //color = vec3(specularCloudsColor, 0.0);

    // clouds
    float cloudsMix = smoothstep(0.5,1.0, specularCloudsColor.g);
    cloudsMix *= dayMix;
    color = mix(color, vec3(1.0), cloudsMix);

    // Fresnel 
    float fresnel = dot(viewDirection, normal) + 1.0;
    fresnel = pow(fresnel, 2.0);

    // Atmosphere
    float atmosphereDayMix = smoothstep(-0.5, 1.0, sunOrientation);
    vec3 atmosphereColor = mix(uAtmosphereTwilightColor, uAtmosphereDayColor, atmosphereDayMix);
    color = mix(color,atmosphereColor, fresnel*atmosphereDayMix);

    //specularCloudsColor
    vec3 reflection =reflect(-uSunDirection,normal);
    float specular = -dot(reflection, viewDirection);
    specular = max(specular, 0.0);
    specular = pow(specular, 32.0);
    specular *= specularCloudsColor.r;

    vec3 specularColor = mix(vec3(1.0), atmosphereColor, fresnel);
    color += specular*specularColor;

    // Final color
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}`;

const Earth = ({ sunDirection }) => {
  const sphereRef = useRef();
  const shaderMaterialRef = useRef();

  // Load textures
  const earthDayTexture = useTexture("/static/earth/day.jpg");
  const earthNightTexture = useTexture("/static/earth/night.jpg");
  const earthSpecularCloudsTexture = useTexture(
    "/static/earth/specularClouds.jpg"
  );

  useMemo(() => {
    [earthDayTexture, earthNightTexture, earthSpecularCloudsTexture].forEach(
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = 8;
      }
    );
  }, [earthDayTexture, earthNightTexture, earthSpecularCloudsTexture]);

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.001;
    }
    shaderMaterialRef.current.uniforms.uSunDirection.value.copy(sunDirection);
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[2, 32, 32]} />
      <shaderMaterial
        ref={shaderMaterialRef}
        toneMapped={false}
        vertexShader={earthVertexShader}
        fragmentShader={earthFragmentShader}
        uniforms={{
          uDayTexture: { value: earthDayTexture },
          uNightTexture: { value: earthNightTexture },
          uSpecularCloudsTexture: { value: earthSpecularCloudsTexture },
          uSunDirection: { value: sunDirection },
          uAtmosphereDayColor: { value: new THREE.Color("#00aaff") },
          uAtmosphereTwilightColor: { value: new THREE.Color("#ff6600") },
        }}
      />
    </mesh>
  );
};

export default Earth;
