import { CREATE_TODO, REMOVE_TODO, COMPLETE_TODO } from "./action";

export const todoReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text, id } = payload;
      const newTodo = {
        id,
        text,
        createdAt: new Date().toISOString(), // Adding the createdAt field
        completed: false,
      };
      return [...state, newTodo];
    }
    case REMOVE_TODO: {
      const { id } = payload;
      return state.filter(todo => todo.id !== id);
    }
    case COMPLETE_TODO: {
      const { id } = payload;
      return state.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    }
    default:
      return state;
  }
};
