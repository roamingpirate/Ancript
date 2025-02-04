import { Canvas, useThree} from "@react-three/fiber";
import {PerspectiveCamera,ContactShadows } from "@react-three/drei";
import { Experience } from "./components/Experience";
import { Leva } from "leva";
import { useEffect,useRef } from "react";
import { AnimationEditor } from "./components/AnimationEditor";
import { Podcast2 } from "./components/Scenes/PodcastScene2";
import { Podcast1 } from "./components/Scenes/PodcastScene1";
import { ScriptEditPage } from "./pages/ScriptEditPage";
import { PodcastTransition } from "./components/Scenes/PodcastTransition";


function App() {
  const cameraRef = useRef();
  return (
    <div style={{backgroundColor:'pink'}}>
    <div style={{display:'grid', width:'35%', aspectRatio: '4/5', margin:'15px',backgroundColor:'white'}}>
    <Canvas shadows>
    <PerspectiveCamera
        makeDefault
        position={[0, 0, 2]}
        fov={50}
        near={0.1}
        far={1000}
        ref={cameraRef}
      />
      <Podcast1/>
    </Canvas>
    </div>
    <AnimationEditor/>
    </div>
  );
}

export default App;
