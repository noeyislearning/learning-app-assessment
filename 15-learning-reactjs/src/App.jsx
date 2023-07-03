import Hello from "./components/Hello";
import RenderingList from "./components/RenderingList";
import RenderingObjectList from "./components/RenderingObjectList";
import ConditionalRendering from "./components/ConditionalRendering";

const city = {
  name: "Mabalacat",
  country: "Philippines"
}

const renderList = [
  "Item 1",
  "Item 2",
  "Item 3"
]

const renderObjectList = [
  {id: 1, name: "Item 1", desc: "This is Item 1."},
  {id: 2, name: "Item 2", desc: "This is Item 2."},
  {id: 3, name: "Item 3", desc: "This is Item 3."}
]

function App(props) {
  return (
    <>
      <h1>🔥 In-Page list</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>

      <h1>🔥 In-Page Rendering</h1>
      <div>
        <h1>
          {city.name} is in {city.country}
        </h1>
      </div>

      <h1>🔥 Component Rendering</h1>
      <Hello 
        library="This is a JavaScript Library, ReactJS."
        message="Let's have fun!"
        number={3}
      />

      <h1>🔥 Component List Rendering</h1>
      <RenderingList list={renderList}/>

      <h1>🔥 Component Object List Rendering</h1>
      <RenderingObjectList list={renderObjectList}/>

      <h1>🔥 Component Conditional Rendering</h1>
      <ConditionalRendering season="summer"/>
    </>
  )
}

export default App
