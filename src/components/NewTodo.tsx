import React, { useContext } from "react";
import { useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
    todoTextInputRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={classes["form"]}>
      <input
        type="text"
        id="text"
        ref={todoTextInputRef}
        required
        placeholder="Enter you Todo here"
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
