import React, { useState } from "react";
import TodoModel from "../models/todo";

type TodosContextObj = {
  items: TodoModel[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

interface Props {
  children: React.ReactNode;
}

const TodosContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new TodoModel(text);

    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
