import "./App.css";

// import { useState } from "react";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";
// import Todo from "./models/Todo";

function App() {
  
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );

  // const [todos, setTodos] = useState<Todo[]>([]);

  // function addHandler(newTodoText: string) {
  //   const newTodo = new Todo(newTodoText);

  //   setTodos((prevTodos) => {
  //     return prevTodos.concat(newTodo);
  //   });
  // }

  // function removeHandler(todoId: string) {
  //   const newTodoList = todos.filter((TodoItem) => TodoItem.id !== todoId);
  //   setTodos(newTodoList);
  // }

  // const contextValue: TodosContextObj = {
  //   items: todos,
  //   addTodo: addHandler,
  //   removeTodo: removeHandler,
  // };
  

  // return (
  //   <TodosContextProvider>
  //     <NewTodo onAdd={addHandler} />
  //     <Todos items={todos} onRemove={removeHandler} />
  //   </TodosContextProvider>
  // );

}

export default App;
