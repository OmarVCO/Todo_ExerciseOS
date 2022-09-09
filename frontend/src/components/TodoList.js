
import React from "react";
import Todo from "./Todo.js";
import styles from './Styles.module.css'

const Todolist = (props) => {
  return (
    <ul className={styles.todolist}>
      {props.todo.map((todo) => (
        <Todo
        completed={todo.completed}
        id={todo.id}
        title={todo.title}
        Userid={todo.userId}
        />
      ))}
    </ul>
  );
};
export default Todolist;