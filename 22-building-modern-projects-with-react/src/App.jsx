import React from "react";

/** Components */
import TodoList from "./layouts/TodoList.jsx"
import CreateTodoForm from "./components/Forms/CreateTodoForm.jsx";

function App() {
  return (
    <>
      <div className="mt-24 max-w-screen-sm mx-auto">
        <CreateTodoForm />
        <TodoList />
      </div>
    </>
  )
}

export default App
