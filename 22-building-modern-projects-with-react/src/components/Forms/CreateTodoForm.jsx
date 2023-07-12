import React, { useState } from "react";

/** Redux */
import { useDispatch } from "react-redux";
import { createTodo } from "../../redux/todo/action";

export default function CreateTodoForm() {

  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(text));
    setText("");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <div className="flex flex-row gap-2 items-center">
            <input 
              value={text}
              onChange={handleChange}
              type="text" 
              className="w-96 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block" 
              required
            />
            <button 
              type="submit"
              className="px-5 py-2.5 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto stext-center"
              >
              Add Item
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
