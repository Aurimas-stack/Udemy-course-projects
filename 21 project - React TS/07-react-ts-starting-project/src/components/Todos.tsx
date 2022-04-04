import { FC, useContext } from "react";

import TodoItem from "./TodoItem";

import { TodosContext } from "../store/todos-context";

import classes from "./Todos.module.css";

const Todos: FC = () => {
  const todosCtx = useContext(TodosContext);
  
  return (
    <ul className={classes.todos}>
      {todosCtx.todos.map((todo) => (
        <TodoItem
          onRemoveTodo={todosCtx.removeTodo.bind(null, todo.id)}
          key={todo.id}
          text={todo.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
