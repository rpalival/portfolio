import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./gaming_desktop_pc/scene.gltf");
  const redLight = useRef();
  const greenLight = useRef();
  const blueLight = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    redLight.current.position.x = Math.sin(time) * 3;
    greenLight.current.position.y = Math.sin(time) * 3;
    blueLight.current.position.z = Math.sin(time) * 3;
  });

  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight ref={redLight} color="red" position={[-2, 2, 5]} intensity={50} />
      <pointLight ref={greenLight} color="green" position={[2, 1, 5]} intensity={50} />
      <pointLight ref={blueLight} color="blue" position={[2, 2, 5]} intensity={50} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.35 : 0.75}
        position={isMobile ? [-6.5, -3, -2.2] : [-1, -1.8, -1.5]}
        rotation={[0.0, -0.25, -0.15]}
      />
    </mesh>
  );
};
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
    <div style={{
      position: 'absolute',
      top: '550px',
      right: '40px',
      padding: '8px',
      backgroundColor: '#0C0C0B',
      borderRadius: '50px',
      zIndex: 1000
    }}>
      <p>Drag the 3D model.</p>
    </div>
    
    <Canvas
      className="canvas"
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  </>
  );
};

export default ComputersCanvas;