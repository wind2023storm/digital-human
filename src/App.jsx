import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { KeyboardControls, Loader } from "@react-three/drei";
import { useConvaiClient } from "./hooks/useConvaiClient";
import ChatBubble from "./components/chat/Chat";

function App() {
  /**
   * Add apikey and character id here
   */
  const { client } = useConvaiClient(
    "bfb7635c-1be9-11ef-a588-42010a7be00e",
    "cfe854dcbd897665986b61e55458a195"
  );
  return (
    <>
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
          { name: "sprint", keys: ["Shift"] },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <Loader />
        {/* <Leva /> */}
        <Canvas
          shadows
          camera={{
            position: [0, 0.8, 3],
            fov: 75,
          }}
        >
          <Experience client={client} />
        </Canvas>
      </KeyboardControls>
      {/* {
      client && */}
      <ChatBubble client={client} />
      {/* } */}
    </>
  );
}

export default App;
