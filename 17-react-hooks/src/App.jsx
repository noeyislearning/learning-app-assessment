import Hello from "./components/Hello";
import ArrayObjectDestructuring from "./components/ArrayObjectDestructuring";
import UsingUseState from "./components/UsingUseState";
import WorkingWithComponentTrees from "./components/WorkingWithComponentTrees";
import InteractionComponentTrees from "./components/InteractionComponentTrees";
import UsingUseEffect from "./components/UsingUseEffect";
import FetchingDataWithUseEffect from "./components/fetchingDataWithUseEffect";

function App() {
  return (
    <>
      <h3>🔥 ReactJS Introduction</h3>
      <Hello name="Francis" />

      <h3>🔥 Array and Object Destructuring</h3>
      <ArrayObjectDestructuring />

      <h3>🔥 Using useState</h3>
      <UsingUseState />

      <h3>🔥 Working with Component Trees</h3>
      <WorkingWithComponentTrees />

      <h3>🔥 Interaction Component Trees</h3>
      <InteractionComponentTrees />

      <h3>🔥 Using useEffect</h3>
      <UsingUseEffect />

      <h3>🔥 Fetching Data with useEffect</h3>
      <FetchingDataWithUseEffect />
    </>
  )
}

export default App
