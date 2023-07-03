import Hello from "./components/Hello"
import ArrayObjectDestructuring from "./components/ArrayObjectDestructuring"
import UsingUseState from "./components/UsingUseState"
import WorkingWithComponentTrees from "./components/WorkingWithComponentTrees"

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
    </>
  )
}

export default App
