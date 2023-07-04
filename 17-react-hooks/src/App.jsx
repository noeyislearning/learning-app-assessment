import Hello from "./components/Hello";
import ArrayObjectDestructuring from "./components/ArrayObjectDestructuring";
import UsingUseState from "./components/UsingUseState";
import WorkingWithComponentTrees from "./components/WorkingWithComponentTrees";
import InteractionComponentTrees from "./components/InteractionComponentTrees";
import UsingUseEffect from "./components/UsingUseEffect";
import FetchingDataWithUseEffect from "./components/fetchingDataWithUseEffect";
import HandlingComplexStateUseReducer from "./components/HandlingComplexStateUseReducer";
import DispatchingActions from "./components/DispatchingActions";
import ManagingFromInputs from "./components/ManagingFromInputs";
import CreatingControlledComponents from "./components/CreatingControlledComponents";
import ReusingLogicWithCustomHooks from "./components/ReusingLogicWithCustomHooks";
import PlacingDatainContext from "./components/PlacingDatainContext";

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

      <h3>🔥 Handling Complex State with useReducer</h3>
      <HandlingComplexStateUseReducer />

      <h3>🔥 Dispatching Actions</h3>
      <DispatchingActions />

      <h3>🔥 Managing Form Inputs</h3>
      <ManagingFromInputs />

      <h3>🔥 Creating Controlled Components</h3>
      <CreatingControlledComponents />

      <h3>🔥 Reusing Logic with Custom Hooks</h3>
      <ReusingLogicWithCustomHooks />

      <h3>🔥 Placing Data in Context</h3>
      <PlacingDatainContext />
    </>
  )
}

export default App
