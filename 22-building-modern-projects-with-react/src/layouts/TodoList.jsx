import React from "react";

/** Redux */
import { useSelector } from "react-redux";

/** Components */
import TodoListItem from "../components/Cards/TodoListItem";

export default function TodoList() {
  // Select 'todos' from Redux state and make sure it is not undefined
  const todos = useSelector(state => state.todo) || []; // changed 'state.todos' to 'state.todo'

  // Check if each todo item is incomplete or complete
  const incompleteTodos = todos.filter(todo => !todo.completed);
  const completeTodos = todos.filter(todo => todo.completed);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="my-8 text-lg font-bold">
          Incomplete Tasks
        </div>
        <div className="flex flex-col gap-4">
          {incompleteTodos.map(todo => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
        </div>
        <div className="my-8 text-lg font-bold">
          Complete Tasks
        </div>
        <div className="flex flex-col gap-4">
          {completeTodos.map(todo => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </>
  )
}
