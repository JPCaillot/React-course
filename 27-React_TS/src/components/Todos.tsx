// import React from "react";
import { useContext } from 'react';

// import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

import classes from "./Todos.module.css";

// const Todos: React.FC<{ items: Todo[]; onRemove: (id: string) => void }> = (
//   props
// ) => {
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.list}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onDelete={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  // return (
  //   <ul className={classes.list}>
  //     {props.items.map((item) => (
  //       <TodoItem
  //         key={item.id}
  //         text={item.text}
  //         onDelete={props.onRemove.bind(null, item.id)}
  //       />
  //     ))}
  //   </ul>
  // );
};

export default Todos;
