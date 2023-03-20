import React from "react";
import TodoModel from "../models/todo";
import classes from "./Todo.module.css";

const Todo: React.FC<{
  item: TodoModel;
  onDeleteTodo: (event: React.MouseEvent) => void;
}> = (props) => {
  return (
    <li
      className={classes["item"]}
      key={props.item.id}
      onClick={props.onDeleteTodo}
    >
      <span className={classes["todo-text"]}>{props.item.text}</span>
      <span className={classes["delete-info"]}>Click to delete</span>
    </li>
  );
};

export default Todo;
