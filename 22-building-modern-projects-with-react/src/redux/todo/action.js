import { v4 as uuidv4 } from "uuid";

export const CREATE_TODO = "CREATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";


let nextTodoId = 0;

export const createTodo = (id, text) => ({
  type: CREATE_TODO,
  payload: { id, text },
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const completeTodo = id => ({
  type: COMPLETE_TODO,
  payload: { id },
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id },
});
