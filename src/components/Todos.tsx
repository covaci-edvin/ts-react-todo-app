import React, { useContext } from "react";
import TodoModel from "../models/todo";
import Todo from "./Todo";
import { TodosContext } from "../store/todos-context";

// styles
import classes from "./Todos.module.css";

const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes["todos"]}>
      {todosCtx.items.map((item) => (
        <Todo
          key={item.id}
          item={item}
          onDeleteTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
