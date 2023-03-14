import React, { useState } from "react";
import Todo from "../models/Todo";

type Props = { children: React.ReactNode };

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
  }

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<Props> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addHandler(newTodoText: string) {
    const newTodo = new Todo(newTodoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  }

  function removeHandler(todoId: string) {
    const newTodoList = todos.filter((TodoItem) => TodoItem.id !== todoId);
    setTodos(newTodoList);
  }

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addHandler,
    removeTodo: removeHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
