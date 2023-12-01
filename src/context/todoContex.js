import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, todo: "Todo msg", complete: false }],
  addTodo: (Todo) => {},
  updateTodo: (id, Todo) => {},
  deleteTodo: (id) => {},
  toogleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
