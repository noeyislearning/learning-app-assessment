import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, completeTodo } from "../../redux/todo/action";

export default function TodoListItem({ todo }) {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(completeTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
  };

  
  return (
    <>
      <div className="px-4 py-2 border border-black rounded-lg">
        <div className="p-4 flex flex-col items-center">
          <div className="text-lg font-bold">
            {todo.text}
          </div>
          <div className="text-xs">
            Created at: {new Date(todo.createdAt).toLocaleDateString()} 
          </div>
          <div className="mt-4 flex flex-row gap-2 items-center">
            <button className="px-4 py-2 w-24 bg-green-400 hover:bg-green-600 rounded-lg text-xs text-white" onClick={handleComplete}>Complete</button>
            <button className="px-4 py-2 w-24 bg-red-400 hover:bgred-600 rounded-lg text-xs text-white" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}